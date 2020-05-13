:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isomirs'
.. highlight: bash

bioconductor-isomirs
====================

.. conda:recipe:: bioconductor-isomirs
   :replaces_section_title:

   Analyze isomiRs and miRNAs from small RNA\-seq

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/isomiRs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isomirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs/meta.yaml>`_
   :links: biotools: :biotools:`isomirs`, doi: :doi:`10.1093/bioinformatics/btv632`

   Characterization of miRNAs and isomiRs\, clustering and differential expression.


.. conda:package:: bioconductor-isomirs

   |downloads_bioconductor-isomirs| |docker_bioconductor-isomirs|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.0.3-0, 1.0.1-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-degreport: >=1.24.0,<1.25.0
   :depends bioconductor-deseq2: >=1.28.0,<1.29.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-assertive.sets: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-broom: 
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-discriminer: 
   :depends r-dplyr: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isomirs

   and update with::

      conda update bioconductor-isomirs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isomirs:<tag>

   (see `bioconductor-isomirs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isomirs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isomirs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isomirs
   :alt:   (downloads)
.. |docker_bioconductor-isomirs| image:: https://quay.io/repository/biocontainers/bioconductor-isomirs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isomirs
.. _`bioconductor-isomirs/tags`: https://quay.io/repository/biocontainers/bioconductor-isomirs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isomirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isomirs/README.html