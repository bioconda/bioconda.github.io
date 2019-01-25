.. _`bioconductor-regparallel`:

bioconductor-regparallel
========================

|downloads|

In many analyses\, a large amount of variables have to be tested independently against the trait\/endpoint of interest\, and also adjusted for covariates and confounding factors at the same time. The major bottleneck in these is the amount of time that it takes to complete these analyses. With RegParallel\, a large number of tests can be performed simultaneously. On a 12\-core system\, 144 variables can be tested simultaneously\, with 1000s of variables processed in a matter of seconds via \'nested\' parallel processing. Works for logistic regression\, linear regression\, conditional logistic regression\, Cox proportional hazards and survival models\, Bayesian logistic regression\, and negative binomial regression.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/RegParallel.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-regparallel/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-regparallel

and update with::

   conda update bioconductor-regparallel



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-regparallel.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-regparallel/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-regparallel/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-regparallel/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-regparallel
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-regparallel/status
                :target: https://quay.io/repository/biocontainers/bioconductor-regparallel

