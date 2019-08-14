:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elmer'
.. highlight: bash

bioconductor-elmer
==================

.. conda:recipe:: bioconductor-elmer
   :replaces_section_title:

   ELMER is designed to use DNA methylation and gene expression from a large number of samples to infere regulatory element landscape and transcription factor network in primary tissue.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ELMER.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer/meta.yaml>`_

   


.. conda:package:: bioconductor-elmer

   |downloads_bioconductor-elmer| |docker_bioconductor-elmer|

   :versions: 2.8.0-1, 2.6.1-0, 2.4.4-1, 2.4.4-0
   
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-complexheatmap: >=2.0.0,<2.1.0
   :depends bioconductor-delayedarray: >=0.10.0,<0.11.0
   :depends bioconductor-elmer.data: >=2.8.0,<2.9.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-gviz: >=1.28.0,<1.29.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-multiassayexperiment: >=1.10.0,<1.11.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-tcgabiolinks: >=2.12.0,<2.13.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
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
   :depends r-rmarkdown: 
   :depends r-rvest: 
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