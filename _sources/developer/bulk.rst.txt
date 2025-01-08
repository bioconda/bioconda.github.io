The ``bulk`` branch
===================

.. datechanged:: 2025-01-04
   Updated based on recent BioC 3.20 builds

The ``bulk`` branch is used for large-scale maintenance tasks, like supporting
a new version of Python or building all `bioconductor-*` recipes for a new
release of Bioconductor. These tasks can take up substantial compute time, so
they are run on separate CI workflows to avoid disrupting normal daily
activity in the bioconda-recipes repository.

**The bulk branch immediately uploads successfully built packages to
Anaconda.** As such, only the bioconda core team has the ability to push to
this branch.

.. _bulk-jobs:

Managing a bulk run
-------------------

#. **Merge master into bulk.** Start with a clean slate by merging master into
   bulk, preferring what's on master:

   .. code-block:: bash

     git checkout bulk
     git merge master -s recursive -X theirs

   There may be a few remaining conflicts to fix; in all cases you should
   prefer what's on the master branch.

#. **Make initial changes.** Typically one person is responsible for this part.

   * For pinning updates, see :ref:`update-pinnings`
   * For Bioconductor releases, see :ref:`update-bioconductor`
   * If a Bioconductor release *also* uses a new R version, complete a pinning
     migration first. You will need to wait for (or better yet, help out with)
     conda-forge building packages for the new R version. See
     :ref:`update-bioconductor` for more details.
   * For other changes, you will likely need to write your own tooling.

#. **Commit and push** these changes to bulk.

#. **Start a run.** Use ``bioconda-utils bulk-trigger-ci`` to start a run. Or
   include the string ``[ci run]`` in a commit message.

#. **Address build failures.** Inspect all build
   failures (see :ref:`handling-build-failures`). This is the time consuming
   part. For each failure, decide whether the recipe shall be skiplisted or
   whether you would like to fix it. In general, spend time to fix highly
   depended-upon packages and anything else that is obvious and easy. For the
   rest, mark the recipes as skiplisted in the build failure file. It will be
   ignored by subsequent CI runs and put into a table in the bioconda-recipes
   wiki. This strategy is good because the bulk branch update should be
   performed as fast as possible to avoid redundant work between master and
   bulk. Also, skiplisting democratizes the update effort.

   * Push commits as soon as they are done, so other people know the build
     failure has been addressed. It may be helpful to prefix your commit
     message with the recipe name, for easy viewing on the `bulk branch Actions
     dashboard
     <https://github.com/bioconda/bioconda-recipes/actions/workflows/Bulk.yml>`__
     or with ``git log --oneline --pretty=format:"%ad %an %s"  --date=iso
     | grep -v "ci skip" | grep -v "ci run" | less``
   * Your local branch may be out of date with the remote, since the bulk runs
     commit any build failure yamls. So a typical series of commands is ``git
     commit ...``, ``git pull origin bulk --rebase``, ``git push origin bulk``.

#. **Iterate.** If no untreated failure remains, run ``bioconda-utils
   bulk-trigger-ci`` to start another run, address build failures, and start
   another run. *Warning, this process can take weeks.* See :ref:`bulk-notes` for
   some pointers.

#. **Merge master into bulk again.** Once all the packages have either been
   successfully built or skiplisted, locally pull the master branch and merge
   it into bulk. Usually, conflicts can occur here due to build-numbers having
   been increased in the master branch while you did your changes in bulk. For
   such cases, increase the build number to ``max(build_number_master,
   build_number_bulk)`` and commit all of those. Repeat this until master is
   merged without any conflicts.

#. **Update common.sh for master** Ensure that `bioconda-common/common.sh
   <https://github.com/bioconda/bioconda-common/blob/master/common.sh>`_ points
   to the same version of bioconda-utils that the ``bulk`` branch has been
   using.

#. **Merge bulk into master.** Open a PR to merge bulk into master and merge it.

