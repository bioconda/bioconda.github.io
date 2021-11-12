:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecelltk'
.. highlight: bash

bioconductor-singlecelltk
=========================

.. conda:recipe:: bioconductor-singlecelltk
   :replaces_section_title:
   :noindex:

   Comprehensive and Interactive Analysis of Single Cell RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/singleCellTK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-singlecelltk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk/meta.yaml>`_

   Run common single cell analysis in the R console or directly through your browser. Includes many functions for import\, quality control\, normalization\, batch correction\, clustering\, differential expression\, and visualization..


.. conda:package:: bioconductor-singlecelltk

   |downloads_bioconductor-singlecelltk| |docker_bioconductor-singlecelltk|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-batchelor: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-celda: ``>=1.10.0,<1.11.0``
   :depends bioconductor-celldex: ``>=1.4.0,<1.5.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.16.0,<1.17.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dropletutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-fishpond: ``>=2.0.0,<2.1.0``
   :depends bioconductor-ggtree: ``>=3.2.0,<3.3.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends bioconductor-gsva: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gsvadata: ``>=1.30.0,<1.31.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-mast: ``>=1.20.0,<1.21.0``
   :depends bioconductor-multtest: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scater: ``>=1.22.0,<1.23.0``
   :depends bioconductor-scdblfinder: ``>=1.8.0,<1.9.0``
   :depends bioconductor-scds: ``>=1.10.0,<1.11.0``
   :depends bioconductor-scmerge: ``>=1.10.0,<1.11.0``
   :depends bioconductor-scran: ``>=1.22.0,<1.23.0``
   :depends bioconductor-scrnaseq: ``>=2.8.0,<2.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singler: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-sva: ``>=3.42.0,<3.43.0``
   :depends bioconductor-tenxpbmcdata: ``>=1.12.0,<1.13.0``
   :depends bioconductor-tximport: ``>=1.22.0,<1.23.0``
   :depends bioconductor-zinbwave: ``>=1.16.0,<1.17.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :depends r-kernsmooth: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-metap: 
   :depends r-msigdbr: 
   :depends r-plotly: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-reticulate: ``>=1.14``
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-rocr: 
   :depends r-rtsne: 
   :depends r-seurat: ``>=3.1.3``
   :depends r-shiny: 
   :depends r-shinyalert: 
   :depends r-shinycssloaders: 
   :depends r-shinyjs: 
   :depends r-tibble: 
   :depends r-vam: ``>=0.5.3``
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


.. raw:: html

    <script>
        var package = "bioconductor-singlecelltk";
        var versions = ["2.4.0","2.2.0","2.0.0","2.0.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecelltk/README.html