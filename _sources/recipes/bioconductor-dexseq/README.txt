.. _`bioconductor-dexseq`:

bioconductor-dexseq
===================

|downloads|

The package is focused on finding differential exon usage using RNA-seq exon counts between samples with different experimental designs. It provides functions that allows the user to make the necessary statistical tests based on a model that uses the negative binomial distribution to estimate the variance between biological replicates and generalized linear models for testing. The package also provides functions for the visualization and exploration of the results.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/DEXSeq.html
Versions 1.16.6
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexseq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dexseq

and update with::

   conda update bioconductor-dexseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dexseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dexseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dexseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dexseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dexseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dexseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dexseq