#. **Work on fixing skiplisted recipes.** Shortly afterwards, you will find all
   remaining build failures in the `bioconda-recipes wiki
   <https://github.com/bioconda/bioconda-recipes/wiki/build-failures>`_. You
   can let your colleagues and the community know about the updated build
   failure table and ask for help. In addition, any automatic or manual updates
   to recipes on this list that succeed will automatically remove them from
   this list over time.


.. _update-pinnings:

Updating pinnings
-----------------

Bioconda uses `conda-forge-pinning
<https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/main/recipe/conda_build_config.yaml>`__
for consistency with the conda-forge ecosystem. You can read more about global
pinnings in the corresponding `conda-forge docs
<https://conda-forge.org/docs/maintainer/pinning_deps/>`__.

Bioconda also uses `bioconda-specific pinning
<https://github.com/bioconda/bioconda-utils/blob/master/bioconda_utils/bioconda_utils-conda_build_config.yaml>`__
which has some overrides and bioinformatics-specific pinnings.

Pinnings are typically updated in an *ad hoc* fashion, but generally coincide
with version bumps in underlying packages, or when we are ready to support
a new Python or R version. Here is what you need to do:

#. Follow the **Merge master into bulk** step in :ref:`bulk-jobs`.

#. Update `conda-forge-pinning` in `bioconda-utils requirements
   <https://github.com/bioconda/bioconda-utils/blob/5a14a3ef9277687e270a682911bded08868ee362/bioconda_utils/bioconda_utils-requirements.txt#L6>`__.

#. Update `bioconda pinnings
   <https://github.com/bioconda/bioconda-utils/blob/master/bioconda_utils/bioconda_utils-conda_build_config.yaml>`_.
   This may take a few tries; you may need to make changes to match
   conda-forge's pinnings. Merge these changes into the master branch of
   bioconda-utils (which will create or update a Release Please PR). Merge
   in the Release Please PR to create a new version of bioconda-utils.

#. Update ``common.sh`` (see `here
   <https://github.com/bioconda/bioconda-common/blob/bulk/common.sh>`_) **only on the bulk
   branch in bioconda-common**, to match the newly-updated bioconda-utils
   version. Changing the pinnings will likely trigger many recipes to require
   rebuilding. Since the bioconda-recipes/bulk branch reads from the
   bioconda-common/bulk branch, this allows bulk to run a different version of
   bioconda-utils. Once a bulk migration is complete, you can update the master
   branch of bioconda-common to point to the bioconda-utils version used for bulk.

#. Run ``bioconda-utils update-pinnings`` in the bulk branch. This will go
   through all the pinnings, figure out what recipes they're used with, and
   bump the recipes' build numbers appropriately. Note, this may take a few GB
   of RAM and a bit of time.

#. **IMPORTANT:** if you are also doing a Bioconductor release with a new
   version of R, then **revert changes to all Bioconductor packages** from the
   above command with ``git checkout -- recipes/bioconductor-*``. This way, we
   avoid new builds of BioC packages for a new version of R that they may not
   be compatible with. Once the pinning updates have been completed on bulk by
   following the rest of the steps in :ref:`bulk-jobs`, then start over again
   but follow the :ref:`updating-bioconductor` steps to make the initial
   changes on bulk.

Then continue following the steps in :ref:`bulk-jobs`.

.. _updating-bioconductor:

Updating Bioconductor
---------------------

Bioconductor gets updated twice a year (spring and fall). All Bioconductor
packages are designed to work together within a Bioconductor release, so we
need to update all packages simultaneously, building packages in order of the
dependency tree.

**Bioconductor releases are tied to an R version.** We need to wait until
conda-forge finishes, or at least gets to an advanced stage of building
packages for the new version of R. 

To view the current status of a conda-forge r-base migration, visit the `conda-forge status dashboard <https://conda-forge.org/status/>`_. In the bioconda-recipes repository, use the ``missingCranPackages.py`` script to generate a list of all incomplete packages that are referenced in a bioconda recipe. Example: ``python ./scripts/bioconductor/missingCranPackages.py --format markdown --migration_id r-base44_and_m2w64-ucrt`` The markdown output can be added to an Issue for tracking purposes.

