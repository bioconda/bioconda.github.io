/**
 * Bioconda Package Registry Browser
 * Reactive component powered by Alpine.js
 */

(function () {
    const EMPTY = [];

    function packageRegistryComponent() {
        // The package list is ~11k entries, so it must never be walked once per
        // rendered expression. Two rules keep search fast:
        //
        //  1. The master lists live in this closure, NOT on `this`. Reading
        //     them through Alpine's reactive proxy would register one
        //     dependency per package per effect, so every keystroke would
        //     re-validate tens of thousands of them.
        //  2. `filteredPackages` is memoized on (query, platform, sortBy), so
        //     the O(n) filter runs once per change instead of once per access.
        //     The template reads it through totalFiltered / totalPages /
        //     paginatedPackages / paginationRange many times per tick.
        let byNameAsc = [];   // all packages, pre-sorted once, name A -> Z
        let byNameDesc = [];  // all packages, pre-sorted once, name Z -> A
        let cacheKey = null;
        let cacheList = null;

        function search(packages, tokens, platform) {
            // Single O(n) pass. `byNameAsc`/`byNameDesc` are already in the
            // requested order, so filtering preserves it -- no sort needed.
            const out = [];
            const wantPlatform = platform !== "all";
            for (let i = 0; i < packages.length; i++) {
                const pkg = packages[i];
                if (wantPlatform && !(pkg.platforms && pkg.platforms.includes(platform))) {
                    continue;
                }
                const hay = pkg._searchStr;
                let hit = true;
                for (let t = 0; t < tokens.length; t++) {
                    if (hay.indexOf(tokens[t]) === -1) { hit = false; break; }
                }
                if (hit) out.push(pkg);
            }
            return out;
        }

        function rankExactAndPrefixFirst(list, query) {
            // Reproduces the previous `(a,b) => ...` comparator exactly, but in
            // one pass instead of O(n log n) comparisons: the list is already
            // name-sorted, so bucketing by rank is order-preserving.
            const exact = [];
            const prefix = [];
            const rest = [];
            for (let i = 0; i < list.length; i++) {
                const lower = list[i]._lowerName;
                if (lower === query) exact.push(list[i]);
                else if (lower.startsWith(query)) prefix.push(list[i]);
                else rest.push(list[i]);
            }
            // Nothing to promote (e.g. the query only matched summaries or
            // licenses), so avoid re-allocating the result.
            if (!exact.length && !prefix.length) return list;
            return exact.concat(prefix, rest);
        }

        function computeFiltered() {
            const base = this.sortBy === "name-desc" ? byNameDesc : byNameAsc;
            const rawQuery = this.query.trim().toLowerCase();
            const tokens = rawQuery ? rawQuery.split(/\s+/).filter(Boolean) : null;

            if (!tokens) {
                // No search term: for "all platforms" the master list is already
                // the answer, so hand it back untouched.
                return this.platform === "all" ? base : search(base, EMPTY, this.platform);
            }

            const list = search(base, tokens, this.platform);
            if (this.sortBy === "name-asc") {
                return rankExactAndPrefixFirst(list, rawQuery);
            }
            return list;
        }

        return {
            packages: [],
            stats: {
                total: 0,
                noarch: 0,
                noarchRatio: "0",
                linux64: 0,
                linux64Ratio: "0",
                linuxAarch64: 0,
                linuxAarch64Ratio: "0",
                osx64: 0,
                osx64Ratio: "0",
                osxArm64: 0,
                osxArm64Ratio: "0",
            },
            query: "",
            platform: "all",
            sortBy: "name-asc",
            page: 1,
            perPage: 25,
            packageManager: "pixi",
            copiedPackage: null,
            _urlDebounceTimer: null,

            loadPackages(rawList) {
                if (!Array.isArray(rawList)) return;
                const packages = new Array(rawList.length);
                for (let i = 0; i < rawList.length; i++) {
                    const pkg = rawList[i];
                    const name = pkg.name || "";
                    const platforms = Array.isArray(pkg.platforms)
                        ? pkg.platforms
                        : (pkg.platforms ? [pkg.platforms] : []);
                    const summary = pkg.summary || "";
                    const license = pkg.license || "";
                    packages[i] = {
                        name: name,
                        docname: pkg.docname || ("recipes/" + name + "/README"),
                        platforms: platforms,
                        latest_version: pkg.latest_version || "",
                        summary: summary,
                        home: pkg.home || "",
                        license: license,
                        doc_url: pkg.doc_url || "",
                        dev_url: pkg.dev_url || "",
                        // Precomputed once, so filtering never has to rebuild
                        // these for all 11k packages.
                        _searchStr: (
                            name + " " +
                            summary + " " +
                            license + " " +
                            platforms.join(" ")
                        ).toLowerCase(),
                        _lowerName: name.toLowerCase(),
                    };
                }

                // Sort the master lists exactly once, at load time. Filtering a
                // pre-sorted list preserves the order, so the hot path never
                // calls localeCompare. Both directions are built with a real
                // sort (rather than reversing one) so each matches the
                // previous comparator's output exactly -- localeCompare is not
                // a plain code-point order, e.g. it sorts "ont_vbz" before
                // "ont-modkit".
                byNameAsc = packages.slice().sort(function (a, b) {
                    return a._lowerName.localeCompare(b._lowerName);
                });
                byNameDesc = packages.slice().sort(function (a, b) {
                    return b._lowerName.localeCompare(a._lowerName);
                });

                // Still exposed for stats/debugging, but never scanned.
                this.packages = packages;

                cacheKey = null;
                cacheList = null;
                this.computeStats();
                this.readUrlParams();
            },

            init() {
                // 1. Try reading embedded JSON dataset first
                let raw = null;
                const dataEl = document.getElementById("bioconda-packages-data");
                if (dataEl && dataEl.textContent && dataEl.textContent.trim()) {
                    try {
                        raw = JSON.parse(dataEl.textContent);
                    } catch (e) {
                        console.error("Failed to parse bioconda-packages-data:", e);
                    }
                }

                if (Array.isArray(raw) && raw.length > 0) {
                    this.loadPackages(raw);
                } else {
                    // Fallback: fetch packages-index.json
                    fetch("./packages-index.json")
                        .then(res => {
                            if (!res.ok) throw new Error("HTTP " + res.status);
                            return res.json();
                        })
                        .then(data => {
                            if (Array.isArray(data) && data.length > 0) {
                                this.loadPackages(data);
                            }
                        })
                        .catch(err => {
                            console.debug("packages-index.json fetch fallback:", err);
                        });
                }

                // Listen for keyboard shortcuts
                window.addEventListener("keydown", (e) => {
                    // Pressing '/' focuses search input if not already inside an input/textarea
                    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
                        e.preventDefault();
                        const searchInput = document.getElementById("bioconda-search-input");
                        if (searchInput) {
                            searchInput.focus();
                            searchInput.select();
                        }
                    }
                });

                // Watch state changes to update URL and clamp pagination
                this.$watch("query", () => {
                    this.page = 1;
                    this.updateUrl();
                });
                this.$watch("platform", () => {
                    this.page = 1;
                    this.updateUrl();
                });
                this.$watch("sortBy", () => {
                    this.page = 1;
                    this.updateUrl();
                });
                this.$watch("perPage", () => {
                    this.page = 1;
                    this.updateUrl();
                });
                this.$watch("packageManager", () => {
                    this.updateUrl();
                });
                this.$watch("page", () => {
                    this.updateUrl();
                });
            },

            computeStats() {
                // Read the plain master list, not this.packages: this runs once
                // per load, but touching 11k reactive proxies is still ~100x
                // the cost of reading the plain objects.
                const all = byNameAsc;
                const total = all.length;
                let noarch = 0;
                let linux64 = 0;
                let linuxAarch64 = 0;
                let osx64 = 0;
                let osxArm64 = 0;

                for (let i = 0; i < total; i++) {
                    const plats = all[i].platforms;
                    if (!plats) continue;
                    if (plats.indexOf("noarch") !== -1) noarch++;
                    if (plats.indexOf("linux-64") !== -1) linux64++;
                    if (plats.indexOf("linux-aarch64") !== -1) linuxAarch64++;
                    if (plats.indexOf("osx-64") !== -1) osx64++;
                    if (plats.indexOf("osx-arm64") !== -1) osxArm64++;
                }

                const calcRatio = (cnt) => total > 0 ? ((cnt / total) * 100).toFixed(1) : "0";

                this.stats = {
                    total,
                    noarch,
                    noarchRatio: calcRatio(noarch),
                    linux64,
                    linux64Ratio: calcRatio(linux64),
                    linuxAarch64,
                    linuxAarch64Ratio: calcRatio(linuxAarch64),
                    osx64,
                    osx64Ratio: calcRatio(osx64),
                    osxArm64,
                    osxArm64Ratio: calcRatio(osxArm64),
                };
            },

            readUrlParams() {
                try {
                    const params = new URLSearchParams(window.location.search);
                    if (params.has("q")) this.query = params.get("q");
                    if (params.has("platform")) this.platform = params.get("platform");
                    if (params.has("sort")) this.sortBy = params.get("sort");
                    if (params.has("pm")) this.packageManager = params.get("pm");
                    if (params.has("limit")) this.perPage = parseInt(params.get("limit"), 10) || 25;
                    if (params.has("page")) this.page = parseInt(params.get("page"), 10) || 1;
                } catch (e) {
                    console.warn("Could not read URL parameters:", e);
                }
            },

            updateUrl() {
                clearTimeout(this._urlDebounceTimer);
                this._urlDebounceTimer = setTimeout(() => {
                    try {
                        const url = new URL(window.location);
                        if (this.query.trim()) url.searchParams.set("q", this.query.trim());
                        else url.searchParams.delete("q");

                        if (this.platform !== "all") url.searchParams.set("platform", this.platform);
                        else url.searchParams.delete("platform");

                        if (this.sortBy !== "name-asc") url.searchParams.set("sort", this.sortBy);
                        else url.searchParams.delete("sort");

                        if (this.packageManager !== "pixi") url.searchParams.set("pm", this.packageManager);
                        else url.searchParams.delete("pm");

                        if (this.perPage !== 25) url.searchParams.set("limit", this.perPage);
                        else url.searchParams.delete("limit");

                        if (this.page > 1) url.searchParams.set("page", this.page);
                        else url.searchParams.delete("page");

                        window.history.replaceState({}, "", url.pathname + url.search);
                    } catch (e) {
                        // ignore history errors in non-browser envs
                    }
                }, 200);
            },

            setPlatform(p) {
                this.platform = p;
                this.page = 1;
            },

            clearFilters() {
                this.query = "";
                this.platform = "all";
                this.sortBy = "name-asc";
                this.page = 1;
            },

            setPage(p) {
                const max = this.totalPages;
                if (p < 1) p = 1;
                if (p > max) p = max;
                this.page = p;
                this.scrollToTop();
            },

            scrollToTop() {
                const header = document.getElementById("packages-search-toolbar");
                if (header) {
                    const rect = header.getBoundingClientRect();
                    if (rect.top < 0) {
                        header.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }
            },

            get filteredPackages() {
                // Memoized: the template reaches this getter through
                // totalFiltered, totalPages, paginatedPackages and
                // paginationRange, i.e. ~10 times per keystroke. Without the
                // cache each of those re-filtered and re-sorted all 11k
                // packages.
                const key = this.platform + " " + this.sortBy + " " + this.query;
                if (key !== cacheKey) {
                    cacheList = computeFiltered.call(this);
                    cacheKey = key;
                }
                return cacheList;
            },

            get totalFiltered() {
                return this.filteredPackages.length;
            },

            get totalPages() {
                return Math.max(1, Math.ceil(this.totalFiltered / this.perPage));
            },

            get paginatedPackages() {
                const list = this.filteredPackages;
                const start = (this.page - 1) * this.perPage;
                if (start >= list.length) return EMPTY;
                return list.slice(start, start + this.perPage);
            },

            get paginationRange() {
                const total = this.totalPages;
                const current = this.page;
                const delta = 2;
                const range = [];

                for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
                    range.push(i);
                }

                if (current - delta > 2) {
                    range.unshift("...");
                }
                if (current + delta < total - 1) {
                    range.push("...");
                }

                range.unshift(1);
                if (total > 1) {
                    range.push(total);
                }

                return range;
            },

            getInstallCommand(pkgName) {
                if (this.packageManager === "pixi") {
                    return `pixi add ${pkgName}`;
                }
                return `conda install -c bioconda ${pkgName}`;
            },

            copyInstall(pkg) {
                const cmd = this.getInstallCommand(pkg.name);
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(cmd).then(() => {
                        this.copiedPackage = pkg.name;
                        setTimeout(() => {
                            if (this.copiedPackage === pkg.name) {
                                this.copiedPackage = null;
                            }
                        }, 1600);
                    }).catch(err => {
                        console.error("Clipboard copy failed:", err);
                        this.fallbackCopy(cmd, pkg.name);
                    });
                } else {
                    this.fallbackCopy(cmd, pkg.name);
                }
            },

            fallbackCopy(text, pkgName) {
                try {
                    const input = document.createElement("input");
                    input.value = text;
                    document.body.appendChild(input);
                    input.select();
                    document.execCommand("copy");
                    document.body.removeChild(input);
                    this.copiedPackage = pkgName;
                    setTimeout(() => {
                        if (this.copiedPackage === pkgName) {
                            this.copiedPackage = null;
                        }
                    }, 1600);
                } catch (e) {
                    console.error("Fallback copy failed:", e);
                }
            }
        };
    }

    // Expose component globally on window for Alpine auto-lookup
    window.biocondaPackageRegistry = packageRegistryComponent;

    if (window.Alpine) {
        window.Alpine.data("biocondaPackageRegistry", packageRegistryComponent);
    } else {
        document.addEventListener("alpine:init", () => {
            window.Alpine.data("biocondaPackageRegistry", packageRegistryComponent);
        });
    }
})();
