.. _`bioconductor-msmstests`:

bioconductor-msmstests
======================

|downloads|

Statistical tests for label\-free LC\-MS\/MS data by spectral counts\, to discover differentially expressed proteins between two biological conditions. Three tests are available\: Poisson GLM regression\, quasi\-likelihood GLM regression\, and the negative binomial of the edgeR package.The three models admit blocking factors to control for nuissance variables.To assure a good level of reproducibility a post\-test filter is available\, where we may set the minimum effect size considered biologicaly relevant\, and the minimum expression of the most abundant condition.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/msmsTests.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-msmstests/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-msmstests

and update with::

   conda update bioconductor-msmstests



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-msmstests.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-msmstests/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-msmstests/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-msmstests/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-msmstests
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-msmstests/status
                :target: https://quay.io/repository/biocontainers/bioconductor-msmstests

