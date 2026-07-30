.. _bioconda_utils:

``bioconda-utils``
==================

``bioconda-utils`` is Bioconda's command-line build and maintenance tool. It
connects recipe linting, conda package builds, isolated container tests,
artifact uploads, and repository maintenance into the same workflows used by
Bioconda's CI systems.

The source code is maintained in the `bioconda-utils repository
<https://github.com/bioconda/bioconda-utils>`_. The documentation here is
organized by task; use the :doc:`bioconda-utils-cli` page when you need to find
a particular command.

.. contents::
   :local:

Documentation map
-----------------

``bioconda-utils`` appears throughout the documentation because it is used by
recipe contributors, release automation, and infrastructure maintainers. The
pages below are the substantive documentation for each use; incidental links
to source files and configuration are not repeated here.

Getting started and contributing recipes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* :doc:`setup` and :doc:`workflow` introduce the recipes repository and the
  contribution lifecycle.
* :doc:`building-locally` explains how to lint, build, and test recipes on a
  workstation, including Docker and isolated Biocontainer tests.
* :doc:`guidelines` documents recipe policy and language-specific packaging
  guidance, including commands such as ``bioconductor-skeleton``.
* :doc:`linting` documents Bioconda's recipe checks and how to address them.
* :doc:`troubleshooting` covers build logs, failed conda tests, and failed
  ``mulled-build`` container tests.
* :doc:`updating` explains ``autobump`` and the implementation used to update
  recipes automatically.
* :doc:`/tutorials/2024-adding-bioinformatic-software-to-bioconda`,
  :doc:`/tutorials/2024-updating-bioinformatic-software-to-bioconda`, and
  :doc:`/tutorials/2024-debugging-bioinformatic-software-to-bioconda` provide
  longer, worked examples.

Understanding why the build system exists
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* :doc:`build-system` explains why ``bioconda-utils`` is separate from
  ``bioconda-recipes`` and how it coordinates package builds, isolated tests,
  reporting, and uploads.
* :doc:`/developer/dockerfile-inventory` follows a package through the build
  environment, the minimal ``mulled-build`` environment, and the resulting
  Biocontainer.
* :doc:`/developer/ci-inventory` identifies the CI jobs that invoke
  ``bioconda-utils`` and the repositories that own them.
* :doc:`/developer/repo-inventory` places ``bioconda-utils`` among the other
  Bioconda repositories.
* :doc:`/developer/aarch64` describes the rollout of ARM package builds and
  the related infrastructure status.

Maintaining Bioconda and ``bioconda-utils``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* :doc:`/developer/updating-bioconda-utils` documents why merging source is
  not enough to deploy a change, and follows a release through Release Please,
  the Bioconda package, and ``bioconda-common``.
* :doc:`/developer/bulk` documents bulk rebuilds, pinning migrations,
  Bioconductor updates, and build failure records.
* :doc:`/developer/repodata_patching` documents the maintenance and release of
  Bioconda's repodata patches.
* :doc:`bioconda-utils-cli` indexes all public commands and links each command
  back to its owning workflow.
* :doc:`/faqs` provides background on package build strings, global pinnings,
  and other concepts consumed by ``bioconda-utils``.

.. _bioconda-utils-installation:

Installation
------------

For normal recipe work, install the released conda package in a dedicated
environment:

.. code-block:: bash

   conda create -n bioconda -c conda-forge -c bioconda \
     --strict-channel-priority bioconda-utils
   conda activate bioconda

Run recipe-oriented commands from the root of a ``bioconda-recipes`` checkout.
Commands that accept the recipe directory and configuration file default to
``recipes/`` and ``config.yml`` there. They can also be supplied explicitly:

.. code-block:: bash

   bioconda-utils lint recipes/ config.yml --packages samtools

This conda environment is for *using* the released tool to work on recipes.
When developing ``bioconda-utils`` itself, use its Pixi environment and Just
tasks as described in the `repository README
<https://github.com/bioconda/bioconda-utils#readme>`_.

Command-line conventions
------------------------

The command has the general form:

.. code-block:: console

   bioconda-utils <command> [arguments]

Use the top-level help to list commands and command help to see the complete,
version-specific option list:

.. code-block:: bash

   bioconda-utils --help
   bioconda-utils build --help

Most commands support ``--loglevel`` and ``--logfile``. Recipe selection is
usually expressed with one of the following:

``--packages``
   Select package-name globs directly. Repeat the option to select more than
   one glob, for example ``--packages samtools --packages bcftools``.

``--git-range``
   Select changes on a ref since its merge base with another ref, using
   ``BASE...REF`` syntax such as ``master...HEAD``. Supplying only ``BASE`` is
   shorthand for ``BASE...HEAD``. Two-dot ranges are not supported.

See :doc:`bioconda-utils-cli` for the command index and examples.

.. _credentials:

Credentials
-----------

Only commands that access remote services need credentials. Keep credentials
in environment variables or existing credential stores; never put them in a
recipe, command history, or committed configuration.

Quay.io
~~~~~~~

Container uploads accept either:

``QUAY_OAUTH_TOKEN``
   A Quay OAuth token. This is preferred for automation because it allows
   ``bioconda-utils`` to create repositories and make them public through the
   Quay API.

``QUAY_LOGIN``
   Credentials in ``user:password`` format.

Anaconda.org
~~~~~~~~~~~~

Set ``ANACONDA_TOKEN`` for package uploads and destructive channel operations,
including ``bioconda-utils duplicates --remove``.

GitHub
~~~~~~

Commands that publish statuses, comments, or pull requests use
``GITHUB_TOKEN``. Consult the command's ``--help`` output because the required
repository and pull-request arguments differ by operation.
