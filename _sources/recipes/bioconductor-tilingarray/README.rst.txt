.. _`bioconductor-tilingarray`:

bioconductor-tilingarray
========================

|downloads|

The package provides functionality that can be useful for the analysis of high\-density tiling microarray data \(such as from Affymetrix genechips\) for measuring transcript abundance and architecture. The main functionalities of the package are\: 1. the class \'segmentation\' for representing partitionings of a linear series of data\; 2. the function \'segment\' for fitting piecewise constant models using a dynamic programming algorithm that is both fast and exact\; 3. the function \'confint\' for calculating confidence intervals using the strucchange package\; 4. the function \'plotAlongChrom\' for generating pretty plots\; 5. the function \'normalizeByReference\' for probe\-sequence dependent response adjustment from a \(set of\) reference hybridizations.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/tilingArray.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-tilingarray/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tilingarray

and update with::

   conda update bioconductor-tilingarray



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tilingarray.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tilingarray/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tilingarray
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tilingarray/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tilingarray

