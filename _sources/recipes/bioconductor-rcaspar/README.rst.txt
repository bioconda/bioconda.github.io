.. _`bioconductor-rcaspar`:

bioconductor-rcaspar
====================

|downloads|

The package is the R-version of the C-based software \bold{CASPAR} (Kaderali,2006: \url{http://bioinformatics.oxfordjournals.org/content/22/12/1495}). It is meant to help predict survival times in the presence of high-dimensional explanatory covariates. The model is a piecewise baseline hazard Cox regression model with an Lq-norm based prior that selects for the most important regression coefficients, and in turn the most relevant covariates for survival analysis. It was primarily tried on gene expression and aCGH data, but can be used on any other type of high-dimensional data and in disciplines other than biology and medicine.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/RCASPAR.html
Versions 1.22.0
License  GPL (>=3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rcaspar

and update with::

   conda update bioconductor-rcaspar



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rcaspar.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rcaspar/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rcaspar
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rcaspar/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rcaspar


