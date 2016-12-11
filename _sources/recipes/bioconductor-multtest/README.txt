.. _`bioconductor-multtest`:

bioconductor-multtest
=====================

|downloads|

Non-parametric bootstrap and permutation resampling-based multiple testing procedures (including empirical Bayes methods) for controlling the family-wise error rate (FWER), generalized family-wise error rate (gFWER), tail probability of the proportion of false positives (TPPFP), and false discovery rate (FDR).  Several choices of bootstrap-based null distribution are implemented (centered, centered and scaled, quantile-transformed). Single-step and step-wise methods are available. Tests based on a variety of t- and F-statistics (including t-statistics based on regression parameters from linear and survival models as well as those based on correlation parameters) are included.  When probing hypotheses with t-statistics, users may also select a potentially faster null distribution which is multivariate normal with mean zero and variance covariance matrix derived from the vector influence function.  Results are reported in terms of adjusted p-values, confidence regions and test statistic cutoffs. The procedures are directly applicable to identifying differentially expressed genes in DNA microarray experiments.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/multtest.html
Versions 2.26.0, 2.28.0
License  LGPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multtest
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-multtest

and update with::

   conda update bioconductor-multtest



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-multtest.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-multtest/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-multtest/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-multtest/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-multtest
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-multtest/status
                :target: https://quay.io/repository/biocontainers/bioconductor-multtest


