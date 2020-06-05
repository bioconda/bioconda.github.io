:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dapar'
.. highlight: bash

bioconductor-dapar
==================

.. conda:recipe:: bioconductor-dapar
   :replaces_section_title:
   :noindex:

   Tools for the Differential Analysis of Proteins Abundance with R

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DAPAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dapar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar/meta.yaml>`_

   This package contains a collection of functions for the visualisation and the statistical analysis of proteomic data.


.. conda:package:: bioconductor-dapar

   |downloads_bioconductor-dapar| |docker_bioconductor-dapar|

   :versions:
      
      

      ``1.20.2-0``,  ``1.18.1-0``,  ``1.16.7-0``,  ``1.14.4-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-clusterprofiler: ``>=3.16.0,<3.17.0``
   :depends bioconductor-dapardata: ``>=1.18.0,<1.19.0``
   :depends bioconductor-graph: ``>=1.66.0,<1.67.0``
   :depends bioconductor-impute: ``>=1.62.0,<1.63.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-msnbase: ``>=2.14.0,<2.15.0``
   :depends bioconductor-pcamethods: ``>=1.80.0,<1.81.0``
   :depends bioconductor-preprocesscore: ``>=1.50.0,<1.51.0``
   :depends bioconductor-siggenes: ``>=1.62.0,<1.63.0``
   :depends bioconductor-vsn: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cairo: 
   :depends r-cp4p: ``>=0.3.5``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-factominer: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-highcharter: ``>=0.7.0``
   :depends r-igraph: 
   :depends r-imp4p: ``>=0.8``
   :depends r-knitr: 
   :depends r-lattice: 
   :depends r-lme4: 
   :depends r-matrix: 
   :depends r-norm: 
   :depends r-openxlsx: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
   :depends r-tmvtnorm: 
   :depends r-vioplot: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dapar

   and update with::

      conda update bioconductor-dapar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dapar:<tag>

   (see `bioconductor-dapar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dapar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dapar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dapar
   :alt:   (downloads)
.. |docker_bioconductor-dapar| image:: https://quay.io/repository/biocontainers/bioconductor-dapar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dapar
.. _`bioconductor-dapar/tags`: https://quay.io/repository/biocontainers/bioconductor-dapar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dapar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dapar/README.html