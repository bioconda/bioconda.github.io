:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-funcisnp'
.. highlight: bash

bioconductor-funcisnp
=====================

.. conda:recipe:: bioconductor-funcisnp
   :replaces_section_title:

   FunciSNP integrates information from GWAS\, 1000genomes and chromatin feature to identify functional SNP in coding or non\-coding regions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/FunciSNP.html
   :license: GPL-3
   :recipe: /`bioconductor-funcisnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp/meta.yaml>`_

   


.. conda:package:: bioconductor-funcisnp

   |downloads_bioconductor-funcisnp| |docker_bioconductor-funcisnp|

   :versions: 1.26.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-chippeakanno: >=3.16.0,<3.17.0
   :depends bioconductor-funcisnp.data: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-snpstats: >=1.32.0,<1.33.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: >=3.2.0,<3.3.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: >=0.9.0
   :depends r-plyr: 
   :depends r-reshape: >=0.8.4
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-funcisnp

   and update with::

      conda update bioconductor-funcisnp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-funcisnp:<tag>

   (see `bioconductor-funcisnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-funcisnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funcisnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-funcisnp
   :alt:   (downloads)
.. |docker_bioconductor-funcisnp| image:: https://quay.io/repository/biocontainers/bioconductor-funcisnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funcisnp
.. _`bioconductor-funcisnp/tags`: https://quay.io/repository/biocontainers/bioconductor-funcisnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funcisnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funcisnp/README.html