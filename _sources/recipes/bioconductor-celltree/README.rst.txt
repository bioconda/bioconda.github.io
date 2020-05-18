:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celltree'
.. highlight: bash

bioconductor-celltree
=====================

.. conda:recipe:: bioconductor-celltree
   :replaces_section_title:

   Inference and visualisation of Single\-Cell RNA\-seq data as a hierarchical tree structure

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cellTree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltree/meta.yaml>`_

   This packages computes a Latent Dirichlet Allocation \(LDA\) model of single\-cell RNA\-seq data and builds a compact tree modelling the relationship between individual cells over time or space.


.. conda:package:: bioconductor-celltree

   |downloads_bioconductor-celltree| |docker_bioconductor-celltree|

   :versions: 1.17.0-0, 1.16.0-0, 1.14.0-1, 1.12.0-0
   
   :depends bioconductor-topgo: >=2.40.0,<2.41.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-maptpx: 
   :depends r-slam: 
   :depends r-topicmodels: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celltree

   and update with::

      conda update bioconductor-celltree

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celltree:<tag>

   (see `bioconductor-celltree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celltree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celltree
   :alt:   (downloads)
.. |docker_bioconductor-celltree| image:: https://quay.io/repository/biocontainers/bioconductor-celltree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltree
.. _`bioconductor-celltree/tags`: https://quay.io/repository/biocontainers/bioconductor-celltree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltree/README.html