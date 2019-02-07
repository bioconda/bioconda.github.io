.. title:: Package Recipe 'bioconductor-celltree'
.. highlight: bash


bioconductor-celltree
=====================

.. conda:recipe:: bioconductor-celltree
   :replaces_section_title:

   This packages computes a Latent Dirichlet Allocation \(LDA\) model of single\-cell RNA\-seq data and builds a compact tree modelling the relationship between individual cells over time or space.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cellTree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltree/meta.yaml>`_

   


.. conda:package:: bioconductor-celltree

   |downloads_bioconductor-celltree| |docker_bioconductor-celltree|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-igraph`  :conda:package:`r-maptpx`  :conda:package:`r-slam`  :conda:package:`r-topicmodels`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-celltree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celltree

   and update with::

      conda update bioconductor-celltree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-celltree


.. |required_by_bioconductor-celltree| conda:required_by:: bioconductor-celltree
.. |downloads_bioconductor-celltree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltree.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-celltree| image:: https://quay.io/repository/biocontainers/bioconductor-celltree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltree/README.html

