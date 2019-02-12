:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crossmeta'
.. highlight: bash

bioconductor-crossmeta
======================

.. conda:recipe:: bioconductor-crossmeta
   :replaces_section_title:

   Implements cross\-platform and cross\-species meta\-analyses of Affymentrix\, Illumina\, and Agilent microarray data. This package automates common tasks such as downloading\, normalizing\, and annotating raw GEO data. The user then selects control and treatment samples in order to perform differential expression\/pathway analyses for all comparisons. After analysing each contrast seperately\, the user can select tissue sources for each contrast and specify any tissue sources that should be grouped for the subsequent meta\-analyses. Finally\, effect size and pathway meta\-analyses can proceed and the results graphically explored.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/crossmeta.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crossmeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta/meta.yaml>`_

   


.. conda:package:: bioconductor-crossmeta

   |downloads_bioconductor-crossmeta| |docker_bioconductor-crossmeta|

   :versions: 1.8.0-0
   
   :depends bioconductor-affxparser: >=1.54.0,<1.55.0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-ccmap: >=1.8.0,<1.9.0
   
   :depends bioconductor-geoquery: >=2.50.0,<2.51.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   
   :depends bioconductor-sva: >=3.30.0,<3.31.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biocmanager: >=1.24.0
   
   :depends r-data.table: >=1.10.4
   
   :depends r-doparallel: >=1.0.10
   
   :depends r-dorng: >=1.6
   
   :depends r-dt: >=0.2
   
   :depends r-fdrtool: >=1.2.15
   
   :depends r-foreach: >=1.4.3
   
   :depends r-ggplot2: >=2.2.1
   
   :depends r-matrixstats: >=0.51.0
   
   :depends r-metama: >=3.1.2
   
   :depends r-metap: >=0.8
   
   :depends r-miniui: >=0.1.1
   
   :depends r-pander: >=0.6.0
   
   :depends r-plotly: >=4.5.6
   
   :depends r-rcolorbrewer: >=1.1.2
   
   :depends r-rdrop2: >=0.7.0
   
   :depends r-reshape: >=0.8.6
   
   :depends r-shiny: >=1.0.0
   
   :depends r-stringr: >=1.2.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crossmeta

   and update with::

      conda update bioconductor-crossmeta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-crossmeta:<tag>

   (see `bioconductor-crossmeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crossmeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crossmeta.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crossmeta| image:: https://quay.io/repository/biocontainers/bioconductor-crossmeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crossmeta
.. _`bioconductor-crossmeta/tags`: https://quay.io/repository/biocontainers/bioconductor-crossmeta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crossmeta/README.html