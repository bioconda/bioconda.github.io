.. _`bioconductor-gsva`:

bioconductor-gsva
=================

|downloads|

Gene Set Variation Analysis (GSVA) is a non-parametric, unsupervised method for estimating variation of gene set enrichment through the samples of a expression data set. GSVA performs a change in coordinate systems, transforming the data from a gene by sample matrix to a gene-set by sample matrix, thereby allowing the evaluation of pathway enrichment for each sample. This new matrix of GSVA enrichment scores facilitates applying standard analytical methods like functional enrichment, survival analysis, clustering, CNV-pathway analysis or cross-tissue pathway analysis, in a pathway-centric manner.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/GSVA.html
Versions 1.24.1, 1.24.2
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsva
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gsva

and update with::

   conda update bioconductor-gsva



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gsva.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gsva/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gsva/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gsva/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gsva
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gsva/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gsva


