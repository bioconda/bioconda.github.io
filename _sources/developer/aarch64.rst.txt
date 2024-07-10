``aarch64`` and ``arm64`` builds
==================

.. datechanged:: 2024-03-04
   Added this section as initial linux-aarch64 builds are starting

.. datechanged:: 2024-04-04
   Information about osx-arm64 builds

We are starting to roll out ``linux-aarch64`` and ``osx-arm64`` (see
:ref:`platform-nomenclature-faq`) on CircleCI and GitHub Actions, respectively. 
These additional CI platforms offer the runner types needed for these architectures.

This is being initially approached as an opt-in process as we make sure
all the moving parts are working correctly. A recipe can be flagged for
building on ``linux-aarch64`` and/or ``osx-arm64`` by adding the following to the
:file:`meta.yaml` file:

.. code-block:: yaml

   extra:
     additional-platforms:
       - linux-aarch64
       - osx-arm64

The current CircleCI config will only run if at least one recipe in the
commit range (typically for the PR) includes the above additional
platform.

Support for building and uploading ``linux-aarch64`` containers is planned but
not yet implemented (as of July 2024).
