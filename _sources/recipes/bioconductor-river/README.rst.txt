.. _`bioconductor-river`:

bioconductor-river
==================

|downloads|

An implementation of a probabilistic modeling framework that jointly analyzes personal genome and transcriptome data to estimate the probability that a variant has regulatory impact in that individual. It is based on a generative model that assumes that genomic annotations\, such as the location of a variant with respect to regulatory elements\, determine the prior probability that variant is a functional regulatory variant\, which is an unobserved variable. The functional regulatory variant status then influences whether nearby genes are likely to display outlier levels of gene expression in that person. See the RIVER website for more information\, documentation and examples.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RIVER.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-river



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-river

and update with::

   conda update bioconductor-river



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-river.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-river/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-river/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-river/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-river
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-river/status
                :target: https://quay.io/repository/biocontainers/bioconductor-river

