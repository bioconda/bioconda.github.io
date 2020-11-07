:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-umi4cats'
.. highlight: bash

bioconductor-umi4cats
=====================

.. conda:recipe:: bioconductor-umi4cats
   :replaces_section_title:
   :noindex:

   UMI4Cats\: Processing\, analysis and visualization of UMI\-4C chromatin contact data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/UMI4Cats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-umi4cats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-umi4cats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-umi4cats/meta.yaml>`_

   UMI\-4C is a technique that allows characterization of 3D chromatin interactions with a bait of interest\, taking advantage of a sonication step to produce unique molecular identifiers \(UMIs\) that help remove duplication bias\, thus allowing a better differential comparsion of chromatin interactions between conditions. This package allows processing of UMI\-4C data\, starting from FastQ files provided by the sequencing facility. It provides two statistical methods for detecting differential contacts and includes a visualization function to plot integrated information from a UMI\-4C assay.


.. conda:package:: bioconductor-umi4cats

   |downloads_bioconductor-umi4cats| |docker_bioconductor-umi4cats|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-rbowtie2: ``>=1.12.0,<1.13.0``
   :depends bioconductor-regioner: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-shortread: ``>=1.48.0,<1.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-fda: 
   :depends r-ggplot2: 
   :depends r-magick: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-rappdirs: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-umi4cats

   and update with::

      conda update bioconductor-umi4cats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-umi4cats:<tag>

   (see `bioconductor-umi4cats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-umi4cats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-umi4cats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-umi4cats
   :alt:   (downloads)
.. |docker_bioconductor-umi4cats| image:: https://quay.io/repository/biocontainers/bioconductor-umi4cats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-umi4cats
.. _`bioconductor-umi4cats/tags`: https://quay.io/repository/biocontainers/bioconductor-umi4cats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-umi4cats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-umi4cats/README.html