.. _`bioconductor-genogam`:

bioconductor-genogam
====================

|downloads|

This package allows statistical analysis of genome\-wide data with smooth functions using generalized additive models based on the implementation from the R\-package \'mgcv\'. It provides methods for the statistical analysis of ChIP\-Seq data including inference of protein occupancy\, and pointwise and region\-wise differential analysis. Estimation of dispersion and smoothing parameters is performed by cross\-validation. Scaling of generalized additive model fitting to whole chromosomes is achieved by parallelization over overlapping genomic intervals.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GenoGAM.html
Versions      1.8.0, 1.6.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-genogam/meta.yaml



Links         biotools: :biotools:`genogam`, doi: :doi:`10.1093/bioinformatics/btx150`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-genogam

and update with::

   conda update bioconductor-genogam



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-genogam.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-genogam/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-genogam/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-genogam/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-genogam
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-genogam/status
                :target: https://quay.io/repository/biocontainers/bioconductor-genogam

