.. _`bioconductor-gage`:

bioconductor-gage
=================

|downloads|

GAGE is a published method for gene set (enrichment or GSEA) or pathway analysis. GAGE is generally applicable independent of microarray or RNA-Seq data attributes including sample sizes, experimental designs, assay platforms, and other types of heterogeneity, and consistently achieves superior performance over other frequently used methods. In gage package, we provide functions for basic GAGE analysis, result processing and presentation. We have also built pipeline routines for of multiple GAGE analyses in a batch, comparison between parallel analyses, and combined analysis of heterogeneous data from different sources/studies. In addition, we provide demo microarray data and commonly used gene set data based on KEGG pathways and GO terms. These funtions and data are also useful for gene set analysis using other methods.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/gage.html
Versions 2.21.1
License  GPL (>=2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gage
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gage

and update with::

   conda update bioconductor-gage



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gage.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gage/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gage/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gage/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gage
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gage/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gage


