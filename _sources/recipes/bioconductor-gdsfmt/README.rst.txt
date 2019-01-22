.. _`bioconductor-gdsfmt`:

bioconductor-gdsfmt
===================

|downloads|

This package provides a high\-level R interface to CoreArray Genomic Data Structure \(GDS\) data files\, which are portable across platforms with hierarchical structure to store multiple scalable array\-oriented data sets with metadata information. It is suited for large\-scale datasets\, especially for data which are much larger than the available random\-access memory. The gdsfmt package offers the efficient operations specifically designed for integers of less than 8 bits\, since a diploid genotype\, like single\-nucleotide polymorphism \(SNP\)\, usually occupies fewer bits than a byte. Data compression and decompression are available with relatively efficient random access. It is also allowed to read a GDS file in parallel with multiple R processes supported by the package parallel.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/gdsfmt.html
Versions      1.16.0, 1.14.1
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdsfmt



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gdsfmt

and update with::

   conda update bioconductor-gdsfmt



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gdsfmt.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gdsfmt/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gdsfmt/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gdsfmt
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gdsfmt/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gdsfmt

