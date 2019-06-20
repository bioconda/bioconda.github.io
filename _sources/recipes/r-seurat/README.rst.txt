:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seurat'
.. highlight: bash

r-seurat
========

.. conda:recipe:: r-seurat
   :replaces_section_title:

   A toolkit for quality control\, analysis\, and exploration of single cell RNA sequencing data. \'Seurat\' aims to enable users to identify and interpret sources of heterogeneity from single cell transcriptomic measurements\, and to integrate diverse types of single cell data. See Satija R\, Farrell J\, Gennert D\, et al \(2015\) \<doi\:10.1038\/nbt.3192\>\, Macosko E\, Basu A\, Satija R\, et al \(2015\) \<doi\:10.1016\/j.cell.2015.05.002\>\, and Butler A and Satija R \(2017\) \<doi\:10.1101\/164889\> for more details.

   :homepage: http://www.satijalab.org/seurat, https://github.com/satijalab/seurat
   :license: GPL3 / GPL-3
   :recipe: /`r-seurat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat/meta.yaml>`_

   


.. conda:package:: r-seurat

   |downloads_r-seurat| |docker_r-seurat|

   :versions: 3.0.1-0, 3.0.0-0, 2.3.4-2, 2.3.4-1, 2.3.4-0, 2.3.1-0, 2.2.0-0, 1.4.0.16-1, 1.4.0.16-0
   
   :depends libcxx: >=4.0.1
   :depends r-ape: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-fitdistrplus: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: >=3.0.0
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-ica: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-kernsmooth: 
   :depends r-lmtest: 
   :depends r-mass: 
   :depends r-matrix: >=1.2.14
   :depends r-metap: 
   :depends r-pbapply: 
   :depends r-plotly: 
   :depends r-png: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-rcppprogress: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-rocr: 
   :depends r-rsvd: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-sctransform: >=0.2.0
   :depends r-sdmtools: 
   :depends r-tsne: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seurat

   and update with::

      conda update r-seurat

   or use the docker container::

      docker pull quay.io/biocontainers/r-seurat:<tag>

   (see `r-seurat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seurat| image:: https://img.shields.io/conda/dn/bioconda/r-seurat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seurat
   :alt:   (downloads)
.. |docker_r-seurat| image:: https://quay.io/repository/biocontainers/r-seurat/status
   :target: https://quay.io/repository/biocontainers/r-seurat
.. _`r-seurat/tags`: https://quay.io/repository/biocontainers/r-seurat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seurat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seurat/README.html