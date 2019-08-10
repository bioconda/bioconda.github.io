:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecelltk'
.. highlight: bash

bioconductor-singlecelltk
=========================

.. conda:recipe:: bioconductor-singlecelltk
   :replaces_section_title:

   Run common single cell analysis directly through your browser including differential expression\, downsampling analysis\, and clustering.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/singleCellTK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-singlecelltk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecelltk/meta.yaml>`_

   


.. conda:package:: bioconductor-singlecelltk

   |downloads_bioconductor-singlecelltk| |docker_bioconductor-singlecelltk|

   :versions: 1.4.0-1, 1.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-complexheatmap: >=2.0.0,<2.1.0
   :depends bioconductor-delayedarray: >=0.10.0,<0.11.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-ggtree: >=1.16.0,<1.17.0
   :depends bioconductor-gsva: >=1.32.0,<1.33.0
   :depends bioconductor-gsvadata: >=1.20.0,<1.21.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-mast: >=1.10.0,<1.11.0
   :depends bioconductor-multtest: >=2.40.0,<2.41.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-sva: >=3.32.0,<3.33.0
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-enrichr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :depends r-shinyalert: 
   :depends r-shinycssloaders: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-umap: 
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