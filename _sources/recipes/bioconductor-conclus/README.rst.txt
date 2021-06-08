:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-conclus'
.. highlight: bash

bioconductor-conclus
====================

.. conda:recipe:: bioconductor-conclus
   :replaces_section_title:
   :noindex:

   ScRNA\-seq Workflow CONCLUS \- From CONsensus CLUSters To A Meaningful CONCLUSion

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/conclus.html
   :license: GPL-3
   :recipe: /`bioconductor-conclus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conclus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conclus/meta.yaml>`_

   CONCLUS is a tool for robust clustering and positive marker features selection of single\-cell RNA\-seq \(sc\-RNA\-seq\) datasets. It takes advantage of a consensus clustering approach that greatly simplify sc\-RNA\-seq data analysis for the user. Of note\, CONCLUS does not cover the preprocessing steps of sequencing files obtained following next\-generation sequencing. CONCLUS is organized into the following steps\: Generation of multiple t\-SNE plots with a range of parameters including different selection of genes extracted from PCA. Use the Density\-based spatial clustering of applications with noise \(DBSCAN\) algorithm for idenfication of clusters in each generated t\-SNE plot. All DBSCAN results are combined into a cell similarity matrix. The cell similarity matrix is used to define \"CONSENSUS\" clusters conserved accross the previously defined clustering solutions. Identify marker genes for each concensus cluster.


.. conda:package:: bioconductor-conclus

   |downloads_bioconductor-conclus| |docker_bioconductor-conclus|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-clusterprofiler: ``>=4.0.0,<4.1.0``
   :depends bioconductor-geoquery: ``>=2.60.0,<2.61.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scran: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbscan: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-pheatmap: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-conclus

   and update with::

      conda update bioconductor-conclus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-conclus:<tag>

   (see `bioconductor-conclus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-conclus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-conclus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-conclus
   :alt:   (downloads)
.. |docker_bioconductor-conclus| image:: https://quay.io/repository/biocontainers/bioconductor-conclus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-conclus
.. _`bioconductor-conclus/tags`: https://quay.io/repository/biocontainers/bioconductor-conclus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-conclus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-conclus/README.html