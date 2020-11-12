:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sangeranalyser'
.. highlight: bash

bioconductor-sangeranalyser
===========================

.. conda:recipe:: bioconductor-sangeranalyser
   :replaces_section_title:
   :noindex:

   sangeranalyseR\: a suite of functions for the analysis of Sanger sequence data in R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sangeranalyseR.html
   :license: GPL-2
   :recipe: /`bioconductor-sangeranalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser/meta.yaml>`_

   This package builds on sangerseqR to allow users to create contigs from collections of Sanger sequencing reads. It provides a wide range of options for a number of commonly\-performed actions including read trimming\, detecting secondary peaks\, and detecting indels using a reference sequence. All parameters can be adjusted interactively either in R or in the associated Shiny applications. There is extensive online documentation\, and the package can outputs detailed HTML reports\, including chromatograms.


.. conda:package:: bioconductor-sangeranalyser

   |downloads_bioconductor-sangeranalyser| |docker_bioconductor-sangeranalyser|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-decipher: ``>=2.18.0,<2.19.0``
   :depends bioconductor-sangerseqr: ``>=1.26.0,<1.27.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-excelr: 
   :depends r-ggdendro: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-logger: 
   :depends r-openxlsx: 
   :depends r-phangorn: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-zeallot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sangeranalyser

   and update with::

      conda update bioconductor-sangeranalyser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sangeranalyser:<tag>

   (see `bioconductor-sangeranalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sangeranalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sangeranalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sangeranalyser
   :alt:   (downloads)
.. |docker_bioconductor-sangeranalyser| image:: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser
.. _`bioconductor-sangeranalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html