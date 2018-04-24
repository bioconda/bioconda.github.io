.. _`bioconductor-twilight`:

bioconductor-twilight
=====================

|downloads|

In a typical microarray setting with gene expression data observed under two conditions\, the local false discovery rate describes the probability that a gene is not differentially expressed between the two conditions given its corrresponding observed score or p\-value level. The resulting curve of p\-values versus local false discovery rate offers an insight into the twilight zone between clear differential and clear non\-differential gene expression. Package \'twilight\' contains two main functions\: Function twilight.pval performs a two\-condition test on differences in means for a given input matrix or expression set and computes permutation based p\-values. Function twilight performs a stochastic downhill search to estimate local false discovery rates and effect size distributions. The package further provides means to filter for permutations that describe the null distribution correctly. Using filtered permutations\, the influence of hidden confounders could be diminished.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/twilight.html
Versions      1.52.0, 1.54.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight



Links         biotools: :biotools:`twilight`, doi: :doi:`10.1093/bioinformatics/bti436`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-twilight

and update with::

   conda update bioconductor-twilight



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-twilight.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-twilight/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-twilight/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-twilight/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-twilight
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-twilight/status
                :target: https://quay.io/repository/biocontainers/bioconductor-twilight

