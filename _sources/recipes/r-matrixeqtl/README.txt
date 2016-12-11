.. _`r-matrixeqtl`:

r-matrixeqtl
============

|downloads|

Matrix eQTL is designed for fast eQTL analysis on large datasets. Matrix eQTL can test for association between genotype and gene expression using linear regression  with either additive or ANOVA genotype effects. The models can include covariates to account for factors  as population stratification, gender, and clinical variables.  It also supports models with heteroscedastic and/or correlated errors, false discovery rate estimation and separate treatment of local (cis) and distant (trans) eQTLs.

======== ===========
Home     http://www.bios.unc.edu/research/genomic_software/Matrix_eQTL/
Versions 2.1.1
License  LGPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-matrixeqtl
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-matrixeqtl

and update with::

   conda update r-matrixeqtl



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-matrixeqtl.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-matrixeqtl/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-matrixeqtl/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-matrixeqtl/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-matrixeqtl
.. |docker| image:: https://quay.io/repository/biocontainers/r-matrixeqtl/status
                :target: https://quay.io/repository/biocontainers/r-matrixeqtl


