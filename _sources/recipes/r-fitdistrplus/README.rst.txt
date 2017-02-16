.. _`r-fitdistrplus`:

r-fitdistrplus
==============

|downloads|

Extends the fitdistr function (of the MASS package) with several functions to help the fit of a parametric distribution to non-censored or censored data. Censored data may contain left censored, right censored and interval censored values, with several lower and upper bounds. In addition to maximum likelihood estimation (MLE), the package provides moment matching (MME), quantile matching (QME) and maximum goodness-of-fit estimation (MGE) methods (available only for non-censored data). Weighted versions of MLE, MME and QME are available.

======== ===========
Home     http://riskassessment.r-forge.r-project.org
Versions 1.0_6
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fitdistrplus
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fitdistrplus

and update with::

   conda update r-fitdistrplus



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fitdistrplus.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fitdistrplus/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fitdistrplus/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fitdistrplus/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fitdistrplus
.. |docker| image:: https://quay.io/repository/biocontainers/r-fitdistrplus/status
                :target: https://quay.io/repository/biocontainers/r-fitdistrplus


