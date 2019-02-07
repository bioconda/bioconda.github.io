.. title:: Package Recipe 'bioconductor-batchqc'
.. highlight: bash


bioconductor-batchqc
====================

.. conda:recipe:: bioconductor-batchqc
   :replaces_section_title:

   Sequencing and microarray samples often are collected or processed in multiple batches or at different times. This often produces technical biases that can lead to incorrect results in the downstream analysis. BatchQC is a software tool that streamlines batch preprocessing and evaluation by providing interactive diagnostics\, visualizations\, and statistical analyses to explore the extent to which batch variation impacts the data. BatchQC diagnostics help determine whether batch adjustment needs to be done\, and how correction should be applied before proceeding with a downstream analysis. Moreover\, BatchQC interactively applies multiple common batch effect approaches to the data\, and the user can quickly see the benefits of each method. BatchQC is developed as a Shiny App. The output is organized into multiple tabs\, and each tab features an important part of the batch effect analysis and visualization of the data. The BatchQC interface has the following analysis groups\: Summary\, Differential Expression\, Median Correlations\, Heatmaps\, Circular Dendrogram\, PCA Analysis\, Shape\, ComBat and SVA.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BatchQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-batchqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchqc/meta.yaml>`_
   :links: biotools: :biotools:`batchqc`

   


.. conda:package:: bioconductor-batchqc

   |downloads_bioconductor-batchqc| |docker_bioconductor-batchqc|

   :versions: 1.10.1, 1.8.1, 1.6.1

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-d3heatmap`  :conda:package:`r-ggvis`  :conda:package:`r-gplots`  :conda:package:`r-knitr`  :conda:package:`r-matrix`  :conda:package:`r-matrixstats`  :conda:package:`r-mcmcpack`  :conda:package:`r-moments`  :conda:package:`r-pander`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-batchqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-batchqc

   and update with::

      conda update bioconductor-batchqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-batchqc


.. |required_by_bioconductor-batchqc| conda:required_by:: bioconductor-batchqc
.. |downloads_bioconductor-batchqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-batchqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-batchqc| image:: https://quay.io/repository/biocontainers/bioconductor-batchqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-batchqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchqc/README.html