Then, we need to first go through the
:ref:`update-pinnings` workflow (while ensuring Bioconductor packages DO NOT
have their build numbers updated). This ensures the non-BioConductor packages
are built for the new version of R.

Then we can proceed with updating Bioconductor packages:

#. Follow the **Merge master into bulk** step in :ref:`bulk-jobs`.

#. Identify the latest BioConductor version, and update all BioConductor
   recipes in the bulk branch with the following. This will take time because
   there are thousands of Bioconductor recipes, and the tarballs are downloaded
   for all of them:

    .. code-block:: bash

        bioconda-utils bioconductor-skeleton update-all-packages --bioc-version $BIOC_VERSION

#. The `bioconductor-data-packages` will have changed with the URLs to data
   packages. Manually bump the version to match the current date reflect this.

#. Commit and push the changes.

Then continue following the steps in :ref:`bulk-jobs`.

.. note::

   Sometimes BioConductor packages get updated shortly after release, and the
   originally-released version is removed. This may happen before the bulk
   branch builds the version originally specified by the
   ``bioconductor-skeleton`` run, which results in errors trying to download the source.

   In such cases, run ``bioconda-utils bioconductor-skeleton <PackageName>
   --force`` to update it. If it was a data package, then you will need to
   manually bump the version of ``bioconductor-data-packages`` as well.

.. _handling-build-failures:

Handling build failures
~~~~~~~~~~~~~~~~~~~~~~~

Build failures are stored in a file ``build_failure.<arch>.yaml`` next to each
failing recipe. These are committed back to the bulk branch after every failed
recipe with the ``--record-build-failures`` argument. You can list all build
failures stored in the current branch of bioconda-recipes via the command
``bioconda-utils list-build-failures recipes config.yml``. This reads the yaml
files from failing recipes, and prints a table on stdout that will be sorted by
the number of dependencies and package downloads, which should help for
prioritizing the fixing work.

Since the ``list-build-failures`` command can take time to run, it is often
more convenient to search the build logs for the latest bulk run. Useful search
strings are:
  * ``BUILD FAILED`` for generic failures
  * ``failed linting`` for linting errors
  * ``TEST FAILED`` for mulled-build failures

Or, inspect the git log to see what build failures were added in the last day:

.. code-block:: bash
   git log --since="1.days ago" --pretty=format:"%ad %h %s" --date=iso | grep "\[ci skip\] add build failure record"


The build failure files look like this by default:


.. code-block:: yaml

    recipe_sha: 37fa4d78a2ee8b18065a0bd0f594ad1e9587bb4ac7edf1b4629a9f10fa45d0a5  # The shas256 hash of the recipe at which it failed to build.
    skiplist: false # Set to true to skiplist this recipe so that it will be ignored as long as its latest commit is the one given above.
    log: |2-
      <the logging output of the failed build>

If a failed recipe is a leaf (i.e., it is not a dependency for any other
recipe), then it **WILL** be automatically skiplisted (``skiplist: true``) due
to the ``--skiplist-leafs`` argument, and need to be handled later.

Based on this log, you can decide whether and how the recipe can be fixed or
skiplisted for fixing it later. To help others in the future, add information
in the "reason" field if you have any ideas of where to start fixing the
package.

You can manually edit the build failure yamls, or use the command line tool:

.. code-block:: bash

   bioconda-utils annotate-build-failures \
     -c 'dependency issue' \
     -r 'package xyz needs to be added to conda-forge' \
     -s \
     recipes/packagename

Which will make the build failure look like this:

.. code-block:: yaml

    recipe_sha: 37fa4d78a2ee8b18065a0bd0f594ad1e9587bb4ac7edf1b4629a9f10fa45d0a5  # The shas256 hash of the recipe at which it failed to build.
    skiplist: true # Set to true to skiplist this recipe so that it will be ignored as long as its latest commit is the one given above.
    log: |2-
      <the logging output of the failed build>
    category: |-
      dependency issue
    reason: |-
      package xyz needs to be added to conda-forge

