:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcaexplorer'
.. highlight: bash

bioconductor-pcaexplorer
========================

.. conda:recipe:: bioconductor-pcaexplorer
   :replaces_section_title:

   This package provides functionality for interactive visualization of RNA\-seq datasets based on Principal Components Analysis. The methods provided allow for quick information extraction and effective data exploration. A Shiny application encapsulates the whole analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/pcaExplorer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcaexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcaexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcaexplorer/meta.yaml>`_
   :links: biotools: :biotools:`pcaexplorer`, doi: :doi:`10.18547/gcb.2017.vol3.iss1.e39`

   


.. conda:package:: bioconductor-pcaexplorer

   |downloads_bioconductor-pcaexplorer| |docker_bioconductor-pcaexplorer|

   :versions: 2.8.0-0, 2.6.0-0, 2.4.0-0, 2.2.1-0, 2.0.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   :depends bioconductor-gostats: >=2.48.0,<2.49.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-d3heatmap: 
   :depends r-dt: 
   :depends r-ggplot2: >=2.0.0
   :depends r-ggrepel: 
   :depends r-knitr: 
   :depends r-nmf: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-shiny: >=0.12.0
   :depends r-shinyace: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-threejs: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcaexplorer

   and update with::

      conda update bioconductor-pcaexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcaexplorer:<tag>

   (see `bioconductor-pcaexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcaexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcaexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcaexplorer
   :alt:   (downloads)
.. |docker_bioconductor-pcaexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer
.. _`bioconductor-pcaexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-pcaexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcaexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcaexplorer/README.html