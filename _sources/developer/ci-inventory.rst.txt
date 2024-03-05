.. _ci-inventory:

CI Inventory
============

.. datechanged:: 2023-05-02
   Use `mergify <https://mergify.com/>`_ instead of AutoMerge.yml GitHub Action

.. datechanged:: 2023-06-06
   Start using build-failures workflow

.. datechanged:: 2024-03-04
   Start using ``linux-aarch64`` in bulk and recipe tests

This page documents the various moving parts that, together, make Bioconda
work. We rely on a mixture of free services to spread the workload and to
maintain flexibility over the long term in case a service becomes unusable.

.. note::

   For the platform column, we use the conda designations when conda packages
   are built. Otherwise we use operating system.
   See :ref:`platform-nomenclature-faq` for more info on this.

..
  When updating this documentation in the future, go through all the existing
  yaml files you can find across all the bioconda repos and make sure they are
  represented here.

  bioconda-recipes:
    - azure-pipeline-master.yml
    - azure-pipeline-nightly.yml
    - azure-pipeline.yml
    - .circleci/config.yml
    - .github/workflows/Bulk.yml
    - .github/workflows/CommentResponder.yml
    - .github/workflows/PR.yml <-------- appears to be manually disabled?
    - .github/workflows/build-failures.yml
    - .github/workflows/master.yml
    - .github/workflows/nightly.yml <------- appears to be manually disabled?

  bioconda-utils:
    - .circleci/config.yml
    - .github/workfows/GithubActionTests.yml
    - .github/workfows/build-image.yml
    - .github/workfows/changevisibility.yml
    - .github/workfows/conventional-prs.yml
    - .github/workfows/release-please.yml

  bioconda-plots:
    - .github/workfows/generate-plots.yml



