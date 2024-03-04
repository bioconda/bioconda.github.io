Build system
============

.. datechanged:: 2024-03-04
   Generalized descriptions to reflect multiple CI systems in use

The build system for Bioconda takes recipes and converts them into conda
packages that are uploaded to anaconda.org as well as Docker containers that
are uploaded to quay.io as part of the Biocontainers project. All of this
happens in a transparent way, with all build logs available for inspection. The
code for the build system can be found in `bioconda-utils
<https://github.com/bioconda/bioconda-utils>`_, but parts are also with the
``bioconda-recipes`` repo. This document serves as a high-level overview; the
code remains the authoritative source on exactly what happens during a build.

Why so complicated? We have to work within the constraints of conda-build,
Docker, CircleCI, GitHub Actions, and Azure DevOps . . . while simultaneously
supporting the same build system on a local machine so contributors can test.
We also have isolated bioconda-utils from bioconda-recipes to better facilitate
testing of the infrastructure, and to (one day!) make it general enough that
others can use the framework for their own specific channels. So there are
a lot of moving parts that have to be coordinated, resulting in a complex
system. That said, we do have some room to simplify, and do so where we can.

This page gives a high-level overview of the most relevant parts to building
recipes. See :ref:`ci-inventory` for *all* of the moving parts throughout the
bioconda ecosystem.

Stages of a bioconda build
--------------------------

A GitHub pull request, or any pushed changes to a GitHub pull request, triggers
a new build on CI/CD platforms. One build can contain mulitple recipes, limited
only by the time limit imposed by each CI platform. Typically, each build
starts with a fresh VM, so we need to create the entire bioconda-build system
environment from scratch for each build. When possible, we take advantage of
caching offered by the CI platform.

When testing locally, we use the
``quay.io/bioconda/bioconda-utils-build-env-cos7`` Docker container to avoid changing the
local system. This container is defined by `this Dockerfile
<https://github.com/bioconda/bioconda-utils/blob/master/Dockerfile>`_.



Build steps
~~~~~~~~~~~

Once the environment is configured in the first step, the rest of the steps are
orchestrated by bioconda-utils.


- **Configure the environment.** The `bioconda-common
  <https://github.com/bioconda/bioconda-common>`_ repo has scripts for
  configuring a working conda environment with `bioconda-utils
  <https://github.com/bioconda/bioconda-utils>`_ installed. This is used across
  the various CI systems to minimize maintenance burden.

- **Lint.** This step checks for common errors, formatting, and consistency.

- **Build recipes.** Recipes to be built satisfy the following criteria:
    - changed in this pull request
    - not on the `build-fail-blacklist`
    - does not have a build-failure yaml file in the recipe with a hash
      matching this version
    - package with that version number and build number does not exist in
      bioconda channel

- **Isolated test.** Upon successfully building and testing via
  ``conda-build``, the built package is added to a minimal BusyBox container
  using ``mulled-build`` (maintained in `galaxy-tool-util
  <https://docs.galaxyproject.org/en/latest/admin/special_topics/mulled_containers.html#automatic-build-of-linux-containers>`_). This acts as a more
  stringent test than ``conda-build`` alone, because the BusyBox container
  purposefully is missing many system libraries (like libgcc) that may be
  present in the CentOS 7 container. Note that it is common for a package to
  build in the CentOS 7 container but fail in the BusyBox container. When this
  happens, it is often because a dependency needs to be added to the recipe.

- **Report.** If we are on a pull request, report the successful test back to
  the GitHub PR, at which time it can be merged into the master branch

- **Upload.** If we are on the master branch, then upload the built conda
  package to anaconda.org, and upload the BusyBox container to quay.io

- **Use!** As soon as the package is uploaded to anaconda.org, it is available
  for installing via ``conda``. As soon as the BusyBox container is uploaded to
  quay.io, it is available for use via ``docker pull``.

Labels
------

If the ``BIOCONDA_LABEL`` environment variable is set, then all uploads will
have that label assigned to them, rather than ``main``. Consequently, they can
only be installed by adding ``-c bioconda/BIOCONDA_LABEL`` to the channels,
where ``BIOCONDA_LABEL`` is whatever that environment variable is set to. Note
that uploads of biocontainers to quay.io will still occur!
