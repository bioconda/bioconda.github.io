:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amaretto'
.. highlight: bash

bioconductor-amaretto
=====================

.. conda:recipe:: bioconductor-amaretto
   :replaces_section_title:

   Regulatory Network Inference and Driver Gene Evaluation using Integrative Multi\-Omics Analysis and Penalized Regression

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/AMARETTO.html
   :license: Apache License (== 2.0) + file LICENSE
   :recipe: /`bioconductor-amaretto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto/meta.yaml>`_

   Integrating an increasing number of available multi\-omics cancer data remains one of the main challenges to improve our understanding of cancer. One of the main challenges is using multi\-omics data for identifying novel cancer driver genes. We have developed an algorithm\, called AMARETTO\, that integrates copy number\, DNA methylation and gene expression data to identify a set of driver genes by analyzing cancer samples and connects them to clusters of co\-expressed genes\, which we define as modules. We applied AMARETTO in a pancancer setting to identify cancer driver genes and their modules on multiple cancer sites. AMARETTO captures modules enriched in angiogenesis\, cell cycle and EMT\, and modules that accurately predict survival and molecular subtypes. This allows AMARETTO to identify novel cancer driver genes directing canonical cancer pathways.


.. conda:package:: bioconductor-amaretto

   |downloads_bioconductor-amaretto| |docker_bioconductor-amaretto|

   :versions: 1.4.0-0, 1.1.1-1, 1.0.0-1
   
   :depends bioconductor-biocfilecache: >=1.12.0,<1.13.0
   :depends bioconductor-complexheatmap: >=2.4.0,<2.5.0
   :depends bioconductor-curatedtcgadata: >=1.10.0,<1.11.0
   :depends bioconductor-impute: >=1.62.0,<1.63.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-multiassayexperiment: >=1.14.0,<1.15.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-callr: >=3.0.0.9001
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gridextra: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amaretto

   and update with::

      conda update bioconductor-amaretto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amaretto:<tag>

   (see `bioconductor-amaretto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amaretto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amaretto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amaretto
   :alt:   (downloads)
.. |docker_bioconductor-amaretto| image:: https://quay.io/repository/biocontainers/bioconductor-amaretto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amaretto
.. _`bioconductor-amaretto/tags`: https://quay.io/repository/biocontainers/bioconductor-amaretto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amaretto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amaretto/README.html