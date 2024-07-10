FAQs
====

.. contents::
    :depth: 1
    :local:
    :backlinks: none


.. _speedup:

How do I speed up package installation?
---------------------------------------

Speedup option 1: use ``mamba``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


`mamba <https://github.com/mamba-org/mamba>`_ is a drop-in replacement for
conda that uses a faster dependency solving library and parts reimplemented in
C++ for speed. Install it just into the base environment so that it's always
available, like this:

.. code-block:: bash

    conda install mamba -n base -c conda-forge

Then use ``mamba`` instead of ``conda``.

For example, instead of ``conda install``, use ``mamba install``. Instead of
``conda env create`` use ``mamba env create``, and so on. ``mamba`` also uses
the same configuration as ``conda``, so you don't need to reconfigure the
channels.

.. note::

    Installing ``mamba`` into the base environment (``-n base`` in the command
    above) means that it does **not** need to be installed into each subsequent
    environment you create.

Speedup option 2: use environments strategically
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here are several ways you can use environments to minimize the time spent on
solving dependencies, which typically is what takes the longest amount of time:

1. **Keep the base environment small.**

   If you install everything into the same environment (e.g. the ``base``
   environment, which is used any time you don't otherwise specify an
   environment), then whenever you add or update packages to it, the solver has
   to do a lot of work to make sure all of the many packages are mutually
   compatible with each other.

2. **Use smaller environments.**

   Fewer packages means less work for the solver. Try to use environments only
   containing what you need for a particular project or task.

3. **Pin dependencies.**

   Sometimes pinning dependencies to a specific version can speed up the
   solving, since it reduces the search space for the solver. In some cases
   this may backfire though. For example, you can't pin an older version of
   R and also use newer R packages that don't support that version of R.

4. **Create an environment from a file with all dependencies.**

   Creating an environment with all dependencies at once can be faster than
   incrementally adding packages to an existing environment. For example
   ``conda create -n myenv --file requirements.txt``, or ``conda env create
   --file env.yaml``.

5. **Use strict channel priority.**

   Ensure that you've run ``conda config --set channel_priority strict`` to
   respect the configured channel order, as recommended in the setup
   instructions. This can also speed up the solving.

What versions are supported?
----------------------------

**Operating Systems:**
Bioconda supports Linux (x86_64 and aarch64/arm64) and
macOS (x86_64 and arm64). Windows is not supported.

**Python:**
Bioconda currently supports Python 3.8, 3.9, and 3.10 (see "pinned packages"
below for where this is configured). There are still packages in the Bioconda
channel for earlier versions of Python (2.7, 3.6, and 3.7), but new packages
are not built for these versions.

Packages which declare `noarch: python` and only depend on packages that also
declare `noarch: python` can be installed in an environment with any version of
Python they say they can support. However many Python packages in Bioconda
depend on other Bioconda packages with architecture specific builds, such as
`pysam`, and so do not meet this criteria.

.. datechanged:: 2022-09-01
   Python 3.10 support started in Aug 2022


.. datechanged:: 2023-05-01
   Python 2.7, 3.6, 3.7 support were dropped for new recipes in May 2023.

**Globally-pinned versions:** See :ref:`global-pinning` for details.

**Unsupported versions:**
If there is a version of a dependency you wish to build against that Bioconda
does not currently support, please reach out to the `Bioconda Gitter
<https://gitter.im/bioconda/Lobby>`_ for more information about if supporting
that version is feasible, if work on that is already being done, and how you
can help.

To find out against which version you can pin a package, e.g. x.y.* or x.*
please use `ABI-Laboratory <https://abi-laboratory.pro/tracker/>`_.

How do I keep track of environments?
------------------------------------

You can view your created environments with ``conda env list``.

Note that if keeping track of different environment names
becomes a burden, you can create an environment in the same directory as
a project with the ``-p`` argument, e.g.,

.. code-block:: bash

    conda create -p ./env --file requirements.txt

and then activate the environment with

.. code-block:: bash

    conda activate ./env

This also works quite well in a shared directory so everyone can use (and
maintain) the same environment.

.. _conda-anaconda-minconda:

What's the difference between Anaconda, conda, Miniconda, mamba, Mambaforge, micromamba?
----------------------------------------------------------------------------------------

This `blog post from Anaconda <https://www.anaconda.com/blog/is-conda-free>`_
gives a lot of context on the Anaconda/conda ecosystem.


- **conda** is the name of the package manager, which is what runs when you call,
  e.g., ``conda install``.
- **mamba** is a drop-in replacement for conda.
- **Anaconda** is a large installation including Python, conda, and a large number
  of packages.