Any update to the meta.yaml automatically de-skiplists it, because the skiplist
entry is only valid together with the hash listed in the first line.

It is possible to further annotate and even manually create build failure
records via the `bioconda-utils` CLI. Check out all possibilities in the
corresponding help message:

.. code-block:: bash

    bioconda-utils annotate-build-failures --help

Skiplisted recipes from the master branch are automatically displayed in
a `wiki page
<https://github.com/bioconda/bioconda-recipes/wiki/build-failures>`_, so that
others can pick them up for providing a fix. Failures that only exist on the Bulk branch, but not on the master branch, are displayed on `this wiki page
<https://github.com/bioconda/bioconda-recipes/wiki/build-failures-bulk>`_. Note that this page is only updated when a build failure yaml file is updated and the commit message does not contain "[ci skip]".

.. _bulk-notes:

Notes on working with bulk branch
---------------------------------

Some unordered notes on working with the bulk branch:

- Remember that successfully-built packages are immediately pushed to Anaconda.

- Use ``--subdag-depth`` (see visualization in `#950
  <https://github.com/bioconda/bioconda-utils/pull/950>`__) to restrict what is
  built, especially in early stages. This will hopefully reduce the frequency
  of recipes skiplisted only because their dependencies happened to not get
  built yet due to being on a different worker.

- Bulk migrations can take weeks. Plan accordingly.

- The bulk branch has ``fail-fast: false`` set to allow parallel jobs to
  progress as much as possible. If multiple people trigger a bulk run, jobs
  will run simultaneously and likely will do duplicate work. Whichever worker
  successfully pushes a package first wins and the other will fail when trying
  to push. So there is no danger to the channel, it's just poor use of CI
  resources.

- The logs are awkward to read and hard to find exactly where failures occur.
  One way to do this is to go to the bottom where there is a report of which
  packages failed. This report is shown when a bulk job goes to completion
  (rather than timing out). Then search for that package backwards through the
  log. You can also look for the broad structure of the log: recipes with
  nothing to do will be reported in a short stanza, so you can use those as
  structural markers to indicate where there's no useful log info.

- Here are some search strings to help narrow down issues:
  * ``BUILD FAILED`` for generic failures
  * ``failed linting`` for linting errors
  * ``TEST FAILED`` for mulled-build failures

- Instead of using the search functionality in the CI logs, download the raw
  log (from gear menu at top right) to use your browser search functionality,
  which is often much easier to use (for example, Chrome shows occurrences of
  search term throughout the document in the scrollbar, which makes digging for
  the actual error a lot easier).

- You may see a lot of output for Python packages in particular. To determine
  whether the recipe needs to be built, we need to compute the hash for the
  build string. This in turn requires figuring out all the dependencies to see
  which of them are pinned and then using those to calculate a hash. This needs
  to be done for each version of Python that we support. So it may appear that
  it's doing a lot of work for packages that don't need to be rebuilt, but that
  work needs to be done simply to figure out if a rebuild is needed, and so
  this is expected.

- For ``linux-64``, ``osx-64``, and ``osx-arm64`` the bulk runs take place on
  GitHub Actions, and the configuration is in
  :file:`.github/workflows/Bulk.yml`. For ``linux-aarch64``, the builds take
  place on CircleCI and the configuration is in :file:`.circleci/config.yml`.
  
- Jobs time out at 6 hours on GitHub Actions and 1 hour on Circle CI. These limits are likely to be hit early in the process. If the timeout is reached, wait for all jobs to complete (pass, fail, or timeout), and trigger a new run.

- You may end up with a lot of skiplisted leaf packages -- especially from
  packages whose dependencies were not built yet because they were on
  a different worker. ``--subdag-depth`` (described above) can help with this.
  On one hand, merging these into master will let others in the community
  contribute (remember, only core team can push to branch). But on the other
  hand, removing the build failure yamls later on during a bulk migration can
  take advantage of the bulk branch's resources. Currently, you'll need to
  manually find the build failures to try to remove which can be
  time-consuming, so work out the best balance for yourself.