.. list-table::
    :header-rows: 1
    :class: inventory

    * - Name
      - Runs on
      - Controlled from
      - Trigger
      - Code references
      - Platform
      - Description


    * - Recipe tests
      - Azure Pipelines, CircleCI
      - ``bioconda-recipes``
      - on push
      - `azure-pipeline.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline.yml>`_ (``linux-64``, ``osx-64``);
        `config.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.circleci/config.yml>`_ (``linux-aarch64``)
      - ``linux-64``, ``osx-64``, ``linux-aarch64``
      - These are the most-run tests: these are what run on every change on
        pull requests to bioconda-recipes, and they must pass before the recipe
        is merged into the master branch.


    * - Comment responder
      - GitHub Actions
      - ``bioconda-recipes``
      - @BiocondaBot mentions
      - `CommentResponder.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/CommentResponder.yml>`_
      - Linux
      - Runs the bioconda-bot container (quay.io/bioconda/bot) with different
        image tags (merge, comment, update, repost) in response to comments.
        This allows fast response time (rather than, say, restoring a cache
        each time).


    * - Master branch tests
      - Azure Pipelines
      - ``bioconda-recipes``
      - push to master (bioconda-recipes)
      - `azure-pipeline-master.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline-master.yml>`_
      - ``linux-64``, ``osx-64``, ``linux-aarch64``
      - Runs the same tests as for PRs, but on the master branch. Note that
        when the bot is doing the merge, it adds ``[ci skip]`` in the commit
        comment, and works with the already-built artifacts from the PR.


    * - Mergify
      - `mergify <https://mergify.com/>`_
      - ``bioconda-recipes``
      - Successful tests on an autobumped recipe
      - `.mergify.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.mergify.yml>`_
      - Linux
      - If a recipe was autobumped, the tests passed, and it's been more than
        3 days, then automatically merge the updated recipe.


    * - Autobump bot
      - CircleCI
      - ``bioconda-utils``
      - hourly
      - `config.yml <https://github.com/bioconda/bioconda-utils/blob/8255afdd9e5c0fd3cb09cb11269f5ff3397c959e/.circleci/config.yml#L69>`_
      - Linux
      - Checks upstream repository for version updates, if so, creates a new
        bioconda-recipes recipe with the updated version and an updated hash,
        and opens a new pull request with various templated info and with the
        "autobump" label applied.


    * - Build failures
      - GitHub Actions
      - ``bioconda-recipes``
      - daily
      - `build-failures.yaml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/build-failures.yml>`_
      - Linux
      - Runs ``bioconda-utils list-build-failures`` to generate and publish
        a `wiki page listing prioritized failures
        <https://github.com/bioconda/bioconda-recipes/wiki/build-failures>`_.


    * - Docs
      - GitHub Actions
      - ``bioconda-docs``
      - daily, or on push
      - `docs.yml <https://github.com/bioconda/bioconda-docs/blob/main/.github/workflows/docs.yml>`_
      - Linux
      - Build sphinx documentation (including updated READMEs for every recipe)
        and pushes the changes to
        [bioconda.github.io](https://github.com/bioconda/bioconda.github.io).


    * - bioconda-utils tests
      - GitHub Actions
      - ``bioconda-utils``
      - on push
      - `GithubActionTests.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/GithubActionTests.yml>`_
      - ``linux-64``, ``osx-64``
      - Unit tests and functional tests for bioconda-utils.


    * - Docker image test
      - GitHub Actions
      - ``bioconda-utils``
      - on push
      - `build-image.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/build-image.yml>`_,
        `Dockerfile <https://github.com/bioconda/bioconda-utils/blob/master/Dockerfile>`_
      - Linux
      - Ensures that bioconda-utils can run inside a newly-built container.


    * - Check public containers
      - GitHub Actions
      - ``bioconda-utils``
      - manually
      - `changevisibility.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/changevisibility.yml>`_
      - Linux
      - Checks quay.io to see if any containers are mistakenly private; if so
        makes them public


    * - Conventional PRs
      - GitHub Actions
      - ``bioconda-utils``
      - bioconda-utils PR open/reopen/edit/sync
      - `conventional-prs.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/conventional-prs.yml>`_
      - Linux
      - Enforces "conventional commit" tags in the title of PRs, like "docs:",
        "fix:", "ci:", and so on in bioconda-utils. This enables better
        automation of releases.


    * - Release-please
      - GitHub Actions
      - ``bioconda-utils``
      - push to master on bioconda-utils
      - `release-please.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/release-please.yml>`_
      - Linux
      - Collects PRs that have been merged to master since the last release
        into a separate, special PR. Merging that special PR is what triggers
        a new release.


    * - Nightly maintenance
      - Azure Pipelines
      - ``bioconda-recipes``
      - daily
      - `azure-pipeline-nightly.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline-nightly.yml>`_
      - Linux, macOS
      - Various maintenance tasks: build and upload the
        bioconda-repodata-patches package; try to build and upload any
        remaining packages (runs bioconda-utils build on *all* recipes)


    * - Bulk
      - GitHub Actions
      - ``bioconda-recipes``
      - push to ``bulk`` branch of bioconda-utils
      - `Bulk.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/Bulk.yml>`_ (``linux-64``, ``osx-64``);
        `config.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.circleci/config.yml>`_ (``linux-aarch64``)
      - ``linux-64``, ``osx-64``, ``linux-aarch64``
      - If pushing to the special ``bulk`` branch, this workflow will run. It
        uses special bioconda-utils functionality to split the full DAG into
        sub-DAGs and submits them to independent parallel jobs. When recipes
        sucessfully build, they are *immediately* uploaded. Use with caution.
        Typically used when migrating (e.g., bioconductor updates, pinning
        updates)


    * - Compile stats for plots
      - GitHub Actions
      - ``bioconda-stats``
      - several times a day
      - `packages-anaconda-org.yml <https://github.com/bioconda/bioconda-stats/blob/main/.github/workflows/packages-anaconda-org.yml>`_
      - Linux
      - Builds a zip file containing TSVs for each package, which are inspected
        and compiled into json files in ``bioconda-plots``.


    * - Generate plots
      - GitHub Actions
      - ``bioconda-plots``
      - daily
      - `generate-plots.yml <https://github.com/bioconda/bioconda-plots/blob/main/.github/workflows/generate-plots.yml>`_;
        `test-plots.yml <https://github.com/bioconda/bioconda-plots/blob/main/.github/workflows/test-plots.yml>`_ runs minor tests on the plot-generating code.
      - Linux
      - Using stats compiled in ``bioconda-stats``, builds json files for each
        package that are used by plotting code on bioconda.github.io recipe
        pages.
