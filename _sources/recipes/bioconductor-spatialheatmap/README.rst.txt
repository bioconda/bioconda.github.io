:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialheatmap'
.. highlight: bash

bioconductor-spatialheatmap
===========================

.. conda:recipe:: bioconductor-spatialheatmap
   :replaces_section_title:
   :noindex:

   spatialHeatmap

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/spatialHeatmap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialheatmap/meta.yaml>`_

   The spatialHeatmap package provides functionalities for visualizing cell\-\, tissue\- and organ\-specific data of biological assays by coloring the corresponding spatial features defined in anatomical images according to a numeric color key.


.. conda:package:: bioconductor-spatialheatmap

   |downloads_bioconductor-spatialheatmap| |docker_bioconductor-spatialheatmap|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-rols: ``>=2.18.0,<2.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-av: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dynamictreecut: 
   :depends r-flashclust: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-grimport: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-plotly: 
   :depends r-rsvg: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-visnetwork: 
   :depends r-wgcna: 
   :depends r-xml2: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialheatmap

   and update with::

      conda update bioconductor-spatialheatmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialheatmap:<tag>

   (see `bioconductor-spatialheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialheatmap
   :alt:   (downloads)
.. |docker_bioconductor-spatialheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap
.. _`bioconductor-spatialheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialheatmap/README.html