.. _dockerfile-inventory:

Dockerfile inventory
====================

.. datechanged:: 2024-03-04
   Added section

Containers are used in multiple ways by bioconda-utils. Broadly, we can
divide them into containers used for *building* packages, containers for
*running* packages, and containers used for the bot.

.. details:: Containers vs images

    An image is like a static snapshot, while a container is a running instance
    of an image. A single image can be used to start multiple containers. Changes
    made to a container are not saved back to the original image used to start the
    container, but it is possible to make a *new* image from the latest state
    of a container . . . which can later be used image to start yet more
    containers that start from that latest state.

.. details:: Docker, podman, buildah, OCI

  Open Container Initiative (OCI) specification defines the format of images.
  Buildah is a tool for creating OCI images, and podman is a tool for running
  them. Docker is a tool for both creating OCI images and running containers
  made from them.


Overview of containers used in building
---------------------------------------

For every recipe, Bioconda builds not only conda packages for mulitple
architectures like osx, linux/amd64, linux/arm64, but also OCI images
(linux/amd64, linux/arm64) with the package installed. Here's how it works.

.. figure:: ../images/bioconda-containers.png

   Sketch of how containers and packages interact with :command:`bioconda-utils
   build --docker --mulled-test`. See below for details. [:download:`excalidraw
   <../images/bioconda-containers.excalidraw>`] [:download:`SVG
   <../images/bioconda-containers.svg>`]

**Description of steps:**

These steps are all coordinated with running :command:`bioconda-utils build
pkgname` in the bioconda-recipes repo.


1. Recipe on the host is mounted as a volume in the build container.
   The host's conda-bld directory is also mounted in the container. We call this
   the *build-env* container.
2. The build-env container uses conda-build to build a conda package from the
   mounted recipe.
3. The newly-built conda package is saved in the conda-bld directory mounted from the
   host. The build-env container exits.
4. The new conda package is mounted into a minimal container that has
   conda installed (but *not* conda-build or bioconda-utils or any other
   dependencies). This is the *create-env* container.
5. The package is installed (with :command:`conda install`) into create-env's
   conda environment. This of course includes all dependencies specified in the recipe.
   The recipe's test commands are also extracted.
6. Only the contents of the :file:`env/` directory in the *create-env*
   container are copied over into the :file:`/usr/local` dir of a minimal *base
   container* (which does not even include conda). The extracted tests are run
   in the container as a final check (see notes below on
   :command:`--mulled-test`), and then the container is ready to upload to
   a container registry.

Why do we do it this way? The short answer is to ensure that all dependencies
are accurately captured in the recipe.

More details on this rationale:

We build on multiple CI providers (CircleCI, GitHub Actions, Azure DevOps). Any
one of these providers may install or update libraries on their hosts at any
time. If we didn't use containers for isolation when building packages,
a package could silently depend on those system libraries when building. While
the build might work on CI that already has those libraries, it will be broken
on ar machine without those libraries.

So :command:`bioconda-utils build --docker` runs conda-build inside a Docker
container, isolating it from the host and preventing any host libraries from
being used. As with a normal :command:`conda build` command, the resulting
package is found in the host's :file:`conda-bld` directory. This is illustrated
in steps 1-3 above.

When we additionally use the :command:`--mulled-test` argument,
:program:`bioconda-utils` will run :program:`mulled-build` from the `galaxy-lib
<https://galaxy-lib.readthedocs.io/en/latest/topics/mulled.html>`_ package.
:program:`mulled-build` is a tool to convert conda packages into Docker images.
It uses `involucro <https://github.com/involucro/involucro>`_ to make a final,
minimal image with a dramatically reduced file size. This is illustrated in
steps 4-6 above.

The base image has very few packages or libraries installed -- not even conda.
So the end result is a fully-isolated, minimal Docker image with nothing but
the installed package and its dependencies (and therefore a small size), ready
to be uploaded to a repository.

Note that :command:`--mulled-test` runs the tests extracted from the recipe in
the minimal container. Since the container only contains the package and its
dependencies, any tests must use only these. Even if the recipe specifies
additional test dependencies or additional test data (which is supported by
standard conda-build), these are not copied over to the final image and tests
with additional dependencies will therefore fail.

Details of containers using in building
---------------------------------------

The **build-env image** is used for *building* a package in a manner that is
isolated from the host. The built package appears back on the host's local
channel.

The **create-env image** is used by mulled-build for creating a conda
environment with the package and dependencies installed in such a way that the
resulting conda env can be easily copied out by involucro.

The **base image** is used by involucro as a starting image into which it will
copy the conda env created by mulled-build in the conda image

The **extended base image** is used in rare cases where very minimal base image
is *too* minimal. In this case, recipe authors can specify
``container:extended-base:true`` in the meta.yaml file, and the extended image
will be used as the base instead.

Here are the images, their respective Dockerfiles, and their quay.io repository
names. All images are built in the `bioconda-utils build-images GitHub Action
workflow
<https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/build-images.yml>`_.

