.. title:: Package Recipe 'bioconductor-levi'
.. highlight: bash


bioconductor-levi
=================

.. conda:recipe:: bioconductor-levi
   :replaces_section_title:

   The tool integrates data from biological networks with transcriptomes\, displaying a heatmap with surface curves to evidence the altered regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/levi.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-levi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi/meta.yaml>`_

   


.. conda:package:: bioconductor-levi

   |downloads_bioconductor-levi| |docker_bioconductor-levi|

   :versions: 1.0.0

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-colorspace` >=1.3-2 :conda:package:`r-dplyr` >=0.7.4 :conda:package:`r-dt` >=0.4 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-httr` >=1.3.1 :conda:package:`r-igraph` >=1.2.1 :conda:package:`r-knitr`  :conda:package:`r-rcolorbrewer` >=1.1-2 :conda:package:`r-rcpp` >=0.12.18 :conda:package:`r-reshape2` >=1.4.3 :conda:package:`r-shiny` >=1.0.5 :conda:package:`r-shinydashboard` >=0.7.0 :conda:package:`r-shinyjs` >=1.0 :conda:package:`r-testthat`  :conda:package:`r-xml2` >=1.2.0 

   :required~by: |required_by_bioconductor-levi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-levi

   and update with::

      conda update bioconductor-levi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-levi


.. |required_by_bioconductor-levi| conda:required_by:: bioconductor-levi
.. |downloads_bioconductor-levi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-levi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-levi| image:: https://quay.io/repository/biocontainers/bioconductor-levi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-levi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-levi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-levi/README.html

