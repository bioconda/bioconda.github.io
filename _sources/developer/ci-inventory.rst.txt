CI Inventory
============

This page documents the various moving parts that, together, make Bioconda
work. We rely on a mixture of free services to spread the workload and to
maintain flexibility over the long term in case a service becomes unusable.

Autobump bot
------------

Checks upstream repository for version updates, if so, creates a new
bioconda-recipes recipe with the updated version and an updated hash, and opens
a new pull request with various templated info and with the "autobump" label
applied.

:runs on: CircleCI
:controlled from: bioconda-utils
:trigger: hourly
:code references: `config.yml <https://github.com/bioconda/bioconda-utils/blob/master/.circleci/config.yml#L65>`_
:OS: Linux

Documentation
-------------

Build sphinx documentation (including updated READMEs for every recipe) and
pushes the changes to
[bioconda.github.io](https://github.com/bioconda/bioconda.github.io).

:runs on: GitHub Actions
:controlled from: bioconda-docs
:trigger: daily, or on push
:code references: `docs.yml <https://github.com/bioconda/bioconda-docs/blob/main/.github/workflows/docs.yml>`_
:OS: Linux

bioconda-utils tests
--------------------

Unit tests and functional tests for bioconda-utils

:runs on: GitHub Actions
:controlled from: bioconda-utils
:trigger: on push
:code references: `GithubActionTests.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/GithubActionTests.yml>`_
:OS: Linux, macOS

Test building bioconda-utils docker image
-----------------------------------------

Ensures that bioconda-utils can run inside a newly-built container.

:runs on: GitHub Actions
:controlled from: bioconda-utils
:trigger: on push
:code references: `build-image.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/build-image.yml>`_, `Dockerfile <https://github.com/bioconda/bioconda-utils/blob/master/Dockerfile>`_

Ensure Biocontainers are public
-------------------------------

Checks quay.io to see if any containers are mistakenly private; if so makes them public

:runs on: GitHub Actions
:controlled from: bioconda-utils
:triggered: manually
:code references: `changevisibility.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/changevisibility.yml>`_

conventional PRs
----------------

Enforces "conventional commit" tags in the title of PRs, like "docs:", "fix:", "ci:", and so on.

:runs on: GitHub Actions
:controlled from: bioconda-utils
:trigger: PR open/reopen/edit/sync
:code references: `conventional-prs.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/conventional-prs.yml>`_
:OS: Linux

release-please
--------------

Collects PRs that have been merged to master since the last release into
a separate, special PR. Merging that special PR triggers a new release.

:runs on: GitHub Actions
:controlled from: bioconda-utils
:trigger: push to master on bioconda-utils
:code references: `release-please.yml <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/release-please.yml>`_
:OS: Linux

Recipe tests
------------

Runs linting and tests for pull requests to bioconda-recipes.

:runs on: Azure Pipelines
:controlled from: bioconda-recipes
:trigger: on push
:code references: `azure-pipeline.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline.yml>`_
:OS: Linux, macOS

master branch tests
-------------------

Runs the same tests as for PRs, but on the master branch. Note that when the
bot merges, it uses [ci skip] in the commit comment and works with the
already-built artifacts, so this doesn't typically run.

:runs on: Azure Pipelines
:controlled from: bioconda-recipes
:trigger: push to master
:code references: `azure-pipeline-master.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline-master.yml>`_
:OS: Linux, macOS


nightly maintenance
-------------------
Various maintenance tasks:

- build and upload the bioconda-repodata-patches package
- try to build and upload any remaining packages (runs bioconda-utils build on *all* recipes)

:runs on: Azure Pipelines 
:controlled from: bioconda-recipes
:trigger: daily
:code references: `azure-pipeline-nightly.yml <https://github.com/bioconda/bioconda-recipes/blob/master/azure-pipeline-nightly.yml>`_
:OS: Linux, macOS


automerge, automerge trigger
----------------------------

This is intended to automatically merge PRs when all checks pass (including the
review step). It will only be triggered if the AutoMergeTrigger workflow runs
successfully. If a PR's review is submitted or dismissed, or a PR is labeled
with "automerge", then this workflow fires, and needs to complete before the
AutoMerge workflow will run.

:runs on: GitHub Actions 
:controlled from: bioconda-recipes
:trigger: completed check suite
:code references: `AutoMerge.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/AutoMerge.yml>`_, `AutoMergeTrigger.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/AutoMergeTrigger.yml>`_


Bulk
----
If pushing to the special ``bulk`` branch, this workflow will run. It uses
special bioconda-utils functionality to split the full DAG into sub-DAGs and
submits them to independent parallel jobs. When recipes sucessfully build, they
are *immediately* uploaded. Use with caution. Typically used when migrating
(e.g., bioconductor updates, pinning updates)

:runs on: GitHub Actions  
:controlled from: bioconda-recipes
:trigger: push to ``bulk`` branch of bioconda-utils
:code references: `Bulk.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/Bulk.yml>`_
:OS: Linux, macOS

comment responder
-----------------

Runs the bioconda-bot container (quay.io/bioconda/bot) with different image tags (merge, comment, update, repost) in response to comments.

:runs on: GitHub Actions 
:controlled from: bioconda-recipes
:trigger: @bioconda-bot mentions
:code references: `CommentResponder.yml <https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/CommentResponder.yml>`_
:OS: Linux
