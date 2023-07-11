:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdf5array'
.. highlight: bash

bioconductor-hdf5array
======================

.. conda:recipe:: bioconductor-hdf5array
   :replaces_section_title:
   :noindex:

   HDF5 backend for DelayedArray objects

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HDF5Array.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hdf5array <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdf5array>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdf5array/meta.yaml>`_
   :links: biotools: :biotools:`hdf5array`, doi: :doi:`10.1038/nmeth.3252`

   Implement the HDF5Array\, H5SparseMatrix\, H5ADMatrix\, and TENxMatrix classes\, 4 convenient and memory\-efficient array\-like containers for representing and manipulating either\: \(1\) a conventional \(a.k.a. dense\) HDF5 dataset\, \(2\) an HDF5 sparse matrix \(stored in CSR\/CSC\/Yale format\)\, \(3\) the central matrix of an h5ad file \(or any matrix in the \/layers group\)\, or \(4\) a 10x Genomics sparse matrix. All these containers are DelayedArray extensions and thus support all operations \(delayed or block\-processed\) supported by DelayedArray objects.


.. conda:package:: bioconductor-hdf5array

   |downloads_bioconductor-hdf5array| |docker_bioconductor-hdf5array|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.1-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.22.1-1</code>,  <code>1.22.1-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  </span></summary>
      

      ``1.28.1-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.22.1-1``,  ``1.22.1-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rhdf5filters: ``>=1.12.0,<1.13.0``
   :depends bioconductor-rhdf5lib: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4arrays: ``>=1.0.0,<1.1.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hdf5array

   and update with::

      conda update bioconductor-hdf5array

   or use the docker container::

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
        var versions = ["1.28.1","1.26.0","1.26.0","1.22.1","1.22.1"];
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