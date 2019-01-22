.. _`bioconductor-sparsenetgls`:

bioconductor-sparsenetgls
=========================

|downloads|

The package provides methods of combining the graph structure learning and generalized least squares regression to improve the regression estimation. The main function sparsenetgls\(\) provides solutions for multivariate regression with Gaussian distributed dependant variables and explanatory variables utlizing multiple well\-known graph structure learning approaches to estimating the precision matrix\, and uses a penalized variance covariance matrix with a distance tuning parameter of the graph structure in deriving the sandwich estimators in generalized least squares \(gls\) regression. This package also provides functions for assessing a Gaussian graphical model which uses the penalized approach. It uses Receiver Operative Characteristics curve as a visualization tool in the assessment.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/sparsenetgls.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sparsenetgls

and update with::

   conda update bioconductor-sparsenetgls



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sparsenetgls.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sparsenetgls/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sparsenetgls
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls

