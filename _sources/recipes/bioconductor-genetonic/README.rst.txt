:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genetonic'
.. highlight: bash

bioconductor-genetonic
======================

.. conda:recipe:: bioconductor-genetonic
   :replaces_section_title:
   :noindex:

   Enjoy Analyzing And Integrating The Results From Differential Expression Analysis And Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GeneTonic.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-genetonic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetonic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetonic/meta.yaml>`_

   This package provides a Shiny application that aims to combine at different levels the existing pieces of the transcriptome data and results\, in a way that makes it easier to generate insightful observations and hypothesis \- combining the benefits of interactivity and reproducibility\, e.g. by capturing the features and gene sets of interest highlighted during the live session\, and creating an HTML report as an artifact where text\, code\, and output coexist.


.. conda:package:: bioconductor-genetonic

   |downloads_bioconductor-genetonic| |docker_bioconductor-genetonic|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bs4dash: 
   :depends r-colorspace: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-dynamictreecut: 
   :depends r-expm: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rintrojs: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinywidgets: 
   :depends r-tidyr: 
   :depends r-viridis: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genetonic

   and update with::

      conda update bioconductor-genetonic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genetonic:<tag>

   (see `bioconductor-genetonic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genetonic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetonic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genetonic
   :alt:   (downloads)
.. |docker_bioconductor-genetonic| image:: https://quay.io/repository/biocontainers/bioconductor-genetonic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetonic
.. _`bioconductor-genetonic/tags`: https://quay.io/repository/biocontainers/bioconductor-genetonic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetonic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetonic/README.html