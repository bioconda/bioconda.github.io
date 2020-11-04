:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mineica'
.. highlight: bash

bioconductor-mineica
====================

.. conda:recipe:: bioconductor-mineica
   :replaces_section_title:
   :noindex:

   Analysis of an ICA decomposition obtained on genomics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MineICA.html
   :license: GPL-2
   :recipe: /`bioconductor-mineica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica/meta.yaml>`_
   :links: biotools: :biotools:`mineica`, doi: :doi:`10.1155/2014/213656`

   The goal of MineICA is to perform Independent Component Analysis \(ICA\) on multiple transcriptome datasets\, integrating additional data \(e.g molecular\, clinical and pathological\). This Integrative ICA helps the biological interpretation of the components by studying their association with variables \(e.g sample annotations\) and gene sets\, and enables the comparison of components from different datasets using correlation\-based graph.


.. conda:package:: bioconductor-mineica

   |downloads_bioconductor-mineica| |docker_bioconductor-mineica|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-gostats: ``>=2.56.0,<2.57.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-lumi: ``>=2.42.0,<2.43.0``
   :depends bioconductor-lumihumanall.db: ``>=1.22.0,<1.23.0``
   :depends bioconductor-marray: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rgraphviz: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-colorspace: 
   :depends r-fastica: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-jade: 
   :depends r-mclust: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mineica

   and update with::

      conda update bioconductor-mineica

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mineica:<tag>

   (see `bioconductor-mineica/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mineica| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mineica.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mineica
   :alt:   (downloads)
.. |docker_bioconductor-mineica| image:: https://quay.io/repository/biocontainers/bioconductor-mineica/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mineica
.. _`bioconductor-mineica/tags`: https://quay.io/repository/biocontainers/bioconductor-mineica?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mineica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mineica/README.html