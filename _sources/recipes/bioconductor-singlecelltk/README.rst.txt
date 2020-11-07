:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecelltk'
.. highlight: bash

bioconductor-singlecelltk
=========================

.. conda:recipe:: bioconductor-singlecelltk
   :replaces_section_title:
   :noindex:

   Comprehensive and Interactive Analysis of Single Cell RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/singleCellTK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-singlecelltk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk/meta.yaml>`_

   Run common single cell analysis in the R console or directly through your browser. Includes many functions for import\, quality control\, normalization\, batch correction\, clustering\, differential expression\, and visualization..


.. conda:package:: bioconductor-singlecelltk

   |downloads_bioconductor-singlecelltk| |docker_bioconductor-singlecelltk|

   :versions:
      
      

      ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-batchelor: ``>=1.6.0,<1.7.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-celda: ``>=1.6.0,<1.7.0``
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-dropletutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-ggtree: ``>=2.4.0,<2.5.0``
   :depends bioconductor-gseabase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gsva: ``>=1.38.0,<1.39.0``
   :depends bioconductor-gsvadata: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-mast: ``>=1.16.0,<1.17.0``
   :depends bioconductor-multtest: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-scater: ``>=1.18.0,<1.19.0``
   :depends bioconductor-scdblfinder: ``>=1.4.0,<1.5.0``
   :depends bioconductor-scds: ``>=1.6.0,<1.7.0``
   :depends bioconductor-scmerge: ``>=1.6.0,<1.7.0``
   :depends bioconductor-scran: ``>=1.18.0,<1.19.0``
   :depends bioconductor-scrnaseq: ``>=2.3.0,<2.4.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends bioconductor-tenxpbmcdata: ``>=1.8.0,<1.9.0``
   :depends bioconductor-zinbwave: ``>=1.12.0,<1.13.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-colorspace: 
   :depends r-colourpicker: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-enrichr: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-kableextra: 
   :depends r-kernsmooth: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-msigdbr: 
   :depends r-plotly: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-reticulate: ``>=1.14``
   :depends r-rmarkdown: 
   :depends r-rocr: 
   :depends r-rtsne: 
   :depends r-seurat: ``>=3.1.3``
   :depends r-shiny: 
   :depends r-shinyalert: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinyfiles: 
   :depends r-shinyjqui: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinywidgets: 
   :depends r-uwot: 
   :depends r-withr: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecelltk

   and update with::

      conda update bioconductor-singlecelltk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecelltk:<tag>

   (see `bioconductor-singlecelltk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecelltk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecelltk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecelltk
   :alt:   (downloads)
.. |docker_bioconductor-singlecelltk| image:: https://quay.io/repository/biocontainers/bioconductor-singlecelltk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecelltk
.. _`bioconductor-singlecelltk/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecelltk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html