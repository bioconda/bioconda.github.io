:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiotaprocess'
.. highlight: bash

bioconductor-microbiotaprocess
==============================

.. conda:recipe:: bioconductor-microbiotaprocess
   :replaces_section_title:
   :noindex:

   an R package for analysis\, visualization and biomarker discovery of microbiome

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MicrobiotaProcess.html
   :license: GPL (>= 3.0)
   :recipe: /`bioconductor-microbiotaprocess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess/meta.yaml>`_

   MicrobiotaProcess is an R package for analysis\, visualization and biomarker discovery of microbial datasets. It supports calculating alpha index and provides functions to visualize rarefaction curves. Moreover\, it also supports visualizing the abundance of taxonomy of samples. And It also provides functions to perform the PCA\, PCoA and hierarchical cluster analysis. In addition\, MicrobiotaProcess also provides a method for the biomarker discovery of metagenome or other datasets.


.. conda:package:: bioconductor-microbiotaprocess

   |downloads_bioconductor-microbiotaprocess| |docker_bioconductor-microbiotaprocess|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-ggtree: ``>=2.4.0,<2.5.0``
   :depends bioconductor-phyloseq: ``>=1.34.0,<1.35.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-coin: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggsignif: 
   :depends r-ggstar: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-rmisc: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidytree: 
   :depends r-vegan: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiotaprocess

   and update with::

      conda update bioconductor-microbiotaprocess

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiotaprocess:<tag>

   (see `bioconductor-microbiotaprocess/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiotaprocess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiotaprocess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiotaprocess
   :alt:   (downloads)
.. |docker_bioconductor-microbiotaprocess| image:: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess
.. _`bioconductor-microbiotaprocess/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html