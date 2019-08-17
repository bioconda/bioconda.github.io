:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scater'
.. highlight: bash

bioconductor-scater
===================

.. conda:recipe:: bioconductor-scater
   :replaces_section_title:

   A collection of tools for doing various analyses of single\-cell RNA\-seq gene expression data\, with a focus on quality control and visualization.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/scater.html
   :license: GPL-3
   :recipe: /`bioconductor-scater <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater/meta.yaml>`_
   :links: biotools: :biotools:`scater`

   


.. conda:package:: bioconductor-scater

   |downloads_bioconductor-scater| |docker_bioconductor-scater|

   :versions: 1.12.2-0, 1.10.1-0, 1.10.0-0, 1.8.4-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-beachmat: >=2.0.0,<2.1.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocneighbors: >=1.2.0,<1.3.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-biocsingular: >=1.0.0,<1.1.0
   :depends bioconductor-delayedarray: >=0.10.0,<0.11.0
   :depends bioconductor-delayedmatrixstats: >=1.6.0,<1.7.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scater

   and update with::

      conda update bioconductor-scater

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scater:<tag>

   (see `bioconductor-scater/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scater| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scater.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scater
   :alt:   (downloads)
.. |docker_bioconductor-scater| image:: https://quay.io/repository/biocontainers/bioconductor-scater/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scater
.. _`bioconductor-scater/tags`: https://quay.io/repository/biocontainers/bioconductor-scater?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scater/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scater/README.html