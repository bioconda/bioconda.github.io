:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-basejump'
.. highlight: bash

r-basejump
==========

.. conda:recipe:: r-basejump
   :replaces_section_title:

   Base functions for bioinformatics and R package development.

   :homepage: https://github.com/steinbaugh/basejump
   :license: MIT
   :recipe: /`r-basejump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump/meta.yaml>`_

   


.. conda:package:: r-basejump

   |downloads_r-basejump| |docker_r-basejump|

   :versions: 0.9.9-0, 0.7.2-1, 0.7.2-0, 0.5.9-0, 0.5.3-0, 0.1.1-0
   
   :depends bioconductor-annotationhub: 
   
   :depends bioconductor-biobase: 
   
   :depends bioconductor-biocgenerics: 
   
   :depends bioconductor-ensembldb: 
   
   :depends bioconductor-genomeinfodb: 
   
   :depends bioconductor-s4vectors: 
   
   :depends r-assertive: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bioverbs: >=0.1.6
   
   :depends r-brio: >=0.1.5
   
   :depends r-cowplot: >=0.9
   
   :depends r-dendsort: 
   
   :depends r-devtools: 
   
   :depends r-dplyr: >=0.7
   
   :depends r-ggplot2: >=3.0
   
   :depends r-ggrepel: >=0.8
   
   :depends r-goalie: >=0.2.8
   
   :depends r-knitr: >=1.2.1
   
   :depends r-magrittr: >=1.5
   
   :depends r-matrix: >=1.2
   
   :depends r-matrix.utils: >=0.9
   
   :depends r-matrixstats: >=0.54
   
   :depends r-pbapply: 
   
   :depends r-pheatmap: >=1.0
   
   :depends r-purrr: >=0.2
   
   :depends r-r.utils: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-rcurl: >=1.95
   
   :depends r-readr: >=1.3
   
   :depends r-readxl: >=1.0
   
   :depends r-reshape2: >=1.4
   
   :depends r-rio: 
   
   :depends r-rlang: >=0.3
   
   :depends r-scales: 
   
   :depends r-sessioninfo: >=1.1
   
   :depends r-stringr: >=1.3
   
   :depends r-syntactic: >=0.1.4
   
   :depends r-tibble: >=2.0
   
   :depends r-tidyr: >=0.8
   
   :depends r-tidyselect: >=0.2
   
   :depends r-transformer: >=0.1.4
   
   :depends r-viridis: 
   
   :depends r-yaml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-basejump

   and update with::

      conda update r-basejump

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-basejump:<tag>

   (see `r-basejump/tags`_ for valid values for ``<tag>``)


.. |downloads_r-basejump| image:: https://img.shields.io/conda/dn/bioconda/r-basejump.svg?style=flat
   :alt:   (downloads)
.. |docker_r-basejump| image:: https://quay.io/repository/biocontainers/r-basejump/status
   :target: https://quay.io/repository/biocontainers/r-basejump
.. _`r-basejump/tags`: https://quay.io/repository/biocontainers/r-basejump?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-basejump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-basejump/README.html