Updating bioinformatic software to Bioconda - a reference guide
===============================================================


*This guide was originally written by James A. Fellows Yates and reviewed by the µbinfie community for the* `µbinfie blog <https://ubinfie.github.io/>`_. 
*You can see the original post* `here <https://ubinfie.github.io/2024/08/16/updating-bioconda-recipe-quickguide.html>`_

This tutorial aims to give a gentle introduction to updating bioinformatic software to Bioconda.

Updating a Bioconda recipe is often a relatively easy process as much of
the 'hard work' and problems has been solved in the initial recipe
creation. Typically updates to a Bioconda recipe consist of updating the
version number of the tool and the hash of the tool or packages source
code tarball. In some cases you may need to add a few dependencies
(easy), and in rare cases change the build process (more complex).
However in all cases you can refer to :doc:`/tutorials/2024-adding-bioinformatic-software-to-bioconda` to understand these more
complex scenarios.

In general however the process for updating or fixing an existing recipe
the process is similar to the later steps in :doc:`/tutorials/2024-adding-bioinformatic-software-to-bioconda`.

*Note that if we use GitHub releases for our tool/package, Bioconda
tries to *automatically* update Bioconda recipes for us, so we may not
need to do many of the steps this manually. 
*Of course, this works if
there are no changes to the dependencies or tests that can cause the
tests and thus the recipe building to fail.*

Prerequisite
************

Make sure to familiarise yourself :doc:`/tutorials/2024-adding-bioinformatic-software-to-bioconda` to
understand the basics of adding a new tool to Bioconda.

1. Make a fork of the `bioconda-recipes <https://github.com/bioconda/bioconda-recipes/>`_ GitHub repository, and clone this to our local machine [1]_.

2. Install on our local machine the following software:

   - `conda` itself
     - I used to use `miniconda <https://docs.anaconda.com/miniconda/miniconda-other-installer-links/>`_, but now switching to `miniforge <https://conda-forge.org/miniforge/>`_ due to licensing issues [2]_
   - Bioconda configured as a source channel (see `bioconda documentation <https://bioconda.github.io/#usage>`_)
   - The following conda packages:

     - ``conda-build``
     - ``bioconda-utils``
     - ``greyskull`` (optional: for Python software on pypi or R packages on CRAN)

     I typically dump all of the above in a specific conda environment, generated with the following command:

    .. code-block:: bash 

        conda create -n bioconda-build -c conda-forge -c bioconda conda-build bioconda-utils greyskull
        conda activate bioconda-build

   - ``docker`` (optional: for local build testing)

Updating the Bioconda recipe
****************************

Otherwise, to manually update or fix a recipe:

1. Make sure our ``bioconda-recipes`` fork is up to date with the main.

2. Make a new branch for the update.

3. Edit the ``meta.yaml``, ``build.sh`` files of the recipe with our
   changes.

4. Update the build number:

   -  If it is simply *fixing* a recipe with no version change of the
      tool, bump the ``build_number`` by ``+1``.
   -  If this is a new version of the tool, set the ``build_number`` to
      ``0``.

   For most updates, the differences would simply look like this in the
   ``meta.yaml`` file:

   .. code:: diff

      - {% set version = "2.0.6" %}
      + {% set version = "2.0.7" %}

      package:
          name: cami-amber
          version: {{ version }}

      source:
          url:  https://pypi.io/packages/source/c/cami-amber/cami-amber-{{ version }}.tar.gz
      -  sha256: d2d3d13a135f7ce4dff6bc1aab014945b0e5249b02f9afff3e6df1d82ef45d5a
      +  sha256: 01f11fbab7cb0f24497932669b00981292b1dc0df2ce6cd4b707a7ddd675bf8d

      build:
          noarch: python

5. Add all files, commit and push to our fork.

6. Open the PR on ``bioconda-recipes``, wait for the CI to to complete
   successfully, and tag for review with '@BiocondaBot please add label'
   as above. For more details see :doc:`/tutorials/2024-updating-bioinformatic-software-to-bioconda`.

   -  If something goes wrong and something does not complete
      successfully, check the hash and build numbers are correct
   -  If linting goes wrong, this is typically related to a missing
      ``run_exports`` section, see the opening instructions on the
      `pango-collapse
      PR <https://github.com/bioconda/bioconda-recipes/pull/50377>`_.

In case something goes wrong during step 6 above, see :doc:`/tutorials/2024-debugging-bioinformatic-software-to-bioconda` on how to debug a
Bioconda build in case something goes wrong.

If the tool needs a new build procedure, see :doc:`/tutorials/2024-adding-bioinformatic-software-to-bioconda` for more information on how to
write ``build.sh`` scripts.

Conclusion
**********

This guide hopefully has given you enough pointers on the steps required to *update* a recipe and submit your tool/package to Bioconda.

As with all bioinformatics and software development in general, things
rarely just 'work' straight out of the box. My three biggest points of
advice:

-  Always copy and paste from other similar tools or packages on the
   Bioconda recipes repository.
-  Take the time to read through the whole log messages (sometimes you
   can find critical clues hidden amongst the verbose information).
-  Take the time to go step by step trying to follow exactly what
   Bioconda does during it's own building on Azure with local building.

I found by taking the time, I very quickly learnt common issues and how
to solve them.

Worst comes to worst, you can always ask the very friendly Bioconda team
on the `Bioconda gitter/matrix
channel <https://gitter.im/bioconda/Lobby>`__.

.. [1] Note that conda-forge has a different system for adding packages!
.. [2] You can do a shallow clone ``git clone --depth 1``, to make the size of the cloned repo smaller on your machine. Thanks to @Wytamma for the tip!
