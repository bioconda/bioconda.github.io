:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isee'
.. highlight: bash

bioconductor-isee
=================

.. conda:recipe:: bioconductor-isee
   :replaces_section_title:
   :noindex:

   Interactive SummarizedExperiment Explorer

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/iSEE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-isee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isee/meta.yaml>`_

   Create an interactive Shiny\-based graphical user interface for exploring data stored in SummarizedExperiment objects\, including row\- and column\-level metadata. The interface supports transmission of selections between plots and tables\, code tracking\, interactive tours\, interactive or programmatic initialization\, preservation of app state\, and extensibility to new panel types via S4 classes. Special attention is given to single\-cell data in a SingleCellExperiment object with visualization of dimensionality reduction results.


.. conda:package:: bioconductor-isee

   |downloads_bioconductor-isee| |docker_bioconductor-isee|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.4-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-colourpicker: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-mgcv: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
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
   :target: https://anaconda.org/bioconda/bioconductor-isee
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