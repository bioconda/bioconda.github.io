:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowspy'
.. highlight: bash

bioconductor-flowspy
====================

.. conda:recipe:: bioconductor-flowspy
   :replaces_section_title:

   A Toolkit for Flow And Mass Cytometry Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/flowSpy.html
   :license: GPL-3
   :recipe: /`bioconductor-flowspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowspy/meta.yaml>`_

   A trajectory inference and visualization toolkit for flow and mass cytometry data. flowSpy offers complete analyzing workflow for flow and mass cytometry data. flowSpy can be a valuable tool for application ranging from clustering and dimensionality reduction to trajectory reconstruction and pseudotime estimation for flow and mass cytometry data.


.. conda:package:: bioconductor-flowspy

   |downloads_bioconductor-flowspy| |docker_bioconductor-flowspy|

   :versions: 1.0.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocneighbors: >=1.4.0,<1.5.0
   :depends bioconductor-destiny: >=2.15.0,<2.16.0
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends bioconductor-flowsom: >=1.18.0,<1.19.0
   :depends bioconductor-flowutils: >=1.50.0,<1.51.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-sva: >=3.34.0,<3.35.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-ggplot2: 
   :depends r-gmodels: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-pheatmap: 
   :depends r-prettydoc: 
   :depends r-rann: >=2.5
   :depends r-rcpp: >=0.12.0
   :depends r-rtsne: 
   :depends r-scatterpie: 
   :depends r-scatterplot3d: 
   :depends r-stringr: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowspy

   and update with::

      conda update bioconductor-flowspy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowspy:<tag>

   (see `bioconductor-flowspy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowspy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowspy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowspy
   :alt:   (downloads)
.. |docker_bioconductor-flowspy| image:: https://quay.io/repository/biocontainers/bioconductor-flowspy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowspy
.. _`bioconductor-flowspy/tags`: https://quay.io/repository/biocontainers/bioconductor-flowspy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowspy/README.html