:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-siamcat'
.. highlight: bash

bioconductor-siamcat
====================

.. conda:recipe:: bioconductor-siamcat
   :replaces_section_title:

   Statistical Inference of Associations between Microbial Communities And host phenoTypes

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SIAMCAT.html
   :license: GPL-3
   :recipe: /`bioconductor-siamcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat/meta.yaml>`_

   Pipeline for Statistical Inference of Associations between Microbial Communities And host phenoTypes \(SIAMCAT\). A primary goal of analyzing microbiome data is to determine changes in community composition that are associated with environmental factors. In particular\, linking human microbiome composition to host phenotypes such as diseases has become an area of intense research. For this\, robust statistical modeling and biomarker extraction toolkits are crucially needed. SIAMCAT provides a full pipeline supporting data preprocessing\, statistical association testing\, statistical modeling \(LASSO logistic regression\) including tools for evaluation and interpretation of these models \(such as cross validation\, parameter selection\, ROC analysis and diagnostic model plots\).


.. conda:package:: bioconductor-siamcat

   |downloads_bioconductor-siamcat| |docker_bioconductor-siamcat|

   :versions: 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-phyloseq: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-beanplot: 
   :depends r-corrplot: 
   :depends r-glmnet: 
   :depends r-gridbase: 
   :depends r-gridextra: 
   :depends r-infotheo: 
   :depends r-liblinear: 
   :depends r-matrixstats: 
   :depends r-mlr: 
   :depends r-paramhelpers: 
   :depends r-proc: 
   :depends r-progress: 
   :depends r-prroc: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-siamcat

   and update with::

      conda update bioconductor-siamcat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-siamcat:<tag>

   (see `bioconductor-siamcat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-siamcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-siamcat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-siamcat
   :alt:   (downloads)
.. |docker_bioconductor-siamcat| image:: https://quay.io/repository/biocontainers/bioconductor-siamcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-siamcat
.. _`bioconductor-siamcat/tags`: https://quay.io/repository/biocontainers/bioconductor-siamcat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-siamcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-siamcat/README.html