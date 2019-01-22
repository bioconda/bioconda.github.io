.. _`bioconductor-batchqc`:

bioconductor-batchqc
====================

|downloads|

Sequencing and microarray samples often are collected or processed in multiple batches or at different times. This often produces technical biases that can lead to incorrect results in the downstream analysis. BatchQC is a software tool that streamlines batch preprocessing and evaluation by providing interactive diagnostics\, visualizations\, and statistical analyses to explore the extent to which batch variation impacts the data. BatchQC diagnostics help determine whether batch adjustment needs to be done\, and how correction should be applied before proceeding with a downstream analysis. Moreover\, BatchQC interactively applies multiple common batch effect approaches to the data\, and the user can quickly see the benefits of each method. BatchQC is developed as a Shiny App. The output is organized into multiple tabs\, and each tab features an important part of the batch effect analysis and visualization of the data. The BatchQC interface has the following analysis groups\: Summary\, Differential Expression\, Median Correlations\, Heatmaps\, Circular Dendrogram\, PCA Analysis\, Shape\, ComBat and SVA.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BatchQC.html
Versions      1.8.1, 1.6.1
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchqc



Links         biotools: :biotools:`batchqc`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-batchqc

and update with::

   conda update bioconductor-batchqc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-batchqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-batchqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-batchqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-batchqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-batchqc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-batchqc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-batchqc

