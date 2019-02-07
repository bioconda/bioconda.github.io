.. title:: Package Recipe 'bioconductor-cemitool'
.. highlight: bash


bioconductor-cemitool
=====================

.. conda:recipe:: bioconductor-cemitool
   :replaces_section_title:

   The CEMiTool package unifies the discovery and the analysis of coexpression gene modules in a fully automatic manner\, while providing a user\-friendly html report with high quality graphs. Our tool evaluates if modules contain genes that are over\-represented by specific pathways or that are altered in a specific sample group. Additionally\, CEMiTool is able to integrate transcriptomic data with interactome information\, identifying the potential hubs on each network.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CEMiTool.html
   :license: GPL-3
   :recipe: /`bioconductor-cemitool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool/meta.yaml>`_

   


.. conda:package:: bioconductor-cemitool

   |downloads_bioconductor-cemitool| |docker_bioconductor-cemitool|

   :versions: 1.6.10

   :depends: :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-fgsea` >=1.8.0,<1.9.0 :conda:package:`bioconductor-geneoverlap` >=1.18.0,<1.19.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.9.4 :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-ff`  :conda:package:`r-ffbase`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-ggpmisc`  :conda:package:`r-ggrepel`  :conda:package:`r-ggthemes`  :conda:package:`r-grbase`  :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-htmltools`  :conda:package:`r-igraph`  :conda:package:`r-intergraph`  :conda:package:`r-knitr`  :conda:package:`r-matrixstats`  :conda:package:`r-network`  :conda:package:`r-plyr`  :conda:package:`r-pracma`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  :conda:package:`r-sna`  :conda:package:`r-stringr`  :conda:package:`r-tidyr`  :conda:package:`r-wgcna`  

   :required~by: |required_by_bioconductor-cemitool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cemitool

   and update with::

      conda update bioconductor-cemitool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cemitool


.. |required_by_bioconductor-cemitool| conda:required_by:: bioconductor-cemitool
.. |downloads_bioconductor-cemitool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cemitool.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cemitool| image:: https://quay.io/repository/biocontainers/bioconductor-cemitool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cemitool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cemitool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cemitool/README.html

