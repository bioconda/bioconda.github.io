.. _`r-missforest`:

r-missforest
============

|downloads|

The function 'missForest' in this package is used to impute missing values particularly in the case of mixed-type data. It uses a random forest trained on the observed values of a data matrix to predict the missing values. It can be used to impute continuous and/or categorical data including complex interactions and non-linear relations. It yields an out-of-bag (OOB) imputation error estimate without the need of a test set or elaborate cross-validation. It can be run in parallel to  save computation time.

======== ===========
Home     http://www.r-project.org, https://github.com/stekhoven/missForest
Versions 1.4
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-missforest
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-missforest

and update with::

   conda update r-missforest



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-missforest.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-missforest/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-missforest/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-missforest/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-missforest
.. |docker| image:: https://quay.io/repository/biocontainers/r-missforest/status
                :target: https://quay.io/repository/biocontainers/r-missforest


