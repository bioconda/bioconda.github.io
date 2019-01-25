.. _`r-leapp`:

r-leapp
=======

|downloads|

These functions take a gene expression value matrix\, a primary covariate vector\, an additional known covariates matrix.  A two stage analysis is applied to counter the effects of latent variables on the rankings of hypotheses.  The estimation and adjustment of latent effects are proposed by Sun\, Zhang and Owen \(2011\).  \"leapp\" is developed in the context of microarray experiments\, but may be used as a general tool for high throughput data sets where dependence may be involved.

============= ===========
Home          https://CRAN.R-project.org/package=leapp
Versions      1.2
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/r-leapp/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-leapp

and update with::

   conda update r-leapp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-leapp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-leapp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-leapp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-leapp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-leapp
.. |docker| image:: https://quay.io/repository/biocontainers/r-leapp/status
                :target: https://quay.io/repository/biocontainers/r-leapp

