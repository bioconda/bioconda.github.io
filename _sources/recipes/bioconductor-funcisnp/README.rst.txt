.. title:: Package Recipe 'bioconductor-funcisnp'
.. highlight: bash


bioconductor-funcisnp
=====================

.. conda:recipe:: bioconductor-funcisnp
   :replaces_section_title:

   FunciSNP integrates information from GWAS\, 1000genomes and chromatin feature to identify functional SNP in coding or non\-coding regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FunciSNP.html
   :license: GPL-3
   :recipe: /`bioconductor-funcisnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp/meta.yaml>`_

   


.. conda:package:: bioconductor-funcisnp

   |downloads_bioconductor-funcisnp| |docker_bioconductor-funcisnp|

   :versions: 1.26.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-chippeakanno` >=3.16.0,<3.17.0 :conda:package:`bioconductor-funcisnp.data` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene` >=3.2.0,<3.3.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=0.9.0 :conda:package:`r-plyr`  :conda:package:`r-reshape` >=0.8.4 :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-funcisnp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-funcisnp

   and update with::

      conda update bioconductor-funcisnp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-funcisnp


.. |required_by_bioconductor-funcisnp| conda:required_by:: bioconductor-funcisnp
.. |downloads_bioconductor-funcisnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funcisnp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-funcisnp| image:: https://quay.io/repository/biocontainers/bioconductor-funcisnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funcisnp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funcisnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funcisnp/README.html

