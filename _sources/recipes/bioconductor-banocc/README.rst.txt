.. _`bioconductor-banocc`:

bioconductor-banocc
===================

|downloads|

BAnOCC is a package designed for compositional data\, where each sample sums to one. It infers the approximate covariance of the unconstrained data using a Bayesian model coded with \`rstan\`. It provides as output the \`stanfit\` object as well as posterior median and credible interval estimates for each correlation element.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/banocc.html
Versions      1.4.0, 1.2.0, 1.0.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-banocc/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-banocc

and update with::

   conda update bioconductor-banocc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-banocc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-banocc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-banocc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-banocc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-banocc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-banocc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-banocc

