:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airpart'
.. highlight: bash

bioconductor-airpart
====================

.. conda:recipe:: bioconductor-airpart
   :replaces_section_title:
   :noindex:

   Differential cell\-type\-specific allelic imbalance

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/airpart.html
   :license: GPL-2
   :recipe: /`bioconductor-airpart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart/meta.yaml>`_

   Airpart identifies sets of genes displaying differential cell\-type\-specific allelic imbalance across cell types or states\, utilizing single\-cell allelic counts. It makes use of a generalized fused lasso with binomial observations of allelic counts to partition cell types by their allelic imbalance. Alternatively\, a nonparametric method for partitioning cell types is offered. The package includes a number of visualizations and quality control functions for examining single cell allelic imbalance datasets.


.. conda:package:: bioconductor-airpart

   |downloads_bioconductor-airpart| |docker_bioconductor-airpart|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-apeglm: ``>=1.14.0,<1.15.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clue: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-emdbook: 
   :depends r-forestplot: 
   :depends r-ggplot2: 
   :depends r-lpsolve: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-smurf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-airpart

   and update with::

      conda update bioconductor-airpart

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-airpart:<tag>

   (see `bioconductor-airpart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-airpart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airpart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airpart
   :alt:   (downloads)
.. |docker_bioconductor-airpart| image:: https://quay.io/repository/biocontainers/bioconductor-airpart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airpart
.. _`bioconductor-airpart/tags`: https://quay.io/repository/biocontainers/bioconductor-airpart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airpart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airpart/README.html