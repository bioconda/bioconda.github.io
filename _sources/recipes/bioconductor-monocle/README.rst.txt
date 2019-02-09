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

   :versions: 2.10.0, 2.8.0, 2.6.0, 2.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocviews` >=1.50.0,<1.51.0 :conda:package:`bioconductor-hsmmsinglecell` >=1.2.0,<1.3.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-combinat`  :conda:package:`r-ddrtree` >=0.1.4 :conda:package:`r-densityclust` >=0.3 :conda:package:`r-dplyr`  :conda:package:`r-fastica`  :conda:package:`r-ggplot2` >=1.0.0 :conda:package:`r-igraph` >=1.0.1 :conda:package:`r-irlba` >=2.0.0 :conda:package:`r-mass`  :conda:package:`r-matrix` >=1.2-6 :conda:package:`r-matrixstats`  :conda:package:`r-pheatmap`  :conda:package:`r-plyr`  :conda:package:`r-proxy`  :conda:package:`r-qlcmatrix`  :conda:package:`r-rann` >=2.5 :conda:package:`r-rcpp` >=0.12.0 :conda:package:`r-reshape2`  :conda:package:`r-rtsne`  :conda:package:`r-slam`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-vgam` >=1.0-6 :conda:package:`r-viridis`  

   :required~by: |required_by_bioconductor-monocle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-monocle

   and update with::

      conda update bioconductor-monocle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-monocle


.. |required_by_bioconductor-monocle| conda:required_by:: bioconductor-monocle
.. |downloads_bioconductor-monocle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-monocle.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-monocle| image:: https://quay.io/repository/biocontainers/bioconductor-monocle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-monocle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-monocle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-monocle/README.html

