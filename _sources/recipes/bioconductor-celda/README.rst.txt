:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celda'
.. highlight: bash

bioconductor-celda
==================

.. conda:recipe:: bioconductor-celda
   :replaces_section_title:
   :noindex:

   CEllular Latent Dirichlet Allocation

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/celda.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-celda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda/meta.yaml>`_

   Celda is a suite of Bayesian hierarchical models for clustering single\-cell RNA\-sequencing \(scRNA\-seq\) data. It is able to perform \"bi\-clustering\" and simultaneously cluster genes into gene modules and cells into cell subpopulations. It also contains DecontX\, a novel Bayesian method to computationally estimate and remove RNA contamination in individual cells without empty droplet information. A variety of scRNA\-seq data visualization functions is also included.


.. conda:package:: bioconductor-celda

   |downloads_bioconductor-celda| |docker_bioconductor-celda|

   :versions:
      
      

      ``1.8.1-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.4.5-0``,  ``1.2.0-0``,  ``1.0.4-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scran: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-dbscan: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-enrichr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gtable: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mcmcprecision: 
   :depends r-multipanelfigure: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-uwot: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celda

   and update with::

      conda update bioconductor-celda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celda:<tag>

   (see `bioconductor-celda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celda
   :alt:   (downloads)
.. |docker_bioconductor-celda| image:: https://quay.io/repository/biocontainers/bioconductor-celda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celda
.. _`bioconductor-celda/tags`: https://quay.io/repository/biocontainers/bioconductor-celda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celda/README.html