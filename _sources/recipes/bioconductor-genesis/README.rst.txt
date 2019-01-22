.. _`bioconductor-genesis`:

bioconductor-genesis
====================

|downloads|

The GENESIS package provides methodology for estimating\, inferring\, and accounting for population and pedigree structure in genetic analyses.  The current implementation provides functions to perform PC\-AiR \(Conomos et al.\, 2015\, Gen Epi\) and PC\-Relate \(Conomos et al.\, 2016\, AJHG\). PC\-AiR performs a Principal Components Analysis on genome\-wide SNP data for the detection of population structure in a sample that may contain known or cryptic relatedness. Unlike standard PCA\, PC\-AiR accounts for relatedness in the sample to provide accurate ancestry inference that is not confounded by family structure. PC\-Relate uses ancestry representative principal components to adjust for population structure\/ancestry and accurately estimate measures of recent genetic relatedness such as kinship coefficients\, IBD sharing probabilities\, and inbreeding coefficients. Additionally\, functions are provided to perform efficient variance component estimation and mixed model association testing for both quantitative and binary phenotypes.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GENESIS.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-genesis

and update with::

   conda update bioconductor-genesis



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-genesis.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-genesis/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-genesis/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-genesis/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-genesis
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-genesis/status
                :target: https://quay.io/repository/biocontainers/bioconductor-genesis

