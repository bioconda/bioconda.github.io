.. _`bioconductor-bigmemoryextras`:

bioconductor-bigmemoryextras
============================

|downloads|

This package defines a \"BigMatrix\" ReferenceClass which adds safety and convenience features to the filebacked.big.matrix class from the bigmemory package. BigMatrix protects against segfaults by monitoring and gracefully restoring the connection to on\-disk data and it also protects against accidental data modification with a filesystem\-based permissions system. We provide utilities for using BigMatrix\-derived classes as assayData matrices within the Biobase package\'s eSet family of classes. BigMatrix provides some optimizations related to attaching to\, and indexing into\, file\-backed matrices with dimnames. Additionally\, the package provides a \"BigMatrixFactor\" class\, a file\-backed matrix with factor properties.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/bigmemoryExtras.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-bigmemoryextras/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bigmemoryextras

and update with::

   conda update bioconductor-bigmemoryextras



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bigmemoryextras/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bigmemoryextras/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bigmemoryextras/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bigmemoryextras
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras

