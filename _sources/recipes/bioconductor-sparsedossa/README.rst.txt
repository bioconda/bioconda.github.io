.. _`bioconductor-sparsedossa`:

bioconductor-sparsedossa
========================

|downloads|

The package is to provide a model based Bayesian method to characterize and simulate microbiome data. sparseDOSSA\'s model captures the marginal distribution of each microbial feature as a truncated\, zero\-inflated log\-normal distribution\, with parameters distributed as a parent log\-normal distribution. The model can be effectively fit to reference microbial datasets in order to parameterize their microbes and communities\, or to simulate synthetic datasets of similar population structure. Most importantly\, it allows users to include both known feature\-feature and feature\-metadata correlation structures and thus provides a gold standard to enable benchmarking of statistical methods for metagenomic data analysis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/sparseDOSSA.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-sparsedossa/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sparsedossa

and update with::

   conda update bioconductor-sparsedossa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sparsedossa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sparsedossa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sparsedossa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sparsedossa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sparsedossa
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sparsedossa/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sparsedossa

