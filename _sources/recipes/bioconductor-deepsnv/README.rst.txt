.. _`bioconductor-deepsnv`:

bioconductor-deepsnv
====================

|downloads|

This package provides provides quantitative variant callers for detecting subclonal mutations in ultra\-deep \(\>\=100x coverage\) sequencing experiments. The deepSNV algorithm is used for a comparative setup with a control experiment of the same loci and uses a beta\-binomial model and a likelihood ratio test to discriminate sequencing errors and subclonal SNVs. The shearwater algorithm computes a Bayes classifier based on a beta\-binomial model for variant calling with multiple samples for precisely estimating model parameters \- such as local error rates and dispersion \- and prior knowledge\, e.g. from variation data bases such as COSMIC.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/deepSNV.html
Versions      1.26.1, 1.24.0, 1.22.0, 1.20.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv



Links         biotools: :biotools:`deepsnv`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-deepsnv

and update with::

   conda update bioconductor-deepsnv



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-deepsnv.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-deepsnv/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-deepsnv
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-deepsnv/status
                :target: https://quay.io/repository/biocontainers/bioconductor-deepsnv

