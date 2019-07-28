:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doscheda'
.. highlight: bash

bioconductor-doscheda
=====================

.. conda:recipe:: bioconductor-doscheda
   :replaces_section_title:

   Doscheda focuses on quantitative chemoproteomics used to determine protein interaction profiles of small molecules from whole cell or tissue lysates using Mass Spectrometry data. The package provides a shiny application to run the pipeline\, several visualisations and a downloadable report of an experiment.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Doscheda.html
   :license: GPL-3
   :recipe: /`bioconductor-doscheda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda/meta.yaml>`_

   


.. conda:package:: bioconductor-doscheda

   |downloads_bioconductor-doscheda| |docker_bioconductor-doscheda|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-affy: >=1.62.0,<1.63.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-vsn: >=3.52.0,<3.53.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-calibrate: 
   :depends r-corrgram: 
   :depends r-d3heatmap: 
   :depends r-drc: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrixstats: 
   :depends r-prodlim: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doscheda

   and update with::

      conda update bioconductor-doscheda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doscheda:<tag>

   (see `bioconductor-doscheda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doscheda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doscheda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doscheda
   :alt:   (downloads)
.. |docker_bioconductor-doscheda| image:: https://quay.io/repository/biocontainers/bioconductor-doscheda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doscheda
.. _`bioconductor-doscheda/tags`: https://quay.io/repository/biocontainers/bioconductor-doscheda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doscheda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doscheda/README.html