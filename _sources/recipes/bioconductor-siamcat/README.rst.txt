.. title:: Package Recipe 'bioconductor-siamcat'
.. highlight: bash


bioconductor-siamcat
====================

.. conda:recipe:: bioconductor-siamcat
   :replaces_section_title:

   Pipeline for Statistical Inference of Associations between Microbial Communities And host phenoTypes \(SIAMCAT\). A primary goal of analyzing microbiome data is to determine changes in community composition that are associated with environmental factors. In particular\, linking human microbiome composition to host phenotypes such as diseases has become an area of intense research. For this\, robust statistical modeling and biomarker extraction toolkits are crucially needed. SIAMCAT provides a full pipeline supporting data preprocessing\, statistical association testing\, statistical modeling \(LASSO logistic regression\) including tools for evaluation and interpretation of these models \(such as cross validation\, parameter selection\, ROC analysis and diagnostic model plots\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SIAMCAT.html
   :license: GPL-3
   :recipe: /`bioconductor-siamcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat/meta.yaml>`_

   


.. conda:package:: bioconductor-siamcat

   |downloads_bioconductor-siamcat| |docker_bioconductor-siamcat|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-phyloseq` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-beanplot`  :conda:package:`r-corrplot`  :conda:package:`r-glmnet`  :conda:package:`r-gridbase`  :conda:package:`r-gridextra`  :conda:package:`r-infotheo`  :conda:package:`r-liblinear`  :conda:package:`r-matrixstats`  :conda:package:`r-mlr`  :conda:package:`r-paramhelpers`  :conda:package:`r-proc`  :conda:package:`r-prroc`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-scales`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-siamcat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-siamcat

   and update with::

      conda update bioconductor-siamcat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-siamcat


.. |required_by_bioconductor-siamcat| conda:required_by:: bioconductor-siamcat
.. |downloads_bioconductor-siamcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-siamcat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-siamcat| image:: https://quay.io/repository/biocontainers/bioconductor-siamcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-siamcat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-siamcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-siamcat/README.html

