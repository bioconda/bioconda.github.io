:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcatools'
.. highlight: bash

bioconductor-pcatools
=====================

.. conda:recipe:: bioconductor-pcatools
   :replaces_section_title:

   Principal Components Analysis \(PCA\) is a very powerful technique that has wide applicability in data science\, bioinformatics\, and further afield. It was initially developed to analyse large volumes of data in order to tease out the differences\/relationships between the logical entities being analysed. It extracts the fundamental structure of the data without the need to build any model to represent it. This \'summary\' of the data is arrived at through a process of reduction that can transform the large number of variables into a lesser number that are uncorrelated\, i.e.\, the principal components\, whilst at the same time being capable of easy interpretation on the original data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PCAtools.html
   :license: GPL-3
   :recipe: /`bioconductor-pcatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcatools/meta.yaml>`_

   


.. conda:package:: bioconductor-pcatools

   |downloads_bioconductor-pcatools| |docker_bioconductor-pcatools|

   :versions: 1.2.0-0, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-beachmat: >=2.2.0,<2.3.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biocsingular: >=1.2.0,<1.3.0
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends bioconductor-delayedmatrixstats: >=1.8.0,<1.9.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: 
   :depends r-cowplot: 
   :depends r-dqrng: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lattice: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcatools

   and update with::

      conda update bioconductor-pcatools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcatools:<tag>

   (see `bioconductor-pcatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcatools
   :alt:   (downloads)
.. |docker_bioconductor-pcatools| image:: https://quay.io/repository/biocontainers/bioconductor-pcatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcatools
.. _`bioconductor-pcatools/tags`: https://quay.io/repository/biocontainers/bioconductor-pcatools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcatools/README.html