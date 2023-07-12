The ``bulk`` branch
===================

Sometimes we need to do maintenance or make changes to lots of recipes at once.
This happens most often when there is a new Bioconductor release: all
`bioconductor-*` recipes need to be updated, and the corresponding packages
need to be built.

This ends up taking substantial compute time on CI infrastructure. If this were
run on the same CI infrastructure that processes pull requests, this might
consume CI time needed for the typical functioning of the daily activity in the
bioconda repository. The ``bulk`` branch is a mechanism for the Bioconda core
team to perform large-scale changes on a different CI system, without tying up
the CI infrastructure used by contributors on individual pull requests.

The bulk branch reads its configuration (which version of bioconda-utils and
miniconda) from the ``bulk`` branch of `bioconda-common`.

**The bulk branch immediately uploads successfully built packages to
Anaconda.** As such, only the bioconda core team has the ability to push to
this branch.

Interacting with the bulk branch
--------------------------------

When changes are made on the bulk branch (committed and pushed), the CI system
decides whether it will run its jobs or not.

* If any of the pushed commit messages contains the substring ``[ci run]`` the CI jobs are executed.
* If not, no CI jobs are executed.

The reason for this behavior is that we want to avoid race conditions caused by multiple CI jobs
spawned from different commits to be exectuted at the same time.

In order to simplify interactions with the bulk CI, bioconda-utils offers therefore
some dedicated subcommands:

* **bulk-commit**: ``bioconda-utils bulk-commit <message>`` commits the changes on your 
  local clone of https://github.com/bioconda/bioconda-recipes to the bulk branch while marking the commit
  as being eligible for a CI run (by automatically prefixing the message with ``[ci run]``).
  The **bulk-commit** subcommand does not push the commit. This enables you to do multiple fine-grained commits
  and push them in one pass via a subsequent ``git push`` that triggers a single CI run.
* **bulk-trigger-ci**: ``bioconda-utils bulk-trigger-ci`` creates an empty commit that is 
  immediately pushed automatically to the bulk branch, thereby triggering a CI run. This can be used
  to restart the CI run in case all of the previous runs are finished without build failures but there 
  are still packages that need to be built (and haven't been before because the job runtime limits were
  reached and the CI has terminated them (usually this happens after somewhat more than 5 hours)).

Updating pinnings
-----------------

Pinnings are updated for example when we are supporting a new version of
Python. These are versions of base packages that are supported, and form the
basis of the build string hashes at the end of conda package names. A recent
example is updating pinnings to support Python 3.10.

1. Update `bioconda pinnings
   <https://github.com/bioconda/bioconda-utils/blob/master/bioconda_utils/bioconda_utils-conda_build_config.yaml>`_.
   This may take a few tries; you may need to make changes to match
   conda-forge's pinnings. Merge these changes into the master branch of
   bioconda-utils (which will create or update a Release Please PR) and merge
   in the Release Please PR to create a new version of bioconda-utils.

2. Allow autobump to pick up the new version and create a PR in
   bioconda-recipes for the new version of bioconda-utils. This usually takes
   an hour. Then merge the corresponding PR in bioconda-recipes. You now have
   a new bioconda-utils package to use which contains those pinnings.

3. Update ``common.sh`` (see `here
   <https://github.com/bioconda/bioconda-common/blob/master/common.sh>`_) **only on the bulk
   branch in bioconda-commont**, to match the newly-updated bioconda-utils
   version. Changing the pinnings will likely trigger many recipes to require
   rebuilding. Since the bioconda-recipes/bulk branch reads from the
   bioconda-common/bulk branch, this allows bulk to run a different version of
   bioconda-utils. Once a bulk migration is complete, you can update the master
   branch of bioconda-common.

4. In bioconda-recipes, merge master into bulk to start with a clean slate.
   Since bulk is infrequently updated, there may be substantial conflicts
   caused by running the default ``git checkout bulk && git merge master``.
   This tends to happen most with build numbers. But since we want to prefer
   using whatever is in the master branch, we can merge master into bulk, while
   preferring master version in any conflicts, with:

   .. code-block:: bash

     git checkout bulk
     git merge master -s recursive -X theirs

   There may be a few remaining conflicts to fix; in all cases you should
   prefer what's on the master branch.

5. Run ``bioconda-utils update-pinnings`` in
   the bulk branch. This will go through all the pinnings, figure out what
   recipes they're used with, and bump the recipes' build numbers
   appropriately.

6. Then, **bulk-commit** and push the changes.

7. Once the CI run has finished, inspect all build failures (see :ref:`handling-build-failues`).
   For each failure, decide whether the recipe shall be skiplisted or whether you would like to fix it.
   In general it is advisable to fix all libraries on which many recipes depend and anything else
   that is obvious and easy. For the rest, mark the recipes as skiplisted in the build failure file.
   It will be ignored by subsequent CI runs and put into a table in the bioconda-recipes wiki.
   This strategy is good because the bulk branch update should be performed as fast as possible to avoid
   redundant work between master and bulk. Also, skiplisting democratizes the update effort.

8. If no untreated failure remains, **bulk-commit** (see above) and push the changes and visit
   step 6-7 again. If the run has finished without any build failure and did not time out before checking all
   recipes, you can go on with step 7.

