:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgabiolinksgui'
.. highlight: bash

bioconductor-tcgabiolinksgui
============================

.. conda:recipe:: bioconductor-tcgabiolinksgui
   :replaces_section_title:
   :noindex:

   \"TCGAbiolinksGUI\: A Graphical User Interface to analyze cancer molecular and clinical data\"

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TCGAbiolinksGUI.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tcgabiolinksgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui/meta.yaml>`_

   \"TCGAbiolinksGUI\: A Graphical User Interface to analyze cancer molecular and clinical data. A demo version of GUI is found in https\:\/\/tcgabiolinksgui.shinyapps.io\/tcgabiolinks\/\"


.. conda:package:: bioconductor-tcgabiolinksgui

   |downloads_bioconductor-tcgabiolinksgui| |docker_bioconductor-tcgabiolinksgui|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=3.18.0,<3.19.0``
   :depends bioconductor-elmer: ``>=2.14.0,<2.15.0``
   :depends bioconductor-maftools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-pathview: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sesame: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-tcgabiolinks: ``>=2.18.0,<2.19.0``
   :depends bioconductor-tcgabiolinksgui.data: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-caret: 
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-downloader: ``>=0.4``
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-ggrepel: 
   :depends r-plotly: 
   :depends r-readr: 
   :depends r-shiny: ``>=0.14.1``
   :depends r-shinybs: ``>=0.61``
   :depends r-shinydashboard: ``>=0.5.3``
   :depends r-shinyfiles: ``>=0.6.2``
   :depends r-shinyjs: ``>=0.7``
   :depends r-stringr: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgabiolinksgui

   and update with::

      conda update bioconductor-tcgabiolinksgui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgabiolinksgui:<tag>

   (see `bioconductor-tcgabiolinksgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgabiolinksgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinksgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgabiolinksgui
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinksgui| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui
.. _`bioconductor-tcgabiolinksgui/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui/README.html