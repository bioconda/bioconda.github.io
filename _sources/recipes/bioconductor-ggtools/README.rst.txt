:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtools'
.. highlight: bash

bioconductor-ggtools
====================

.. conda:recipe:: bioconductor-ggtools
   :replaces_section_title:

   software and data for analyses in genetics of gene expression and\/or DNA methylation

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GGtools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtools/meta.yaml>`_
   :links: biotools: :biotools:`ggtools`

   


.. conda:package:: bioconductor-ggtools

   |downloads_bioconductor-ggtools| |docker_bioconductor-ggtools|

   :versions: 5.18.0-0, 5.16.0-0, 5.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-ggbase: >=3.44.0,<3.45.0
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-snpstats: >=1.32.0,<1.33.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-biglm: 
   :depends r-bit: 
   :depends r-data.table: 
   :depends r-ff: 
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-iterators: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggtools

   and update with::

      conda update bioconductor-ggtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggtools:<tag>

   (see `bioconductor-ggtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ggtools| image:: https://quay.io/repository/biocontainers/bioconductor-ggtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtools
.. _`bioconductor-ggtools/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtools/README.html