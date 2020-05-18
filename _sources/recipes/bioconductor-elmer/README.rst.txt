:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elmer'
.. highlight: bash

bioconductor-elmer
==================

.. conda:recipe:: bioconductor-elmer
   :replaces_section_title:

   Inferring Regulatory Element Landscapes and Transcription Factor Networks Using Cancer Methylomes

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ELMER.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer/meta.yaml>`_

   ELMER is designed to use DNA methylation and gene expression from a large number of samples to infere regulatory element landscape and transcription factor network in primary tissue.


.. conda:package:: bioconductor-elmer

   |downloads_bioconductor-elmer| |docker_bioconductor-elmer|

   :versions: 2.12.0-0, 2.9.5-1, 2.8.0-1, 2.6.1-0, 2.4.4-1, 2.4.4-0
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-complexheatmap: >=2.4.0,<2.5.0
   :depends bioconductor-delayedarray: >=0.14.0,<0.15.0
   :depends bioconductor-elmer.data: >=2.12.0,<2.13.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-gviz: >=1.32.0,<1.33.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-multiassayexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-tcgabiolinks: >=2.16.0,<2.17.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-rvest: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-elmer

   and update with::

      conda update bioconductor-elmer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-elmer:<tag>

   (see `bioconductor-elmer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-elmer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elmer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elmer
   :alt:   (downloads)
.. |docker_bioconductor-elmer| image:: https://quay.io/repository/biocontainers/bioconductor-elmer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elmer
.. _`bioconductor-elmer/tags`: https://quay.io/repository/biocontainers/bioconductor-elmer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elmer/README.html