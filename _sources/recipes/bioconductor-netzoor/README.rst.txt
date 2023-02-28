:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netzoor'
.. highlight: bash

bioconductor-netzoor
====================

.. conda:recipe:: bioconductor-netzoor
   :replaces_section_title:
   :noindex:

   Unified methods for the inference and analysis of gene regulatory networks

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/netZooR.html
   :license: GPL-3
   :recipe: /`bioconductor-netzoor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netzoor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netzoor/meta.yaml>`_

   netZooR unifies the implementations of several Network Zoo methods \(netzoo\, netzoo.github.io\) into a single package by creating interfaces between network inference and network analysis methods. Currently\, the package has 3 methods for network inference including PANDA and its optimized implementation OTTER \(network reconstruction using mutliple lines of biological evidence\)\, LIONESS \(single\-sample network inference\)\, and EGRET \(genotype\-specific networks\). Network analysis methods include CONDOR \(community detection\)\, ALPACA \(differential community detection\)\, CRANE \(significance estimation of differential modules\)\, MONSTER \(estimation of network transition states\). In addition\, YARN allows to process gene expresssion data for tissue\-specific analyses and SAMBAR infers missing mutation data based on pathway information.


.. conda:package:: bioconductor-netzoor

   |downloads_bioconductor-netzoor| |docker_bioconductor-netzoor|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-gostats: ``>=2.64.0,<2.65.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-pandar: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rcy3: ``>=2.18.0,<2.19.0``
   :depends bioconductor-stringdb: ``>=2.10.0,<2.11.0``
   :depends bioconductor-yarn: ``>=1.24.0,<1.25.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nnet: 
   :depends r-penalized: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-reticulate: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netzoor

   and update with::

      conda update bioconductor-netzoor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netzoor:<tag>

   (see `bioconductor-netzoor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netzoor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netzoor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netzoor
   :alt:   (downloads)
.. |docker_bioconductor-netzoor| image:: https://quay.io/repository/biocontainers/bioconductor-netzoor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netzoor
.. _`bioconductor-netzoor/tags`: https://quay.io/repository/biocontainers/bioconductor-netzoor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netzoor";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netzoor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netzoor/README.html