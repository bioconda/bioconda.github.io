:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beachmat.hdf5'
.. highlight: bash

bioconductor-beachmat.hdf5
==========================

.. conda:recipe:: bioconductor-beachmat.hdf5
   :replaces_section_title:
   :noindex:

   beachmat bindings for HDF5\-backed matrices

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/beachmat.hdf5.html
   :license: GPL-3
   :recipe: /`bioconductor-beachmat.hdf5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.hdf5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.hdf5/meta.yaml>`_

   Extends beachmat to support initialization of tatami matrices from HDF5\-backed arrays. This allows C\+\+ code in downstream packages to directly call the HDF5 C\/C\+\+ library to access array data\, without the need for block processing via DelayedArray. Some utilities are also provided for direct creation of an in\-memory tatami matrix from a HDF5 file.


.. conda:package:: bioconductor-beachmat.hdf5

   |downloads_bioconductor-beachmat.hdf5| |docker_bioconductor-beachmat.hdf5|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-beachmat.hdf5

   and update with::

      mamba update bioconductor-beachmat.hdf5

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beachmat.hdf5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beachmat.hdf5:<tag>

   (see `bioconductor-beachmat.hdf5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beachmat.hdf5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beachmat.hdf5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beachmat.hdf5
   :alt:   (downloads)
.. |docker_bioconductor-beachmat.hdf5| image:: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5
.. _`bioconductor-beachmat.hdf5/tags`: https://quay.io/repository/biocontainers/bioconductor-beachmat.hdf5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beachmat.hdf5";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beachmat.hdf5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beachmat.hdf5/README.html