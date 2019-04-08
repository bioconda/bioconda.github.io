:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isee'
.. highlight: bash

bioconductor-isee
=================

.. conda:recipe:: bioconductor-isee
   :replaces_section_title:

   Provides functions for creating an interactive Shiny\-based graphical user interface for exploring data stored in SummarizedExperiment objects\, including row\- and column\-level metadata. Particular attention is given to single\-cell data in a SingleCellExperiment object with visualization of dimensionality reduction results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iSEE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee/meta.yaml>`_

   


.. conda:package:: bioconductor-isee

   |downloads_bioconductor-isee| |docker_bioconductor-isee|

   :versions: 1.2.0-0, 1.0.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-colourpicker: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-mgcv: 
   :depends r-rentrez: 
   :depends r-reshape2: 
   :depends r-rintrojs: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-vipor: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isee

   and update with::

      conda update bioconductor-isee

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isee:<tag>

   (see `bioconductor-isee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isee.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isee| image:: https://quay.io/repository/biocontainers/bioconductor-isee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isee
.. _`bioconductor-isee/tags`: https://quay.io/repository/biocontainers/bioconductor-isee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isee/README.html