- **Miniconda** just has conda and its dependencies (in contrast to the larger
  Anaconda distribution).
- **Miniforge** is like miniconda, but with the conda-forge channel
  preconfigured and all packages coming from the conda-forge and *not* the
  ``defaults`` channel. It also now has mamba and libmamba included.
- **Mambaforge** is like miniforge, but has mamba installed into the base
  environment. While not strictly deprecated, its use is discouraged as of
  Sept 2023 (see `miniforge README <https://github.com/conda-forge/miniforge>`_).
- **Micromamba** is not a conda distribution. Rather, it is a minimal binary
  that has roughly the same commands as mamba, so that a single executable
  (rather than an entire Python installation required for conda itself) can be
  used to create environments. Micromamba is currently still experimental.

The `Anaconda Python distribution <https://www.continuum.io/downloads>`_
started out as a bundle of scientific Python packages that were otherwise
difficult to install. It was created by `ContinuumIO
<https://www.continuum.io/>`_ and remains the easiest way to install the full
scientific Python stack.

Many packaging problems had to be solved in order to provide all of that
software in Anaconda in a cross-platform bundle, and one of the tools that came
out of that work was the conda package manager. So conda is part of th Anaconda
Python distribution. But conda ended up being very useful on its own and for
things other than Python, so ContinuumIO spun it out into its own separate
`open-source package <https://github.com/conda/conda>`_.

Conda became very useful for setting up lightweight environments for testing
code or running individual steps of a workflow. To avoid needing to install the
*entire* Anaconda distribution each time, the Miniconda installer was created.
This installs only what you need to run conda itself, which can then be used to
create other environments. So the "mini" in Miniconda means that it's
a fraction of the size of the full Anaconda installation.

Then the conda-forge channel gained popularity. Miniforge was developed to
quickly and easily get a conda-forge-ready conda installation. Then as mamba
gained popularity, the Mambaforge variant was created.

Even with those easier methods, sometimes the entire base Python installation that comes with conda/mamba was too much overhead. Micromamba has a single binary that is very fast to install, and is perfect for CI environments.

So: conda is a package manager, Anaconda is a scientific Python distribution
that also includes conda, and the rest are other flavors of getting
a conda/mamba installation.

What's the difference between a recipe and a package?
-----------------------------------------------------

A *recipe* is a directory containing small set of files that defines name,
version, dependencies, and URL for source code. A recipe typically contains
a ``meta.yaml`` file that defines these settings and a ``build.sh`` script that
builds the software.

A recipe is converted into a *package* by running `conda-build` on the recipe.
A package is a bgzipped tar file (``.tar.bz2``) that contains the built
software in expected subdirectories, along with a list of what other packages
are dependencies. For example, a conda package built for a Python package would
end up with `.py` files in the `lib/python3.8/site-packages/<pkgname>`
directory inside the tarball, and would specify (at least) Python as
a dependency.

Packages are uploaded to anaconda.org so that users can install them
with ``conda install``.

.. seealso::

    The `conda-build:resources/package-spec` has details on exactly
    what a package contains and how it is installed into an
    environment.


Why are Bioconductor data packages failing to install?
------------------------------------------------------

When creating an environment containing Bioconductor data packages, you may get
errors like this::

    ValueError: unsupported format character 'T' (0x54) at index 648