The base image and extended base image have major.minor.patch versions (e.g.,
``1.2.3``) as their tags. The build-env image and the create-env image have
both the bioconda-utils version as well as the base image version (e.g.,
``2.11.1-base1.2.3``). This is because the images loosely depend on each other
for things like locale, and exact version of conda/mamba.

.. list-table::
  :header-rows: 1
  :class: inventory

  * - description
    - image
    - maintained in
    - dockerfile
    - built by

  * - build image
    - ``quay.io/bioconda/bioconda-utils-build-env-cos7``
    - bioconda-utils
    - `Dockerfile <https://github.com/bioconda/bioconda-utils/blob/master/Dockerfile>`_
    - `GitHub Action workflow <https://github.com/bioconda/bioconda-utils/blob/master/.github/workflows/build-image.yml>`_

  * - conda image
    - ``quay.io/bioconda/create-env:latest``
    - bioconda-containers
    - `Dockerfile <https://github.com/bioconda/bioconda-containers/blob/main/images/create-env/Dockerfile>`_
    - `GitHub Action workflow <https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/create-env.yaml>`_

  * - base image
    - ``quay.io/bioconda/base-glibc-busybox-bash:3.0``
    - bioconda-containers
    - `Dockerfile <https://github.com/bioconda/bioconda-containers/blob/main/images/base-glibc-busybox-bash/Dockerfile>`_
    - `GitHub Action workflow <https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/base-glibc-busybox-bash.yaml>`_

  * - extended base image
    - ``quay.io/bioconda/base-glibc-debian-bash:3.0``
    - bioconda-containers
    - `Dockerfile <https://github.com/bioconda/bioconda-containers/blob/main/images/base-glibc-debian-bash/Dockerfile>`_
    - `GitHub Action workflow <https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/base-glibc-debian-bash.yaml>`_

As of Nov 2023, each of these is configured to be built on both amd64 and arm64
(a.k.a x86_64 and aarch64) architectures.

In the actual :program:`bioconda-utils` code, the containers are specified in
several ways. Note that the links to code below point to specific commits in
order to highlight a line, so these may not be the most up-to-date code. But it
can give you a starting point for where to look.

- The build image is configured in `bioconda_utils/cli <https://github.com/bioconda/bioconda-utils/blob/2c5d4ad754f7bfa17b90495dc602118c7270d4bc/bioconda_utils/cli.py#L473>`_.

- mulled-build pays attention to `env vars
  <https://github.com/galaxyproject/galaxy/blob/01c4de53162f4e4ee306ebdd008199a897222dc3/lib/galaxy/tool_util/deps/mulled/mulled_build.py>`_
  that define what images to use.

- `bioconda_utils.pkg_test.test_package()
  <https://github.com/bioconda/bioconda-utils/blob/2c5d4ad754f7bfa17b90495dc602118c7270d4bc/bioconda_utils/pkg_test.py#L172>`_
  sets DEST_BASE_IMAGE to the `base_image` arg, which in turn is set in
  `bioconda_utils.build.build()
  <https://github.com/bioconda/bioconda-utils/blob/2c5d4ad754f7bfa17b90495dc602118c7270d4bc/bioconda_utils/build.py#L125-L129>`_.
  This can take one of two hard-coded values, depending on if the recipe needed
  an extended image or not.

- mulled-build also needs a conda image to use. This is set by bioconda-utils
  in `pkg_test.py
  <https://github.com/bioconda/bioconda-utils/blob/2c5d4ad754f7bfa17b90495dc602118c7270d4bc/bioconda_utils/pkg_test.py#L20>`_
  which is then passed to `build.build
  <https://github.com/bioconda/bioconda-utils/blob/2c5d4ad754f7bfa17b90495dc602118c7270d4bc/bioconda_utils/build.py#L61>`_.


The bot
-------

The BiocondaBot responds to comments on PRs an interacts with some artifacts
created by package builds. In order to have rapid response times, the bot is
implemented as a set of tagged Docker containers.

The bot actions largely consist of relatively simple HTTP requests. The code
for these actions is maintained in the `src/bioconda_bot
<https://github.com/bioconda/bioconda-containers/tree/main/images/bot/src/bioconda_bot>`_
Python package, within the bioconda-containers repo. There are different tagged
images for the different behaviors of the bot, which are built and pushed in
the `bot.yaml
<https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/bot.yaml>`_
GitHub Action workflow in the bioconda-containers repo. For example, the
comment behavior on bioconda-recipes is defined `here
<https://github.com/bioconda/bioconda-recipes/blob/master/.github/workflows/CommentResponder.yml#L17-L44>`_,
which uses the ``quay.io/bioconda/bot:comment`` container, sets some env
variables that GitHub Actions has access to, and runs :command:`bioconda-bot
comment` in the container. This container was created `here
<https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/bot.yaml#L34-L46>`_,
when the `matrix.tag was set to "comment"
<https://github.com/bioconda/bioconda-containers/blob/main/.github/workflows/bot.yaml#L20>`_.
