:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmap'
.. highlight: bash

bioconductor-scmap
==================

.. conda:recipe:: bioconductor-scmap
   :replaces_section_title:
   :noindex:

   A tool for unsupervised projection of single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/scmap.html
   :license: GPL-3
   :recipe: /`bioconductor-scmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmap/meta.yaml>`_

   Single\-cell RNA\-seq \(scRNA\-seq\) is widely used to investigate the composition of complex tissues since the technology allows researchers to define cell\-types using unsupervised clustering of the transcriptome. However\, due to differences in experimental methods and computational analyses\, it is often challenging to directly compare the cells identified in two different experiments. scmap is a method for projecting cells from a scRNA\-seq experiment on to the cell\-types or individual cells identified in a different experiment.


.. conda:package:: bioconductor-scmap

   |downloads_bioconductor-scmap| |docker_bioconductor-scmap|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-googlevis: 
   :depends r-matrixstats: 
   :depends r-proxy: 
   :depends r-randomforest: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmap

   and update with::

      conda update bioconductor-scmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmap:<tag>

   (see `bioconductor-scmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmap
   :alt:   (downloads)
.. |docker_bioconductor-scmap| image:: https://quay.io/repository/biocontainers/bioconductor-scmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmap
.. _`bioconductor-scmap/tags`: https://quay.io/repository/biocontainers/bioconductor-scmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmap/README.html