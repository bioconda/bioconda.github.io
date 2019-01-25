.. _`bioconductor-outrider`:

bioconductor-outrider
=====================

|downloads|

Identification of aberrant gene expression in RNA\-seq data. Read count expectations are modeled by an autoencoder to control for confounders in the data. Given these expectations\, the RNA\-seq read counts are assumed to follow a negative binomial distribution with a gene\-specific dispersion. Outliers are then identified as read counts that significantly deviate from this distribution. Furthermore\, OUTRIDER provides useful plotting functions to analyze and visualize the results.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/OUTRIDER.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-outrider/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-outrider

and update with::

   conda update bioconductor-outrider



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-outrider.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-outrider/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-outrider/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-outrider/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-outrider
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-outrider/status
                :target: https://quay.io/repository/biocontainers/bioconductor-outrider

