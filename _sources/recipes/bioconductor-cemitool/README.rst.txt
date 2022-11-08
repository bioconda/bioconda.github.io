:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cemitool'
.. highlight: bash

bioconductor-cemitool
=====================

.. conda:recipe:: bioconductor-cemitool
   :replaces_section_title:
   :noindex:

   Co\-expression Modules identification Tool

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CEMiTool.html
   :license: GPL-3
   :recipe: /`bioconductor-cemitool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool/meta.yaml>`_

   The CEMiTool package unifies the discovery and the analysis of coexpression gene modules in a fully automatic manner\, while providing a user\-friendly html report with high quality graphs. Our tool evaluates if modules contain genes that are over\-represented by specific pathways or that are altered in a specific sample group. Additionally\, CEMiTool is able to integrate transcriptomic data with interactome information\, identifying the potential hubs on each network.


.. conda:package:: bioconductor-cemitool

   |downloads_bioconductor-cemitool| |docker_bioconductor-cemitool|

   :versions:
      
      

      ``1.22.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.6.10-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-fgsea: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: ``>=1.9.4``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fastcluster: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggpmisc: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-htmltools: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-network: 
   :depends r-pracma: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-sna: 
   :depends r-stringr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cemitool

   and update with::

      conda update bioconductor-cemitool

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cemitool:<tag>

   (see `bioconductor-cemitool/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cemitool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cemitool.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cemitool
   :alt:   (downloads)
.. |docker_bioconductor-cemitool| image:: https://quay.io/repository/biocontainers/bioconductor-cemitool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cemitool
.. _`bioconductor-cemitool/tags`: https://quay.io/repository/biocontainers/bioconductor-cemitool?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cemitool";
        var versions = ["1.22.0","1.18.1","1.16.0","1.14.1","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cemitool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cemitool/README.html