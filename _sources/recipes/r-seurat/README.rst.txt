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

   :versions: 2.3.4, 2.3.1, 2.2.0, 1.4.0.16

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`openjdk` >=6 :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-caret`  :conda:package:`r-cluster`  :conda:package:`r-cowplot`  :conda:package:`r-diffusionmap`  :conda:package:`r-dosnow`  :conda:package:`r-dplyr`  :conda:package:`r-dtw`  :conda:package:`r-fitdistrplus`  :conda:package:`r-fnn`  :conda:package:`r-foreach`  :conda:package:`r-fpc`  :conda:package:`r-gdata`  :conda:package:`r-ggplot2`  :conda:package:`r-ggridges`  :conda:package:`r-gplots`  :conda:package:`r-hdf5r`  :conda:package:`r-hmisc`  :conda:package:`r-ica`  :conda:package:`r-igraph`  :conda:package:`r-irlba`  :conda:package:`r-lars`  :conda:package:`r-lmtest`  :conda:package:`r-mass`  :conda:package:`r-matrix` >=1.2.14 :conda:package:`r-metap`  :conda:package:`r-mixtools`  :conda:package:`r-pbapply`  :conda:package:`r-plotly`  :conda:package:`r-png`  :conda:package:`r-ranger`  :conda:package:`r-rann`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  :conda:package:`r-rcppeigen`  :conda:package:`r-rcppprogress`  :conda:package:`r-reshape2`  :conda:package:`r-reticulate`  :conda:package:`r-rocr`  :conda:package:`r-rtsne`  :conda:package:`r-sdmtools`  :conda:package:`r-stringr`  :conda:package:`r-tclust`  :conda:package:`r-tidyr`  :conda:package:`r-tsne`  :conda:package:`r-vgam`  

   :required~by: |required_by_r-seurat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seurat

   and update with::

      conda update r-seurat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-seurat


.. |required_by_r-seurat| conda:required_by:: r-seurat
.. |downloads_r-seurat| image:: https://img.shields.io/conda/dn/bioconda/r-seurat.svg?style=flat
   :alt:   (downloads)
.. |docker_r-seurat| image:: https://quay.io/repository/biocontainers/r-seurat/status
   :target: https://quay.io/repository/biocontainers/r-seurat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seurat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seurat/README.html

