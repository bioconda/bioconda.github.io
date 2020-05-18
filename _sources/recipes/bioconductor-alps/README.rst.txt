:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alps'
.. highlight: bash

bioconductor-alps
=================

.. conda:recipe:: bioconductor-alps
   :replaces_section_title:

   AnaLysis routines for ePigenomicS data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ALPS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alps/meta.yaml>`_

   The package provides analysis and publication quality visualization routines for genome\-wide epigenomics data such as histone modification or transcription factor ChIP\-seq\, ATAC\-seq\, DNase\-seq etc. The functions in the package can be used with any type of data that can be represented with bigwig files at any resolution. The goal of the ALPS is to provide analysis tools for most downstream analysis without leaving the R environment and most tools in the package require a minimal input that can be prepared with basic R\, unix or excel skills.


.. conda:package:: bioconductor-alps

   |downloads_bioconductor-alps| |docker_bioconductor-alps|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-chipseeker: >=1.24.0,<1.25.0
   :depends bioconductor-genefilter: >=1.70.0,<1.71.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-gviz: >=1.32.0,<1.33.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: >=3.2.0,<3.3.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: >=3.10.0,<3.11.0
   :depends r-assertthat: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-corrplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggally: 
   :depends r-gghalves: 
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alps

   and update with::

      conda update bioconductor-alps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alps:<tag>

   (see `bioconductor-alps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alps
   :alt:   (downloads)
.. |docker_bioconductor-alps| image:: https://quay.io/repository/biocontainers/bioconductor-alps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alps
.. _`bioconductor-alps/tags`: https://quay.io/repository/biocontainers/bioconductor-alps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alps/README.html