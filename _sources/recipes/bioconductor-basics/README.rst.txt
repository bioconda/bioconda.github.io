.. title:: Package Recipe 'bioconductor-basics'
.. highlight: bash


bioconductor-basics
===================

.. conda:recipe:: bioconductor-basics
   :replaces_section_title:

   Single\-cell mRNA sequencing can uncover novel cell\-to\-cell heterogeneity in gene expression levels in seemingly homogeneous populations of cells. However\, these experiments are prone to high levels of technical noise\, creating new challenges for identifying genes that show genuine heterogeneous expression within the population of cells under study. BASiCS \(Bayesian Analysis of Single\-Cell Sequencing data\) is an integrated Bayesian hierarchical model to perform statistical analyses of single\-cell RNA sequencing datasets in the context of supervised experiments \(where the groups of cells of interest are known a priori\, e.g. experimental conditions or cell types\). BASiCS performs built\-in data normalisation \(global scaling\) and technical noise quantification \(based on spike\-in genes\). BASiCS provides an intuitive detection criterion for highly \(or lowly\) variable genes within a single group of cells. Additionally\, BASiCS can compare gene expression patterns between two or more pre\-specified groups of cells. Unlike traditional differential expression tools\, BASiCS quantifies changes in expression that lie beyond comparisons of means\, also allowing the study of changes in cell\-to\-cell heterogeneity. The latter can be quantified via a biological over\-dispersion parameter that measures the excess of variability that is observed with respect to Poisson sampling noise\, after normalisation and technical noise removal. Due to the strong mean\/over\-dispersion confounding that is typically observed for scRNA\-seq datasets\, BASiCS also tests for changes in residual over\-dispersion\, defined by residual values with respect to a global mean\/over\-dispersion trend.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BASiCS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-basics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basics/meta.yaml>`_

   


.. conda:package:: bioconductor-basics

   |downloads_bioconductor-basics| |docker_bioconductor-basics|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-scran` >=1.10.0,<1.11.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coda`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-kernsmooth`  :conda:package:`r-mass`  :conda:package:`r-matrixstats`  :conda:package:`r-rcpp` >=0.11.3 :conda:package:`r-rcpparmadillo`  :conda:package:`r-testthat`  

   :required~by: |required_by_bioconductor-basics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basics

   and update with::

      conda update bioconductor-basics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-basics


.. |required_by_bioconductor-basics| conda:required_by:: bioconductor-basics
.. |downloads_bioconductor-basics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-basics| image:: https://quay.io/repository/biocontainers/bioconductor-basics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basics/README.html

