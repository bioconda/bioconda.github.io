:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromscape'
.. highlight: bash

bioconductor-chromscape
=======================

.. conda:recipe:: bioconductor-chromscape
   :replaces_section_title:
   :noindex:

   Analysis of single\-cell epigenomics datasets with a Shiny App

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ChromSCape.html
   :license: GPL-3
   :recipe: /`bioconductor-chromscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromscape/meta.yaml>`_

   ChromSCape \- Chromatin landscape profiling for Single Cells \- is a ready\-to\-launch user\-friendly Shiny Application for the analysis of single\-cell epigenomics datasets \(scChIP\-seq\, scATAC\-seq\, scCUT\&Tag\, ...\) from aligned data to differential analysis \& gene set enrichment analysis. It is highly interactive\, enables users to save their analysis and covers a wide range of analytical steps\: QC\, preprocessing\, filtering\, batch correction\, dimensionality reduction\, vizualisation\, clustering\, differential analysis and gene set analysis.


.. conda:package:: bioconductor-chromscape

   |downloads_bioconductor-chromscape| |docker_bioconductor-chromscape|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-batchelor: ``>=1.8.0,<1.9.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-consensusclusterplus: ``>=1.56.0,<1.57.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scran: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sushi: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-colorramps: 
   :depends r-colourpicker: 
   :depends r-coop: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-irlba: 
   :depends r-jsonlite: 
   :depends r-kableextra: 
   :depends r-matrix: 
   :depends r-matrixtests: 
   :depends r-msigdbr: 
   :depends r-plotly: 
   :depends r-qs: 
   :depends r-qualv: 
   :depends r-rcpp: 
   :depends r-rlist: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinyhelper: 
   :depends r-shinyjs: 
   :depends r-stringdist: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-umap: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromscape

   and update with::

      conda update bioconductor-chromscape

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromscape:<tag>

   (see `bioconductor-chromscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromscape
   :alt:   (downloads)
.. |docker_bioconductor-chromscape| image:: https://quay.io/repository/biocontainers/bioconductor-chromscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromscape
.. _`bioconductor-chromscape/tags`: https://quay.io/repository/biocontainers/bioconductor-chromscape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromscape/README.html