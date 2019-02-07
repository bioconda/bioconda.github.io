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

   :versions: 1.2.0, 1.0.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-colourpicker`  :conda:package:`r-cowplot`  :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-mgcv`  :conda:package:`r-rentrez`  :conda:package:`r-reshape2`  :conda:package:`r-rintrojs`  :conda:package:`r-scales`  :conda:package:`r-shiny`  :conda:package:`r-shinyace`  :conda:package:`r-shinydashboard`  :conda:package:`r-shinyjs`  :conda:package:`r-vipor`  :conda:package:`r-viridislite`  

   :required~by: |required_by_bioconductor-isee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isee

   and update with::

      conda update bioconductor-isee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-isee


.. |required_by_bioconductor-isee| conda:required_by:: bioconductor-isee
.. |downloads_bioconductor-isee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isee.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isee| image:: https://quay.io/repository/biocontainers/bioconductor-isee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isee/README.html

