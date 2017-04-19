.. _`r-mixtools`:

r-mixtools
==========

|downloads|

Analyzes finite mixture models for various parametric and semiparametric settings.  This includes mixtures of parametric distributions (normal, multivariate normal, multinomial, gamma), various Reliability Mixture Models (RMMs), mixtures-of-regressions settings (linear regression, logistic regression, Poisson regression, linear regression with changepoints, predictor-dependent mixing proportions, random effects regressions, hierarchical mixtures-of-experts), and tools for selecting the number of components (bootstrapping the likelihood ratio test statistic and model selection criteria).  Bayesian estimation of mixtures-of-linear-regressions models is available as well as a novel data depth method for obtaining credible bands.  This package is based upon work supported by the National Science Foundation under Grant No. SES-0518772.

======== ===========
Home     https://cran.r-project.org/web/packages/mixtools/
Versions 1.1.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixtools
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-mixtools

and update with::

   conda update r-mixtools



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-mixtools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-mixtools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-mixtools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-mixtools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-mixtools
.. |docker| image:: https://quay.io/repository/biocontainers/r-mixtools/status
                :target: https://quay.io/repository/biocontainers/r-mixtools


