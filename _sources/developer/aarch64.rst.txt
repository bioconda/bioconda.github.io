``aarch64`` builds
==================

.. datechanged:: 2024-03-04
   Added this section as initial linux-aarch64 builds are starting

While we do not yet have builds for ``osx-arm64`` (see
:ref:`platform-nomenclature-faq`), we are starting to roll out
``linux-aarch64`` builds. These run on CircleCI, which offers the
infrastructure for this.

This is being initially approached as an opt-in process as we make sure
all the moving parts are working correctly. A recipe can be flagged for
building on ``linux-aarch64`` by adding the following to the
:file:`meta.yaml` file:

.. code-block:: yaml

   extra:
     additional-platforms:
       - linux-aarch64

The current CircleCI config will only run if at least one recipe in the
commit range (typically for the PR) includes the above additional
platform.

Support for building and uploading ``linux-aarch64`` containers is planned but
not yet implemented (as of March 2024).
