.. _`bioconductor-siamcat`:

bioconductor-siamcat
====================

|downloads|

Pipeline for Statistical Inference of Associations between Microbial Communities And host phenoTypes \(SIAMCAT\). A primary goal of analyzing microbiome data is to determine changes in community composition that are associated with environmental factors. In particular\, linking human microbiome composition to host phenotypes such as diseases has become an area of intense research. For this\, robust statistical modeling and biomarker extraction toolkits are crucially needed. SIAMCAT provides a full pipeline supporting data preprocessing\, statistical association testing\, statistical modeling \(LASSO logistic regression\) including tools for evaluation and interpretation of these models \(such as cross validation\, parameter selection\, ROC analysis and diagnostic model plots\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SIAMCAT.html
Versions      1.2.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-siamcat/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-siamcat

and update with::

   conda update bioconductor-siamcat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-siamcat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-siamcat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-siamcat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-siamcat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-siamcat
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-siamcat/status
                :target: https://quay.io/repository/biocontainers/bioconductor-siamcat

