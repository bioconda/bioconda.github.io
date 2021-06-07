:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crossmeta'
.. highlight: bash

bioconductor-crossmeta
======================

.. conda:recipe:: bioconductor-crossmeta
   :replaces_section_title:
   :noindex:

   Cross Platform Meta\-Analysis of Microarray Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/crossmeta.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crossmeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crossmeta/meta.yaml>`_

   Implements cross\-platform and cross\-species meta\-analyses of Affymentrix\, Illumina\, and Agilent microarray data. This package automates common tasks such as downloading\, normalizing\, and annotating raw GEO data. The user then selects control and treatment samples in order to perform differential expression analyses for all comparisons. After analysing each contrast seperately\, the user can select tissue sources for each contrast and specify any tissue sources that should be grouped for the subsequent meta\-analyses.


.. conda:package:: bioconductor-crossmeta

   |downloads_bioconductor-crossmeta| |docker_bioconductor-crossmeta|

   :versions:
      
      

      ``1.18.0-0``,  ``1.15.0-1``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-affxparser: ``>=1.64.0,<1.65.0``
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-geoquery: ``>=2.60.0,<2.61.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-oligo: ``>=1.56.0,<1.57.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sva: ``>=3.40.0,<3.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: ``>=1.30.4``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dbi: ``>=1.0.0``
   :depends r-dt: ``>=0.2``
   :depends r-fdrtool: ``>=1.2.15``
   :depends r-matrixstats: ``>=0.51.0``
   :depends r-metama: ``>=3.1.2``
   :depends r-miniui: ``>=0.1.1``
   :depends r-rcolorbrewer: ``>=1.1.2``
   :depends r-rcurl: ``>=1.95.4.11``
   :depends r-reader: ``>=1.0.6``
   :depends r-readxl: ``>=1.3.1``
   :depends r-rsqlite: ``>=2.1.1``
   :depends r-shiny: ``>=1.0.0``
   :depends r-shinybs: ``>=0.61``
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-shinypanel: ``>=0.1.0``
   :depends r-shinywidgets: ``>=0.5.3``
   :depends r-statmod: ``>=1.4.34``
   :depends r-stringr: ``>=1.2.0``
   :depends r-tibble: 
   :depends r-xml: ``>=3.98.1.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crossmeta

   and update with::

      conda update bioconductor-crossmeta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crossmeta:<tag>

   (see `bioconductor-crossmeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crossmeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crossmeta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crossmeta
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