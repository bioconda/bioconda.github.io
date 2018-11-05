.. _`bioconductor-geneselector`:

bioconductor-geneselector
=========================

|downloads|

The term \'GeneSelector\' refers to a filter selecting those genes which are consistently identified as differentially expressed using various statistical procedures. \'Selected\' genes are those present at the top of the list in various ranking methods \(currently 14\). In addition\, the stability of the findings can be taken into account in the final ranking by examining perturbed versions of the original data set\, e.g. by leaving samples\, swapping class labels\, generating bootstrap replicates or adding noise. Given multiple ranked lists\, one can use aggregation methods in order to find a synthesis.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/GeneSelector.html
Versions      2.28.0, 2.30.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselector



Links         biotools: :biotools:`geneselector`, doi: :doi:`10.1093/bib/bbp034`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-geneselector

and update with::

   conda update bioconductor-geneselector



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-geneselector.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-geneselector/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-geneselector/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-geneselector/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-geneselector
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-geneselector/status
                :target: https://quay.io/repository/biocontainers/bioconductor-geneselector

