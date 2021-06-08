:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytotree'
.. highlight: bash

bioconductor-cytotree
=====================

.. conda:recipe:: bioconductor-cytotree
   :replaces_section_title:
   :noindex:

   A Toolkit for Flow And Mass Cytometry Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CytoTree.html
   :license: GPL-3
   :recipe: /`bioconductor-cytotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytotree/meta.yaml>`_

   A trajectory inference toolkit for flow and mass cytometry data. CytoTree is a valuable tool to build a tree\-shaped trajectory using flow and mass cytometry data. The application of CytoTree ranges from clustering and dimensionality reduction to trajectory reconstruction and pseudotime estimation. It offers complete analyzing workflow for flow and mass cytometry data.


.. conda:package:: bioconductor-cytotree

   |downloads_bioconductor-cytotree| |docker_bioconductor-cytotree|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocneighbors: ``>=1.8.0,<1.9.0``
   :depends bioconductor-destiny: ``>=3.4.0,<3.5.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowsom: ``>=1.22.0,<1.23.0``
   :depends bioconductor-flowutils: ``>=1.54.0,<1.55.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-ggplot2: 
   :depends r-gmodels: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-pheatmap: 
   :depends r-prettydoc: 
   :depends r-rann: ``>=2.5``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rtsne: 
   :depends r-scatterpie: 
   :depends r-scatterplot3d: 
   :depends r-stringr: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytotree

   and update with::

      conda update bioconductor-cytotree

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytotree:<tag>

   (see `bioconductor-cytotree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytotree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytotree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytotree
   :alt:   (downloads)
.. |docker_bioconductor-cytotree| image:: https://quay.io/repository/biocontainers/bioconductor-cytotree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytotree
.. _`bioconductor-cytotree/tags`: https://quay.io/repository/biocontainers/bioconductor-cytotree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytotree/README.html