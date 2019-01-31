.. _`bioconductor-hdf5array`:

bioconductor-hdf5array
======================

|downloads|

Implements the HDF5Array and TENxMatrix classes\, 2 convenient and memory\-efficient array\-like containers for on\-disk representation of HDF5 datasets. HDF5Array is for datasets that use the conventional \(i.e. dense\) HDF5 representation. TENxMatrix is for datasets that use the HDF5\-based sparse matrix representation from 10x Genomics \(e.g. the 1.3 Million Brain Cell Dataset\). Both containers being DelayedArray extensions\, they support all operations supported by DelayedArray objects. These operations can be either delayed or block\-processed.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/HDF5Array.html
Versions      1.8.1, 1.6.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-hdf5array/meta.yaml



Links         biotools: :biotools:`hdf5array`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hdf5array

and update with::

   conda update bioconductor-hdf5array



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hdf5array.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hdf5array/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hdf5array/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hdf5array/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hdf5array
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hdf5array/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hdf5array