The actual error will be somewhere above that, with something like this (here,
it's for the ``bioconductor-org.hs.eg.db=3.14.0=r41hdfd78af_0`` package)::

    message:
    post-link script failed for package bioconda::bioconductor-org.hs.eg.db-3.14.0-r41hdfd78af_0
    location of failed script: /Users/dalerr/env/bin/.bioconductor-org.hs.eg.db-post-link.sh
    ==> script messages <==
    <None>
    ==> script output <==
    stdout: ERROR: post-link.sh was unable to download any of the following URLs with the md5sum ef7fc0096ec579f564a33f0f4869324a:
    https://bioconductor.org/packages/3.14/data/annotation/src/contrib/org.Hs.eg.db_3.14.0.tar.gz
    https://bioarchive.galaxyproject.org/org.Hs.eg.db_3.14.0.tar.gz
    https://depot.galaxyproject.org/software/bioconductor-org.hs.eg.db/bioconductor-org.hs.eg.db_3.14.0_src_all.tar.gz

**To fix it**, you need to adjust the requirements. If you had this as a requirement::

    bioconductor-org.hs.eg.db=3.14.0=r41hdfd78af_0

then increase the build number on the end, here from ``_0`` to ``_1``::

    bioconductor-org.hs.eg.db=3.14.0=r41hdfd78af_1

or, relax the exact build constraint while keeping the package version the same::

    bioconductor-org.hs.eg.db=3.14.0

and then re-build your environment.

**The reason this is happening** is a combination of factors. Early on in
Bioconda's history we made the decision that pure data packages -- like
Bioconductor data packages, which can be multiple GB in size -- would not be
directly converted into conda packages. That way, we could avoid additional
storage load on Anaconda's servers since the data were already available from
Bioconductor, and we could provide a mechanism to use the data packages within
an R environment living in a conda environment. This mechanism is
a `post-link.sh
<https://docs.conda.io/projects/conda-build/en/latest/resources/link-scripts.html>`_
script for the recipe.

When a user installs the package via conda, the GB of data aren't in the
package. Rather, the URL pointing to the tarball is in the post-link script,
and the script uses ``curl`` to download the package from Bioconductor and
install into the conda environment's R library. We also set up separate
infrastructure to archive data packages to other servers, and these archive
URLs were also stored in the post-link scripts as backups.

*The problem is that back then, we assumed that URLs would be stable and we did
not use the* ``-L`` *argument for curl in post-link scripts*.

Recently Bioconductor packages have moved to a different server (XSEDE/ACCESS).
The old URL, the one hard-coded in the post-link scripts, is correctly now
a redirect to the new location. But without ``-L``, the existing recipes and
their post-link scripts cannot follow the redirect! Compounding this, the
archive URLs stopped being generated, so the backup strategy also failed.

The fix was to re-build all Bioconductor data packages and include the ``-L``
argument, allowing them to follow the redirect and correctly install the
package. Conda packages have the idea of a "build number", which allows us to
still provide the same version of the package (3.14.0 in the example above) but
packaged differently (in this case, with a post-link script that works in
Bioconductor's current server environment).

**Reproducibility is hard.** We are trying our best, and conda is an amazing
resource. But the fact that a single entity does not (and should not!) control
all code, data, packages, distribution mechanisms, and installation mechanisms,
means that we will always be at risk of similar situations in the future.
Hopefully we are guarding better against this particular issue, but see
`Grüning et al 2018 <http://dx.doi.org/10.1016/j.cels.2018.03.014>`_
(especially Fig 1) for advice on more reproducible strategies you can use for
your own work.

.. _version-vs-build:

What's the difference between a build number and a package version?
-------------------------------------------------------------------
A *package version* is the version of the tool. A tool can possibly be packaged
multiple times, even though the underlying tool doesn't change. In such a case,
the package version remains unchanged, but the *build number* chances.

The Bioconductor data packages described above are one example of what would
cause a change in build number (i.e., adding a single argument to
a post-installation script). Other times, a package might have omitted an
executable that should have been included, so a new build for the same version
is created that fixes that packaging issue, without changing anything in the
package itself. In rare cases, packages are completely broken, and are moved to
a "broken" label in the conda channel, effectively removing them from being
installed by default.

More often, build numbers change due to underlying dependencies across the
entire Bioconda and conda-forge ecosystem. These build numbers include a hash.
That hash is generated by concatenating all of the pinned versions of packages
that are dependencies of that package.

For example, ``samtools==1.15.1=h1170115_0`` refers to version 1.15.1 of
``samtools``. The build number is ``h1170115_0``.  The hash part is the
``h1170115``, and the ``_0`` refers to the first (zero-indexing) build of this
samtools version and this hash.

The hash, in turn is calculated by looking at the dependencies of samtools. The
dependencies happen to include things like a C compiler (gcc), the zlib and htslib
libraries and make. Some of these dependencies are "pinned". That is, they are
fixed to a particular version or versions, and those versions are used
everywhere in conda-forge and Bioconda to maintain ABI compatibility
(basically, to let packages co-exist in the same environment). You can find the
conda-forge pinnings `here
<https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/main/recipe/conda_build_config.yaml>`_,
and the bioconda-specific ones `here
<https://github.com/bioconda/bioconda-utils/blob/master/bioconda_utils/bioconda_utils-conda_build_config.yaml>`_.

In the case of samtools, that hash ``h1170115`` incorporates the packages and
versions of all of its dependencies that are pinned. That includes gcc, zlib,
and htslib. But it doesn't include make in that hash, because make is not
pinned in those files.

The build number is likely to change, and you probably should avoid including
the build number in your environment specifications -- see :ref:`no-builds` for
more information on this.

.. _no-builds:

Why shouldn't I include build numbers in my environment YAMLs?
--------------------------------------------------------------

As described at :ref:`version-vs-build`, build numbers may change over time,
independently of the actual package version. This means that when you are
recording the packages installed in an environment, it is not useful to record
the build number, as this is effectively over-specifying and may cause
difficulty when trying to re-create the environment.

To record the installed packages in an environment, we recommend the
``--no-builds`` argument to ``conda env export``. For example, with an
environment activated::

    conda env export --no-builds

The ``--no-builds`` argument completely removes the build number from the
output, avoiding future errors when trying to rebuild the environment, and
allowing the conda solver to identify the packages that can co-exist in the
same environment.

How are dependencies pinned to particular versions?
---------------------------------------------------

In some cases a recipe may need to pin the version of a dependency.
A global set of default versions to pin against is shared with conda-forge and
can be found `here <https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml>`_.
For new dependencies that are contained in conda-forge and not yet in this list,
please update the list via a pull request.
Local pinnings can be achieved by adding a file ``conda_build_config.yaml`` next
to your ``meta.yaml``.

To find out against which version you can pin a package, e.g. x.y.* or x.* please use `ABI-Laboratory <https://abi-laboratory.pro/tracker/>`_.

What's the lifecycle of a bioconda package?
-------------------------------------------

- Submit a pull request with a new recipe or an updated recipe
- CI (see :ref:`ci-inventory`) automatically builds and tests the changed
  recipe[s] using conda-build. Test results are shown on the PR.
- If tests fail, push changes to PR until they pass.
- Once tests pass, merge into master branch
- CI tests again, but this time after testing the built packages are
  uploaded to the bioconda channel on anaconda.org.
- Users can now install the package just like any other conda package with
  ``conda install``.

Once uploaded to anaconda.org, it is our intention to never delete any old
packages. Even if a recipe in the bioconda repo is updated to a new version,
the old version will remain on anaconda.org. ContinuumIO has graciously agreed
to sponsor the storage required by the bioconda channel.
Nevertheless, it can sometimes happen that we have to mark packages as broken
in order to avoid that they are accidentally pulled by the conda solver.
In such a case it is only possible to install them by specifically considering
the ``broken`` label, i.e.,

.. code-block:: bash

    conda install -c conda-forge -c bioconda -c defaults -c bioconda/label/broken my-package=<broken-version>

Where can I find more info on ``meta.yaml``?
--------------------------------------------

The ``meta.yaml`` file is conda's metadata definition file for recipes.
If you are developing a new recipe or are trying to update or improve an existing one, it can be helpful to know
which elements and values can appear in ``meta.yaml``.

Conda has this information available `here
<https://docs.conda.io/projects/conda-build/en/latest/resources/define-metadata.html>`_.
Please check that you are looking at the correct version of the documentation
for the current conda version used by bioconda.

What are the ``host`` and ``build`` sections of a recipe?
---------------------------------------------------------

The ``requirements:build`` section of a meta.yaml file is used to specify the
tools for *building* the package, but not necessarily for *running* it. This is
where compilers should go. The build section might also include tools like
``make``, ``automake``, ``cmake``, or ``git``. If there are no compilers or
other build tools, there should be no ``build:`` section.

The ``requirements:host`` section is used to specify *shared libraries*. It was
originally introduced to support cross-compiling (e.g., build on linux-64 but
output a package to be used on linux-aarch64) and the shared libraries here are
what's needed on the target (e.g. linux-aarch64 in this example). In practice,
this is where the base interpreter ``python`` or ``r-base`` should go for
Python and R packages. ``pip`` is usually here as well, and ``setuptools`` if
it is required for the build process. ``cython`` would go here. If a package
`builds against numpy
<https://conda-forge.org/docs/maintainer/knowledge_base.html#building-against-numpy>`_,
then ``numpy`` should go here (otherwise, it should go in the ``run:``
requirements). Shared libraries like ``zlib``, ``hdf5``, ``libcurl``, and
``htslib`` should go here in ``requirements:host``.

The ``requirements:run`` section of a meta.yaml is used to specify the
*runtime* dependencies of the package.

.. seealso::

    See the `requirements section <conda-build:requirements>` of the
    conda docs for more info.


.. _compiler-tools:

Compiler tools
--------------

Use the syntax ``{{ compiler('c') }}``, ``{{ compiler('cxx') }}``, and/or ``{{
compiler('fortran') }}``. These should go in the ``build`` section, and all
other build dependencies should go in the ``host`` section.

Anaconda provides platform-specific compilers that are automatically
determined. The string ``{{ compiler('c') }}`` will resolve to ``gcc`` on
Linux, but ``clang`` on macOS (osx-64).


.. seealso::

    - The `compiler tools <conda-build:compiler-tools>` section of the
      conda docs has much more info.

    - The default compiler options are defined by conda-build in the
      `variants.DEFAULT_COMPILERS
      <https://github.com/conda/conda-build/blob/master/conda_build/variants.py#L42>`_
      variable.

    - More details on "strong" and "weak" exports (using examples of
      libpng and libgcc) can be found in the `export runtime
      requirements <conda-build:run_exports>` conda documentation.


.. _global-pinning:

How does global pinning work?
-----------------------------

We can have conflicts when the version of a common library used when the
package is originally *built* differs from the version when the package is
*installed*. All packages intending to be installed into the same environment
should be built using the same versions of common libraries so that they can
co-exist. **Global pinning** is the idea of making sure all recipes use the
same versions of common libraries.

For example, many bioinformatics tools have ``zlib`` as a dependency.
The version of ``zlib`` used when building the package should be the same as the
version used when installing the package into a new environment. This implies
that we need to specify the ``zlib`` version in one place and have *all recipes
intended to coexist in the same environment* use that version.

This is configured with special build config files. Since we rely heavily on
the conda-forge channel, the bioconda build system installs the conda-forge
`conda_build_config.yaml
<https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml>`_
into our build environment so that it can be used for building all recipes.
This is then combined with the bioconda-specific
`bioconda-Utils-conda_build_config.yaml
<https://github.com/bioconda/bioconda-utils/blob/master/bioconda_utils/bioconda_utils-conda_build_config.yaml>`_.
Note that in some cases the bioconda config may override some of the
conda-forge configs. For example, historically, we did this when we wanted to
support older Python versions.

The idea here is to specify that any time a dependency (``zlib``, in our
running example) is used as a build dependency, it should also be automatically
be installed as a run dependency without having to explicitly add it as such in
the recipe. This specification is done in the ``zlib`` recipe itself (which is
hosted by conda-forge), so in general bioconda collaborators can just add
``zlib`` as a build dependency.

Note that we don't have to specify the version of ``zlib`` in the recipe -- it
is pinned in that ``conda_build_config.yaml`` file we share with conda-forge.

In a similar fashion, the reason that we don't have to specify ``libgcc`` as
a *run* dependency is that ``{{ compiler('c') }}`` automatically exports
``libgcc`` as a run dependency of any package that uses the C compiler to
build.

.. _platform-nomenclature-faq:

Understanding platform nomenclature
-----------------------------------

.. datechanged:: 2024-03-04
   Added section

Different CPU chips use different architecture, so programs are written
fundamentally differently for them. A package with compiled dependencies must
therefore use platform-specific dependencies.

There is a lot of confusing nomenclature surrounding them. Here is an attempt
at clearing them up, or at least providing enough context that you can look up
more details on your own:

**ISA, instruction set, CISC, RISC, RISC-V**: The *instruction set* is the assembly
code commands that are possible for the chip. *CISC* is "complex instruction
set computer" which prioritizes flexibility. *RISC* is "reduced instruction set
computer" which prioritizing power consumption (this is an oversimplification,
but that's the general idea). Instruction sets can be proprietary. `Arm
<https://arm.com/company>`_ is a company that licenses a widely-used
proprietary reduced instruction set. RISC-V is an open (non-proprietary)
reduced instruction set.

**Arm vs ARM:** Arm is the company that licenses the proprietary instruction
set. For example, they license it to Apple to run on their M-series chips. ARM
(in all caps) refers to the family of RISC instruction sets, and by extension
chips that use the instruction sets. It is also an acronym for Advanced RISC
Machines and the eariler Acorn RISC Machine. This `blog post
<https://nickdesaulniers.github.io/blog/2023/03/10/disambiguating-arm/>`_ goes
into lots more detail.

``x86_64``, ``amd64``: These are synonyms for the original Intel/AMD
architecture.

``linux/x86_64``, ``linux/arm64``, ``darwin/amd64``: These are the platform
designators when using Docker (see `multi-platform images
<https://docs.docker.com/build/building/multi-platform/>`_ in the Docker
documentation).

``linux-64``, ``linux-aarch64``, ``osx-64``, ``osx-arm64``: These are the
platform designators used by conda in channels hosted by Anaconda.

``aarch64``, ``arm64``: These are synonyms for ARM 64-bit architecture.

**M1, M2, M3, Apple Silicon**: These are chips made by Apple and used in Macs.
Apple licenses the ARM RISC, so they are considered aarch64 or arm64.
