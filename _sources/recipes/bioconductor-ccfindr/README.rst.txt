.. _`bioconductor-ccfindr`:

bioconductor-ccfindr
====================

|downloads|

A collection of tools for cancer genomic data clustering analyses\, including those for single cell RNA\-seq. Cell clustering and feature gene selection analysis employ Bayesian \(and maximum likelihood\) non\-negative matrix factorization \(NMF\) algorithm. Input data set consists of RNA count matrix\, gene\, and cell bar code annotations.  Analysis outputs are factor matrices for multiple ranks and marginal likelihood values for each rank. The package includes utilities for downstream analyses\, including meta\-gene identification\, visualization\, and construction of rank\-based trees for clusters.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ccfindR.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccfindr



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ccfindr

and update with::

   conda update bioconductor-ccfindr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ccfindr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ccfindr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ccfindr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ccfindr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ccfindr

