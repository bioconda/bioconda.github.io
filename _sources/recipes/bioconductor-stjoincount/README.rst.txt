:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stjoincount'
.. highlight: bash

bioconductor-stjoincount
========================

.. conda:recipe:: bioconductor-stjoincount
   :replaces_section_title:
   :noindex:

   stJoincount \- Join count statistic for quantifying spatial correlation between clusters

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/stJoincount.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-stjoincount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjoincount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjoincount/meta.yaml>`_

   stJoincount\, the application of join count analysis to the spatial transcriptomics dataset. This tool converts the spatial map into a raster object \(a two\-dimensional image as a rectangular matrix or grid of square pixels\)\, where clusters labelled spots are converted to adjacent pixels with a calculated resolution. A neighbors\' list was created based on the rasterized sample\, which identifies adjacent and diagonal neighbors for each pixel. After adding binary spatial weights to the neighbors\' list\, a multi\-categorical join count analysis is then performed\, allowing all possible combinations of cluster pairings to be tabulated. The function returns the observed join counts\, the expected count under conditions of spatial randomness\, and the variance of observed to expected calculated under non\-free sampling. The z\-score is then calculated as the difference between observed and expected counts\, divided by the square root of the variance.


.. conda:package:: bioconductor-stjoincount

   |downloads_bioconductor-stjoincount| |docker_bioconductor-stjoincount|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-raster: 
   :depends r-seurat: 
   :depends r-sp: 
   :depends r-spdep: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stjoincount

   and update with::

      conda update bioconductor-stjoincount

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stjoincount:<tag>

   (see `bioconductor-stjoincount/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stjoincount| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stjoincount.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stjoincount
   :alt:   (downloads)
.. |docker_bioconductor-stjoincount| image:: https://quay.io/repository/biocontainers/bioconductor-stjoincount/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stjoincount
.. _`bioconductor-stjoincount/tags`: https://quay.io/repository/biocontainers/bioconductor-stjoincount?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stjoincount";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stjoincount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stjoincount/README.html