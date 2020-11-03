:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adamgui'
.. highlight: bash

bioconductor-adamgui
====================

.. conda:recipe:: bioconductor-adamgui
   :replaces_section_title:
   :noindex:

   Activity and Diversity Analysis Module Graphical User Interface

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ADAMgui.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adamgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adamgui/meta.yaml>`_

   ADAMgui is a Graphical User Interface for the ADAM package. The ADAMgui package provides 2 shiny\-based applications that allows the user to study the output of the ADAM package files through different plots. It\'s possible\, for example\, to choose a specific GFAG and observe the gene expression behavior with the plots created with the GFAGtargetUi function. Features such as differential expression and foldchange can be easily seen with aid of the plots made with GFAGpathUi function.


.. conda:package:: bioconductor-adamgui

   |downloads_bioconductor-adamgui| |docker_bioconductor-adamgui|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-adam: ``>=1.6.0,<1.7.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colorramps: ``>=2.3``
   :depends r-data.table: ``>=1.11.4``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-dt: ``>=0.4``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggpubr: ``>=0.1.8``
   :depends r-ggrepel: ``>=0.8.0``
   :depends r-ggsignif: ``>=0.4.0``
   :depends r-gridextra: ``>=2.3``
   :depends r-knitr: 
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-shiny: ``>=1.1.0``
   :depends r-shinyjs: ``>=1.0``
   :depends r-stringi: ``>=1.2.4``
   :depends r-stringr: ``>=1.3.1``
   :depends r-testthat: 
   :depends r-varhandle: ``>=2.0.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adamgui

   and update with::

      conda update bioconductor-adamgui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adamgui:<tag>

   (see `bioconductor-adamgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adamgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adamgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adamgui
   :alt:   (downloads)
.. |docker_bioconductor-adamgui| image:: https://quay.io/repository/biocontainers/bioconductor-adamgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adamgui
.. _`bioconductor-adamgui/tags`: https://quay.io/repository/biocontainers/bioconductor-adamgui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adamgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adamgui/README.html