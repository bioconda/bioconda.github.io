:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-monocle'
.. highlight: bash

bioconductor-monocle
====================

.. conda:recipe:: bioconductor-monocle
   :replaces_section_title:

   Monocle performs differential expression and time\-series analysis for single\-cell expression experiments. It orders individual cells according to progress through a biological process\, without knowing ahead of time which genes define progress through that process. Monocle also performs differential expression analysis\, clustering\, visualization\, and other useful tasks on single cell expression data.  It is designed to work with RNA\-Seq and qPCR data\, but could be used with other types as well.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/monocle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-monocle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monocle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monocle/meta.yaml>`_
   :links: biotools: :biotools:`monocle`

   


.. conda:package:: bioconductor-monocle

   |downloads_bioconductor-monocle| |docker_bioconductor-monocle|

   :versions: 2.10.0-0, 2.8.0-0, 2.6.0-0, 2.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocviews: >=1.50.0,<1.51.0
   :depends bioconductor-hsmmsinglecell: >=1.2.0,<1.3.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-combinat: 
   :depends r-ddrtree: >=0.1.4
   :depends r-densityclust: >=0.3
   :depends r-dplyr: 
   :depends r-fastica: 
   :depends r-ggplot2: >=1.0.0
   :depends r-igraph: >=1.0.1
   :depends r-irlba: >=2.0.0
   :depends r-mass: 
   :depends r-matrix: >=1.2-6
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-proxy: 
   :depends r-qlcmatrix: 
   :depends r-rann: >=2.5
   :depends r-rcpp: >=0.12.0
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-slam: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-vgam: >=1.0-6
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-monocle

   and update with::

      conda update bioconductor-monocle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-monocle:<tag>

   (see `bioconductor-monocle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-monocle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-monocle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-monocle
   :alt:   (downloads)
.. |docker_bioconductor-monocle| image:: https://quay.io/repository/biocontainers/bioconductor-monocle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-monocle
.. _`bioconductor-monocle/tags`: https://quay.io/repository/biocontainers/bioconductor-monocle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-monocle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-monocle/README.html