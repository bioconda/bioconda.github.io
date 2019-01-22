.. _`bioconductor-basics`:

bioconductor-basics
===================

|downloads|

Single\-cell mRNA sequencing can uncover novel cell\-to\-cell heterogeneity in gene expression levels in seemingly homogeneous populations of cells. However\, these experiments are prone to high levels of technical noise\, creating new challenges for identifying genes that show genuine heterogeneous expression within the population of cells under study. BASiCS \(Bayesian Analysis of Single\-Cell Sequencing data\) is an integrated Bayesian hierarchical model to perform statistical analyses of single\-cell RNA sequencing datasets in the context of supervised experiments \(where the groups of cells of interest are known a priori\, e.g. experimental conditions or cell types\). BASiCS performs built\-in data normalisation \(global scaling\) and technical noise quantification \(based on spike\-in genes\). BASiCS provides an intuitive detection criterion for highly \(or lowly\) variable genes within a single group of cells. Additionally\, BASiCS can compare gene expression patterns between two or more pre\-specified groups of cells. Unlike traditional differential expression tools\, BASiCS quantifies changes in expression that lie beyond comparisons of means\, also allowing the study of changes in cell\-to\-cell heterogeneity. The latter can be quantified via a biological over\-dispersion parameter that measures the excess of variability that is observed with respect to Poisson sampling noise\, after normalisation and technical noise removal. Due to the strong mean\/over\-dispersion confounding that is typically observed for scRNA\-seq datasets\, BASiCS also tests for changes in residual over\-dispersion\, defined by residual values with respect to a global mean\/over\-dispersion trend.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BASiCS.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basics



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-basics

and update with::

   conda update bioconductor-basics



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-basics.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-basics/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-basics/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-basics/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-basics
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-basics/status
                :target: https://quay.io/repository/biocontainers/bioconductor-basics

