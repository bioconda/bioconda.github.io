.. _`r-penalized`:

r-penalized
===========

|downloads|

Fitting possibly high dimensional penalized regression models. The penalty structure can be any combination of an L1 penalty (lasso and fused lasso), an L2 penalty (ridge) and a positivity constraint on the regression coefficients. The supported regression models are linear, logistic and Poisson regression and the Cox Proportional Hazards model. Cross-validation routines allow optimization of the tuning parameters.

======== ===========
Home     https://cran.r-project.org/web/packages/penalized/index.html
Versions 0.9.47
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-penalized
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-penalized

and update with::

   conda update r-penalized



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-penalized.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-penalized/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-penalized/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-penalized/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-penalized
.. |docker| image:: https://quay.io/repository/biocontainers/r-penalized/status
                :target: https://quay.io/repository/biocontainers/r-penalized


