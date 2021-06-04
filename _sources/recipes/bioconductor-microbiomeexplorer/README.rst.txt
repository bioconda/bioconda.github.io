:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeexplorer'
.. highlight: bash

bioconductor-microbiomeexplorer
===============================

.. conda:recipe:: bioconductor-microbiomeexplorer
   :replaces_section_title:
   :noindex:

   Microbiome Exploration App

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/microbiomeExplorer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomeexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer/meta.yaml>`_

   The MicrobiomeExplorer R package is designed to facilitate the analysis and visualization of marker\-gene survey feature data. It allows a user to perform and visualize typical microbiome analytical workflows either through the command line or an interactive Shiny application included with the package. In addition to applying common analytical workflows the application enables automated analysis report generation.


.. conda:package:: bioconductor-microbiomeexplorer

   |downloads_bioconductor-microbiomeexplorer| |docker_bioconductor-microbiomeexplorer|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biomformat: ``>=1.20.0,<1.21.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-metagenomeseq: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-broom: 
   :depends r-car: 
   :depends r-dplyr: 
   :depends r-dt: ``>=0.12.0``
   :depends r-forcats: 
   :depends r-heatmaply: 
   :depends r-knitr: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-plotly: ``>=4.9.1``
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: ``>=1.9.0``
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiomeexplorer

   and update with::

      conda update bioconductor-microbiomeexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomeexplorer:<tag>

   (see `bioconductor-microbiomeexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomeexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeexplorer
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer
.. _`bioconductor-microbiomeexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html