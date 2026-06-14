Testing Recipes Locally
=======================

Queue times on CI platforms may sometimes make it more convenient and
faster to work on complex packages locally. There are several ways to
do so, each with their own caveats.

.. contents::
   :local:


.. _bioconda_utils:

For more gentle step-by-step guides to local building and debugging see:

* :doc:`/tutorials/2024-updating-bioinformatic-software-to-bioconda`
* :doc:`/tutorials/2024-debugging-bioinformatic-software-to-bioconda`

Using bioconda-utils
~~~~~~~~~~~~~~~~~~~~

Whether on a CI node or locally, Bioconda packages are built and tested using ``bioconda-utils``.
You can install ``bioconda-utils`` locally by creating a new conda environment:

.. code-block::

    # You can use "conda create" here instead, if you don't have mamba installed
    mamba create -n bioconda -c conda-forge -c bioconda bioconda-utils

    conda activate bioconda

    # optional linting
    bioconda-utils lint --git-range master HEAD

    # build and test
    bioconda-utils build --docker --mulled-test --git-range master HEAD

The above commands do the following:

- Creates a new environment with bioconda-utils.
- Activates the new environment. You can later just start at ``conda activate bioconda``
- Run ``bioconda-utils`` in the new environment:
   - The ``lint`` command will run the lint checks on your recipes
   - The ``build`` command will run the build pipeline

.. note::

   - You can select recipes to lint/build using ``--git-range master HEAD``,
     which will select those recipes that have been changed
     between your local branch and master. Or you can specify recipes
     directly using ``--packages mypackage1 mypackage2``.
   - The ``--docker`` flag instructs ``bioconda-utils`` to execute the
     build within a docker container. On MacOS, this will do a Linux
     build in addition to the local MacOS build.
   - The ``--mulled-test`` flag instructs ``bioconda-utils`` to repeat
     the recipes test in a clean, freshly created docker container to
     ensure that the package does not depend on anything that happens
     to be included in the build container.
   - Make sure you have `bioconda` and `conda-forge` channels explicitly
     added to your environment or your `.condarc`. It is not sufficient
     to have those channels specified in `.mambarc`.

If you do not have access to Docker, you can still run the basic test by
omitting the ``--docker`` and ``--mulled-test`` options.

Other CLI Commands
~~~~~~~~~~~~~~~~~~~

Beyond ``lint`` and ``build``, ``bioconda-utils`` provides several
other commands for development and maintenance:

``bioconda-utils dag``
   Export the recipe dependency graph. Use ``--format gml`` (default),
   ``dot``, or ``txt``. The ``txt`` format groups recipes by build
   order (sub-DAGs), useful for understanding build dependencies.
   ``--hide-singletons`` omits leaf packages with no dependencies::

     bioconda-utils dag recipes/ config.yml --packages mypkg --format txt

``bioconda-utils dependent``
   Show which recipes depend on a package (reverse dependencies) or
   which packages a recipe depends on (forward dependencies)::

     bioconda-utils dependent recipes/ config.yml --reverse-dependencies mypkg

``bioconda-utils duplicates``
   Detect packages in bioconda that also exist in another channel
   (e.g. conda-forge). With ``--strict-version`` and ``--strict-build``
   you can control how strictly duplicates are matched. Pass
   ``--remove`` to delete from the channel (requires ``--strict-build``
   and ``ANACONDA_TOKEN``)::

     bioconda-utils duplicates config.yml

``bioconda-utils clean-cran-skeleton``
   Clean up recipes created by ``conda skeleton cran`` for Bioconda
   submission. Removes Windows-specific entries and comments::

     bioconda-utils clean-cran-skeleton recipes/r-mypackage/meta.yaml --no-windows

``bioconda-utils handle-merged-pr``
   Upload artifacts from a merged PR. If no artifacts are found,
   falls back to rebuilding the recipe::

     bioconda-utils handle-merged-pr recipes/ config.yml --repo bioconda/bioconda-recipes --git-range master HEAD

``bioconda-utils annotate-build-failures``
   Record a build failure reason for one or more recipes.
   ``--reason`` is required when no existing build failure record
   with a log entry is present. ``--category`` is optional.
   Use ``--skiplist`` to add the recipe to the skiplist::

     bioconda-utils annotate-build-failures recipes/mypackage --reason "test timeout" --category "test failure" --skiplist

``bioconda-utils autobump``
   Scan recipes for new upstream versions and create pull requests
   with the updates. Supports many configuration options for
   filtering and automation::

     bioconda-utils autobump recipes/ config.yml --packages mypkg --dry-run

``bioconda-utils bioconductor-skeleton``
   Generate a Bioconductor recipe skeleton. With ``--recursive``,
   also generates recipes for all R dependencies. Use
   ``update-all-packages`` as the package name to process all
   Bioconductor packages::

     bioconda-utils bioconductor-skeleton recipes/ config.yml limma --recursive

``bioconda-utils list-build-failures``
   List recipes with recorded build failure records, optionally
   filtered by ``--git-range`` or output as ``--output-format markdown``::

     bioconda-utils list-build-failures recipes/ config.yml

``bioconda-utils update-pinning``
   Increment build numbers for recipes whose pinnings have changed,
   propagating bumps through the dependency graph. Use
   ``--max-bumps`` to limit the number of updates::

     bioconda-utils update-pinning recipes/ config.yml --packages mypkg

``bioconda-utils bulk-trigger-ci``
   Create an empty commit on the ``bulk`` branch to trigger a bulk
   CI rebuild of all recipes::

     bioconda-utils bulk-trigger-ci
