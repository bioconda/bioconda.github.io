:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdblfinder'
.. highlight: bash

bioconductor-scdblfinder
========================

.. conda:recipe:: bioconductor-scdblfinder
   :replaces_section_title:

   scDblFinder

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/scDblFinder.html
   :license: GPL-3
   :recipe: /`bioconductor-scdblfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder/meta.yaml>`_

   Efficient identification of doublets in single\-cell RNAseq directly from counts using overclustering\-based generation of artifical doublets.


.. conda:package:: bioconductor-scdblfinder

   |downloads_bioconductor-scdblfinder| |docker_bioconductor-scdblfinder|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-scater: >=1.14.0,<1.15.0
   :depends bioconductor-scran: >=1.14.0,<1.15.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scdblfinder

   and update with::

      conda update bioconductor-scdblfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdblfinder:<tag>

   (see `bioconductor-scdblfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdblfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdblfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdblfinder
   :alt:   (downloads)
.. |docker_bioconductor-scdblfinder| image:: https://quay.io/repository/biocontainers/bioconductor-scdblfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdblfinder
.. _`bioconductor-scdblfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-scdblfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html