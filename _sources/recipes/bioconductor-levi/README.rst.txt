:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-levi'
.. highlight: bash

bioconductor-levi
=================

.. conda:recipe:: bioconductor-levi
   :replaces_section_title:
   :noindex:

   Landscape Expression Visualization Interface

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/levi.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-levi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi/meta.yaml>`_

   The tool integrates data from biological networks with transcriptomes\, displaying a heatmap with surface curves to evidence the altered regions.


.. conda:package:: bioconductor-levi

   |downloads_bioconductor-levi| |docker_bioconductor-levi|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colorspace: ``>=1.3-2``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-dt: ``>=0.4``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-httr: ``>=1.3.1``
   :depends r-igraph: ``>=1.2.1``
   :depends r-knitr: 
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinydashboard: ``>=0.7.0``
   :depends r-shinyjs: ``>=1.0``
   :depends r-testthat: 
   :depends r-xml2: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-levi

   and update with::

      conda update bioconductor-levi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-levi:<tag>

   (see `bioconductor-levi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-levi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-levi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-levi
   :alt:   (downloads)
.. |docker_bioconductor-levi| image:: https://quay.io/repository/biocontainers/bioconductor-levi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-levi
.. _`bioconductor-levi/tags`: https://quay.io/repository/biocontainers/bioconductor-levi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-levi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-levi/README.html