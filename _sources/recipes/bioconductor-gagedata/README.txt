.. _`bioconductor-gagedata`:

bioconductor-gagedata
=====================

|downloads|

This is a supportive data package for the software package, gage. However, the data supplied here are also useful for gene set or pathway analysis or microarray data analysis in general. In this package, we provide two demo microarray dataset: GSE16873 (a breast cancer dataset from GEO) and BMP6 (originally published as an demo dataset for GAGE, also registered as GSE13604 in GEO). This package also includes commonly used gene set data based on KEGG pathways and GO terms for major research species, including human, mouse, rat and budding yeast. Mapping data between common gene IDs for budding yeast are also included.

======== ===========
Home     http://bioconductor.org/packages/release/data/experiment/html/gageData.html
Versions 2.10.0, 2.8.0
License  GPL (>=2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gagedata
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gagedata

and update with::

   conda update bioconductor-gagedata



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gagedata.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gagedata/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gagedata/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gagedata/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gagedata
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gagedata/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gagedata


