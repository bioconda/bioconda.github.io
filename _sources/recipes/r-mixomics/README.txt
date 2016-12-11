.. _`r-mixomics`:

r-mixomics
==========

|downloads|

We provide statistical integrative techniques and variants to analyse highly dimensional data sets: regularized Canonical Correlation Analysis ('rCCA') and sparse Partial Least Squares variants ('sPLS')  to unravel relationships between two heterogeneous data sets of size (n times p) and (n times q) where the p and q variables are measured on the same samples or individuals n. These data may come from high throughput  technologies, such as 'omics' data (e.g. transcriptomics, metabolomics or proteomics data) that require an integrative or joint analysis. However, 'mixOmics' can also be applied to any other  large data sets where p + q >> n. 'rCCA' is a regularized version of Canonical Correlation Analysis to deal with the large number of variables. 'sPLS' allows variable selection in a one step procedure and two frameworks  are proposed: regression and canonical analysis. Numerous graphical outputs are provided to help interpreting  the results. Recent methodological developments include: sparse PLS-Discriminant Analysis ('sPLS-DA'), Independent  Principal Component Analysis ('IPCA'), multilevel analysis using variance decomposition of the data and integration  of multiple data sets with regularized Generalised Canonical Correlation Analysis ('rGCCA') and variants (sparse 'GCCA'). More details  can be found  on our website.

======== ===========
Home     http://www.mixOmics.org
Versions 5.2.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixomics
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-mixomics

and update with::

   conda update r-mixomics



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-mixomics.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-mixomics/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-mixomics/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-mixomics/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-mixomics
.. |docker| image:: https://quay.io/repository/biocontainers/r-mixomics/status
                :target: https://quay.io/repository/biocontainers/r-mixomics


