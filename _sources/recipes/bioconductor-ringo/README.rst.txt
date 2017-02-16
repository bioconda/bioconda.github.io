.. _`bioconductor-ringo`:

bioconductor-ringo
==================

|downloads|

The package Ringo facilitates the primary analysis of ChIP-chip data. The main functionalities of the package are data read-in, quality assessment, data visualisation and identification of genomic regions showing enrichment in ChIP-chip. The package has functions to deal with two-color oligonucleotide microarrays from NimbleGen used in ChIP-chip projects, but also contains more general functions for ChIP-chip data analysis, given that the data is supplied as RGList (raw)  or ExpressionSet (pre- processed). The package employs functions from various other packages of the Bioconductor project and provides additional ChIP-chip-specific and NimbleGen-specific functionalities.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/Ringo.html
Versions 1.38.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ringo
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ringo

and update with::

   conda update bioconductor-ringo



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ringo.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ringo/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ringo/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ringo/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ringo
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ringo/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ringo


