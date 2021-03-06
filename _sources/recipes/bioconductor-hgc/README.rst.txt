:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgc'
.. highlight: bash

bioconductor-hgc
================

.. conda:recipe:: bioconductor-hgc
   :replaces_section_title:
   :noindex:

   A fast hierarchical graph\-based clustering method

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/HGC.html
   :license: GPL-3
   :recipe: /`bioconductor-hgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgc/meta.yaml>`_

   \`HGC\` \(short for Hierarchical Graph\-based Clustering\) is a R package for conducting hierarchical clustering on large\-scale single\-cell RNA\-seq \(scRNA\-seq\) data. The key idea is to construct a dendrogram of cells on their shared nearest neighbor \(SNN\) graph. \`HGC\` provides functions for building cell graphs and for conducting hierarchical clustering on the graph.


.. conda:package:: bioconductor-hgc

   |downloads_bioconductor-hgc| |docker_bioconductor-hgc|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-patchwork: 
   :depends r-rann: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcppeigen: ``>=0.3.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgc

   and update with::

      conda update bioconductor-hgc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgc:<tag>

   (see `bioconductor-hgc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgc
   :alt:   (downloads)
.. |docker_bioconductor-hgc| image:: https://quay.io/repository/biocontainers/bioconductor-hgc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgc
.. _`bioconductor-hgc/tags`: https://quay.io/repository/biocontainers/bioconductor-hgc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgc/README.html