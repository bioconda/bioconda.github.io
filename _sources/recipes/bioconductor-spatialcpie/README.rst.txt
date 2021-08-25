:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialcpie'
.. highlight: bash

bioconductor-spatialcpie
========================

.. conda:recipe:: bioconductor-spatialcpie
   :replaces_section_title:
   :noindex:

   Cluster analysis of Spatial Transcriptomics data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SpatialCPie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialcpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie/meta.yaml>`_

   SpatialCPie is an R package designed to facilitate cluster evaluation for spatial transcriptomics data by providing intuitive visualizations that display the relationships between clusters in order to guide the user during cluster identification and other downstream applications. The package is built around a shiny \"gadget\" to allow the exploration of the data with multiple plots in parallel and an interactive UI. The user can easily toggle between different cluster resolutions in order to choose the most appropriate visual cues.


.. conda:package:: bioconductor-spatialcpie

   |downloads_bioconductor-spatialcpie| |docker_bioconductor-spatialcpie|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-colorspace: ``>=1.3-2``
   :depends r-data.table: ``>=1.12.2``
   :depends r-digest: ``>=0.6.21``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-ggforce: ``>=0.3.0``
   :depends r-ggiraph: ``>=0.5.0``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggrepel: ``>=0.8.0``
   :depends r-igraph: ``>=1.2.2``
   :depends r-lpsolve: ``>=5.6.13``
   :depends r-purrr: ``>=0.2.5``
   :depends r-readr: ``>=1.1.1``
   :depends r-rlang: ``>=0.2.2``
   :depends r-shiny: ``>=1.1.0``
   :depends r-shinycssloaders: ``>=0.2.0``
   :depends r-shinyjs: ``>=1.0``
   :depends r-shinywidgets: ``>=0.4.8``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: ``>=0.8.1``
   :depends r-tidyselect: ``>=0.2.4``
   :depends r-zeallot: ``>=0.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialcpie

   and update with::

      conda update bioconductor-spatialcpie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialcpie:<tag>

   (see `bioconductor-spatialcpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialcpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialcpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialcpie
   :alt:   (downloads)
.. |docker_bioconductor-spatialcpie| image:: https://quay.io/repository/biocontainers/bioconductor-spatialcpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialcpie
.. _`bioconductor-spatialcpie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialcpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialcpie";
        var versions = ["1.8.0","1.6.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html