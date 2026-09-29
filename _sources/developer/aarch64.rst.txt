``aarch64`` and ``arm64`` builds
================================

.. datechanged:: 2024-03-04
   Added this section as initial linux-aarch64 builds are starting

.. datechanged:: 2024-04-04
   Information about osx-arm64 builds

.. datechanged:: 2026-08-02
   Move ``linux-aarch64`` builds to the same GitHub Actions matrices as
   ``linux-64`` and enable multi-architecture container publication.

Bioconda supports opt-in ``linux-aarch64`` and ``osx-arm64`` builds (see
:ref:`platform-nomenclature-faq`). Linux builds run in multi-architecture
GitHub Actions matrices. The scarce macOS ARM runners used for PR and master
builds remain on CircleCI, while bulk and nightly macOS ARM builds run on
GitHub Actions.

This is being initially approached as an opt-in process as we make sure
all the moving parts are working correctly. A recipe can be flagged for
building on ``linux-aarch64`` and/or ``osx-arm64`` by adding the following to the
:file:`meta.yaml` file:

.. code-block:: yaml

   extra:
     additional-platforms:
       - linux-aarch64
       - osx-arm64

The CircleCI macOS ARM jobs stop before environment setup unless at least one
recipe in the commit range includes ``osx-arm64`` as an additional platform.
Linux ARM jobs can start for every workflow invocation; ``bioconda-utils``
selects only recipes that opt in to ``linux-aarch64``.

For recipes that produce mulled containers, Linux builds publish architecture
images and then reconcile them into a multi-architecture manifest. The workflow
uses conda package subdirectories such as ``linux-aarch64`` as its public
platform values; ``bioconda-utils`` derives OCI values such as ``linux/arm64``
internally.
