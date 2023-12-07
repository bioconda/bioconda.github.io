:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdf5array'
.. highlight: bash

bioconductor-hdf5array
======================

.. conda:recipe:: bioconductor-hdf5array
   :replaces_section_title:
   :noindex:

   HDF5 backend for DelayedArray objects

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HDF5Array.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hdf5array <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdf5array>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdf5array/meta.yaml>`_
   :links: biotools: :biotools:`hdf5array`, doi: :doi:`10.1038/nmeth.3252`

   Implement the HDF5Array\, H5SparseMatrix\, H5ADMatrix\, and TENxMatrix classes\, 4 convenient and memory\-efficient array\-like containers for representing and manipulating either\: \(1\) a conventional \(a.k.a. dense\) HDF5 dataset\, \(2\) an HDF5 sparse matrix \(stored in CSR\/CSC\/Yale format\)\, \(3\) the central matrix of an h5ad file \(or any matrix in the \/layers group\)\, or \(4\) a 10x Genomics sparse matrix. All these containers are DelayedArray extensions and thus support all operations \(delayed or block\-processed\) supported by DelayedArray objects.


.. conda:package:: bioconductor-hdf5array

   |downloads_bioconductor-hdf5array| |docker_bioconductor-hdf5array|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.22.1-1</code>,  <code>1.22.1-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.22.1-1``,  ``1.22.1-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rhdf5filters: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rhdf5filters: ``>=1.14.1,<1.15.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rhdf5lib: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-s4arrays: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4arrays: ``>=1.2.0,<1.3.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hdf5array

   and update with::

      mamba update bioconductor-hdf5array

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hdf5array

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdf5array:<tag>

   (see `bioconductor-hdf5array/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdf5array| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdf5array.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdf5array
   :alt:   (downloads)
.. |docker_bioconductor-hdf5array| image:: https://quay.io/repository/biocontainers/bioconductor-hdf5array/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdf5array
.. _`bioconductor-hdf5array/tags`: https://quay.io/repository/biocontainers/bioconductor-hdf5array?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdf5array";
        var versions = ["1.30.0","1.28.1","1.26.0","1.26.0","1.22.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdf5array/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdf5array/README.html