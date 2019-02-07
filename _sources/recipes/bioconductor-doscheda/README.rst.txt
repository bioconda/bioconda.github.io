.. title:: Package Recipe 'bioconductor-doscheda'
.. highlight: bash


bioconductor-doscheda
=====================

.. conda:recipe:: bioconductor-doscheda
   :replaces_section_title:

   Doscheda focuses on quantitative chemoproteomics used to determine protein interaction profiles of small molecules from whole cell or tissue lysates using Mass Spectrometry data. The package provides a shiny application to run the pipeline\, several visualisations and a downloadable report of an experiment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Doscheda.html
   :license: GPL-3
   :recipe: /`bioconductor-doscheda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda/meta.yaml>`_

   


.. conda:package:: bioconductor-doscheda

   |downloads_bioconductor-doscheda| |docker_bioconductor-doscheda|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-calibrate`  :conda:package:`r-corrgram`  :conda:package:`r-d3heatmap`  :conda:package:`r-drc`  :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-matrixstats`  :conda:package:`r-prodlim`  :conda:package:`r-readxl`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-shinydashboard`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-doscheda|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-doscheda

   and update with::

      conda update bioconductor-doscheda

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-doscheda


.. |required_by_bioconductor-doscheda| conda:required_by:: bioconductor-doscheda
.. |downloads_bioconductor-doscheda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doscheda.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-doscheda| image:: https://quay.io/repository/biocontainers/bioconductor-doscheda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doscheda







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doscheda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doscheda/README.html

