.. title:: Package Recipe 'bioconductor-dapar'
.. highlight: bash


bioconductor-dapar
==================

.. conda:recipe:: bioconductor-dapar
   :replaces_section_title:

   This package contains a collection of functions for the visualisation and the statistical analysis of proteomic data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DAPAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dapar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar/meta.yaml>`_

   


.. conda:package:: bioconductor-dapar

   |downloads_bioconductor-dapar| |docker_bioconductor-dapar|

   :versions: 1.14.4

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-dapardata` >=1.12.0,<1.13.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-siggenes` >=1.56.0,<1.57.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cairo`  :conda:package:`r-cp4p` >=0.3.5 :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-factoextra`  :conda:package:`r-factominer`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-highcharter` >=0.5.0 :conda:package:`r-imp4p` >=0.7 :conda:package:`r-knitr`  :conda:package:`r-lattice`  :conda:package:`r-lme4`  :conda:package:`r-matrix`  :conda:package:`r-norm`  :conda:package:`r-openxlsx`  :conda:package:`r-png`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-readxl`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-tidyr`  :conda:package:`r-tidyverse`  :conda:package:`r-tmvtnorm`  :conda:package:`r-vioplot`  

   :required~by: |required_by_bioconductor-dapar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dapar

   and update with::

      conda update bioconductor-dapar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dapar


.. |required_by_bioconductor-dapar| conda:required_by:: bioconductor-dapar
.. |downloads_bioconductor-dapar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dapar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dapar| image:: https://quay.io/repository/biocontainers/bioconductor-dapar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dapar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dapar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dapar/README.html

