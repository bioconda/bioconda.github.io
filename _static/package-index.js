/**
 * Bioconda Package Registry Browser
 * Reactive component powered by Alpine.js
 */

(function () {
    function packageRegistryComponent() {
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
                this.packages = rawList.map(pkg => ({
                    name: pkg.name || "",
                    docname: pkg.docname || ("recipes/" + pkg.name + "/README"),
                    platforms: Array.isArray(pkg.platforms) ? pkg.platforms : (pkg.platforms ? [pkg.platforms] : []),
                    latest_version: pkg.latest_version || "",
                    summary: pkg.summary || "",
                    home: pkg.home || "",
                    license: pkg.license || "",
                    doc_url: pkg.doc_url || "",
                    dev_url: pkg.dev_url || "",
                    _searchStr: (
                        (pkg.name || "") + " " +
                        (pkg.summary || "") + " " +
                        (pkg.license || "") + " " +
                        (Array.isArray(pkg.platforms) ? pkg.platforms.join(" ") : "")
                    ).toLowerCase()
                }));
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
                const total = this.packages.length;
                let noarch = 0;
                let linux64 = 0;
                let linuxAarch64 = 0;
                let osx64 = 0;
                let osxArm64 = 0;

                for (let i = 0; i < total; i++) {
                    const plats = this.packages[i].platforms || [];
                    if (plats.includes("noarch")) noarch++;
                    if (plats.includes("linux-64")) linux64++;
                    if (plats.includes("linux-aarch64")) linuxAarch64++;
                    if (plats.includes("osx-64")) osx64++;
                    if (plats.includes("osx-arm64")) osxArm64++;
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
                let list = this.packages;

                // 1. Platform filter
                if (this.platform !== "all") {
                    const target = this.platform;
                    list = list.filter(pkg => pkg.platforms && pkg.platforms.includes(target));
                }

                // 2. Query search
                const rawQuery = this.query.trim().toLowerCase();
                if (rawQuery) {
                    const tokens = rawQuery.split(/\s+/).filter(Boolean);
                    list = list.filter(pkg => tokens.every(tok => pkg._searchStr.includes(tok)));

                    // Rank exact & prefix name matches first if name sorting
                    if (this.sortBy === "name-asc") {
                        return [...list].sort((a, b) => {
                            const aName = a.name.toLowerCase();
                            const bName = b.name.toLowerCase();
                            const aExact = aName === rawQuery;
                            const bExact = bName === rawQuery;
                            if (aExact && !bExact) return -1;
                            if (!aExact && bExact) return 1;

                            const aStarts = aName.startsWith(rawQuery);
                            const bStarts = bName.startsWith(rawQuery);
                            if (aStarts && !bStarts) return -1;
                            if (!aStarts && bStarts) return 1;

                            return aName.localeCompare(bName);
                        });
                    }
                }

                // 3. Sorting
                if (this.sortBy === "name-desc") {
                    return [...list].sort((a, b) => b.name.localeCompare(a.name));
                }

                return [...list].sort((a, b) => a.name.localeCompare(b.name));
            },

            get totalFiltered() {
                return this.filteredPackages.length;
            },

            get totalPages() {
                return Math.max(1, Math.ceil(this.totalFiltered / this.perPage));
            },

            get paginatedPackages() {
                const start = (this.page - 1) * this.perPage;
                return this.filteredPackages.slice(start, start + this.perPage);
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
