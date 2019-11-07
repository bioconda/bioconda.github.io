:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnamodr'
.. highlight: bash

bioconductor-rnamodr
====================

.. conda:recipe:: bioconductor-rnamodr
   :replaces_section_title:

   Detection of post\-transcriptional modifications in high throughput sequencing data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RNAmodR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnamodr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnamodr/meta.yaml>`_

   RNAmodR provides classes and workflows for loading\/aggregation data from high througput sequencing aimed at detecting post\-transcriptional modifications through analysis of specific patterns. In addition\, utilities are provided to validate and visualize the results. The RNAmodR package provides a core functionality from which specific analysis strategies can be easily implemented as a seperate package.


.. conda:package:: bioconductor-rnamodr

   |downloads_bioconductor-rnamodr| |docker_bioconductor-rnamodr|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-biovizbase: >=1.34.0,<1.35.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-modstrings: >=1.2.0,<1.3.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends r-assertive: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-colorramps: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnamodr

   and update with::

      conda update bioconductor-rnamodr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnamodr:<tag>

   (see `bioconductor-rnamodr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnamodr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnamodr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnamodr
   :alt:   (downloads)
.. |docker_bioconductor-rnamodr| image:: https://quay.io/repository/biocontainers/bioconductor-rnamodr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnamodr
.. _`bioconductor-rnamodr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnamodr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnamodr/README.html