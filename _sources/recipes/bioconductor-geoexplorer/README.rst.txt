:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geoexplorer'
.. highlight: bash

bioconductor-geoexplorer
========================

.. conda:recipe:: bioconductor-geoexplorer
   :replaces_section_title:
   :noindex:

   GEOexplorer\: an R\/Bioconductor package for gene expression analysis and visualisation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GEOexplorer.html
   :license: GPL-3
   :recipe: /`bioconductor-geoexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer/meta.yaml>`_

   GEOexplorer is a Shiny app that enables exploratory data analysis and differential gene expression of gene expression analysis on microarray gene expression datasets held on the GEO database. The outputs are interactive graphs that enable users to explore the results of the analysis. The development of GEOexplorer was made possible because of the excellent code provided by GEO2R \(https\: \/\/www.ncbi.nlm.nih.gov\/geo\/geo2r\/\).


.. conda:package:: bioconductor-geoexplorer

   |downloads_bioconductor-geoexplorer| |docker_bioconductor-geoexplorer|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-htmltools: 
   :depends r-maptools: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinybusy: 
   :depends r-shinyheatmaply: 
   :depends r-stringr: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geoexplorer

   and update with::

      conda update bioconductor-geoexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geoexplorer:<tag>

   (see `bioconductor-geoexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geoexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geoexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geoexplorer
   :alt:   (downloads)
.. |docker_bioconductor-geoexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-geoexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geoexplorer
.. _`bioconductor-geoexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-geoexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geoexplorer";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html