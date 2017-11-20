.. _`bioconductor-bitseq`:

bioconductor-bitseq
===================

|downloads|

The BitSeq package is targeted for transcript expression analysis and differential expression analysis of RNA-seq data in two stage process. In the first stage it uses Bayesian inference methodology to infer expression of individual transcripts from individual RNA-seq experiments. The second stage of BitSeq embraces the differential expression analysis of transcript expression. Providing expression estimates from replicates of multiple conditions, Log-Normal model of the estimates is used for inferring the condition mean transcript expression and ranking the transcripts based on the likelihood of differential expression.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/BitSeq.html
Versions 1.20.0, 1.22.0
License  Artistic-2.0 + file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bitseq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bitseq

and update with::

   conda update bioconductor-bitseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bitseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bitseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bitseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bitseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bitseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bitseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bitseq