9. Once all the packages have either been successfully built or skiplisted, merge in the master branch 
   (after doing a git pull on it).
   Usually, conflicts can occur here due to build-numbers having been increased in the master branch while you
   did your changes in bulk. For such cases (which should be not so many) you can just increase the build number to
   ``max(build_number_master, build_number_bulk)`` and **bulk-commit** all of those in a row.
   Repeat this until master is merged without any conflicts. 
   Ensure that `bioconda-common/common.sh <https://github.com/bioconda/bioconda-common/blob/master/common.sh>`_ points to the same version of
   bioconda-utils that the ``bulk`` branch has been using. Then, merge bulk into master and push the changes.

10. Shortly afterwards, you will find all remaining build failures in the 
   `bioconda-recipes wiki <https://github.com/bioconda/bioconda-recipes/wiki/build-failures>`_.
   You can let your colleagues and the community know about the updated build failure table and ask for help.
   In addition, any automatic or manual updates to recipes on this list that succeed will automatically
   remove them from this list over time.

.. _handling-build-failues:

Handling build failures
~~~~~~~~~~~~~~~~~~~~~~~

Build failures are stored in a file ``build_failure.<arch>.yaml`` next to each failing recipe.
You can list all build failures stored in the current branch of bioconda-recipes via the command
``bioconda-utils list-build-failures recipes config.yaml``. The presented table will be sorted by 
the number of dependencies and package downloads, which should help for prioritizing the fixing work.

This file can look e.g. like this:

.. code-block:: yaml

    recipe_sha: 37fa4d78a2ee8b18065a0bd0f594ad1e9587bb4ac7edf1b4629a9f10fa45d0a5  # The shas256 hash of the recipe at which it failed to build.
    skiplist: true # Set to true to skiplist this recipe so that it will be ignored as long as its latest commit is the one given above.
    log: |2-
      <the logging output of the failed build>

Based on the log, you can decide whether and how the recipe can be fixed or whether it shall be skiplisted for
fixing it later in the future.
Notably, any update to the recipe automatically de-skiplists it, because the skiplist
entry is only valid together with the hash listed in the first line.

It is possible to further annotate and even manually create build failure records via the `bioconda-utils` CLI.
Check out all possibilities in the corresponding help message:

.. code-block:: bash

    bioconda-utils annotate-build-failure --help

Skiplisted recipes from the master branch are automatically displayed in a `wiki page <https://github.com/bioconda/bioconda-recipes/wiki/build-failures>`_,
so that others can pick them up for providing a fix.


Updating Bioconductor
---------------------

Bioconductor gets updated twice a year (spring and fall), where all BioC
packages get released with updated versions at the same time. This in turn
requires updating the packages on Bioconda. This is a perfect use-case for the
bulk branch. The process is generally the same as above but without the
pinnings updates and with some Bioconductor-specific helper scripts.

1. Execute step 4 from above.

2. Identify the latest BioConductor version, and update all BioConductor
   recipes with:

    .. code-block:: bash

        bioconda-utils bioconductor-skeleton update-all-packages --bioc-version $BIOC_VERSION

3. Execute step 6 from above.

4. Execute step 7 from above.
   Alternatively, use the
   [rootNodes.py](https://github.com/bioconda/bioconda-recipes/blob/master/scripts/bioconductor/rootNodes.py)
   from the bioconda-recipes repo to help figure out what the primary root
   nodes are for the currently-remaining packages to be built. This looks at
   recently-built packages, removes them from the DAG of recipes to be built,
   and then reports to stdout the remaining root nodes. This information can be
   used to strategically edit the ``build-fail-blacklist`` file to prioritize
   the building of those root nodes. Once builds seem to be stabilizing, remove the temporary edits to the
   ``build-fail-blacklist``.

5. Execute step 8-10 from above.


Notes on working with bulk branch
---------------------------------

Some unordered notes on working with the bulk branch:

- Remember that successfully-built packages are immediately pushed to Anaconda.

- You may want to coordinate the timing of fixes and pushes (say, via gitter).
  This is because the bulk branch has ``fail-fast: false`` set to allow
  parallel jobs to progress as much as possible. Multiple people pushing to
  bulk means that there is a risk of trying to build the same recipes multiple
  times. In such a case, only the first package will be actually uploaded and
  subsequent packages will a failure on the upload step. So there is no danger
  to the channel, it's just poor use of CI resources.

- The logs are awkward to read and hard to find exactly where failures occur.
  One way to do this is to go to the bottom where there is a report of which
  packages failed. This report is shown when a bulk job goes to completion
  (rather than timing out). Then search for that package backwards through the
  log. You can also look for the broad structure of the log: recipes with
  nothing to do will be reported in a short stanza, so you can use those as
  structural markers to indicate where there's no useful log info.

- Instead of using the search functionality in the CI logs, download the raw
  log (from gear menu at top right) to use your browser search functionality,
  which is often much easier to use (for example, Chrome shows occurrences of
  search term throughout the document in the scrollbar, which makes digging for
  the actual error a lot easier).

- You may see a lot of output for Python packages in particular. This is because for
  bioconda-utils to figure out whether it needs to build the package, it needs
  to know what the hash is for the package. This in turn requires figuring out
  all the dependencies to see which of them are pinned and then using those to
  calculate a hash. So it may appear that it's doing a lot of work for packages
  that don't need to be rebuilt, but that work needs to be done simply to
  figure out if a rebuild is needed, and so this is expected.

- The bulk runs take place on GitHub Actions, and the configuration is in
  :file:`.github/workflows/Bulk.yml`.
