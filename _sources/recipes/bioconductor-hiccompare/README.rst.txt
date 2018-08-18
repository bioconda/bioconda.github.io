.. _`bioconductor-hiccompare`:

bioconductor-hiccompare
=======================

|downloads|

HiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. HiCcompare operates on processed Hi\-C data in the form of chromosome\-specific chromatin interaction matrices. It accepts three\-column tab\-separated text files storing chromatin interaction matrices in a sparse matrix format which are available from several sources. HiCcompare is designed to give the user the ability to perform a comparative analysis on the 3\-Dimensional structure of the genomes of cells in different biological states. HiCcompare differs from other packages that attempt to compare Hi\-C data in that it works on processed data in chromatin interaction matrix format instead of pre\-processed sequencing data. In addition\, HiCcompare provides a non\-parametric method for the joint normalization and removal of biases between two Hi\-C datasets for the purpose of comparative analysis. HiCcompare also provides a simple yet robust permutation method for detecting differences between Hi\-C datasets.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/HiCcompare.html
Versions      1.0.0
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare



Links         biotools: :biotools:`HiCcompare`, doi: :doi:`10.1186/s12859-018-2288-x`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hiccompare

and update with::

   conda update bioconductor-hiccompare



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hiccompare.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hiccompare/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hiccompare
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hiccompare/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hiccompare

