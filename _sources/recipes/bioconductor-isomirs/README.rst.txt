:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isomirs'
.. highlight: bash

bioconductor-isomirs
====================

.. conda:recipe:: bioconductor-isomirs
   :replaces_section_title:

   Characterization of miRNAs and isomiRs\, clustering and differential expression.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/isomiRs.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isomirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isomirs/meta.yaml>`_
   :links: biotools: :biotools:`isomirs`, doi: :doi:`10.1093/bioinformatics/btv632`

   


.. conda:package:: bioconductor-isomirs

   |downloads_bioconductor-isomirs| |docker_bioconductor-isomirs|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.0.3-0, 1.0.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-degreport: >=1.18.0,<1.19.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-assertive.sets: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
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