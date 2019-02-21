:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catalyst'
.. highlight: bash

bioconductor-catalyst
=====================

.. conda:recipe:: bioconductor-catalyst
   :replaces_section_title:

   Mass cytometry \(CyTOF\) uses heavy metal isotopes rather than fluorescent tags as reporters to label antibodies\, thereby substantially decreasing spectral overlap and allowing for examination of over 50 parameters at the single cell level. While spectral overlap is significantly less pronounced in CyTOF than flow cytometry\, spillover due to detection sensitivity\, isotopic impurities\, and oxide formation can impede data interpretability. We designed CATALYST \(Cytometry dATa anALYSis Tools\) to provide a pipeline for preprocessing of cytometry data\, including i\) normalization using bead standards\, ii\) single\-cell deconvolution\, and iii\) bead\-based compensation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CATALYST.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-catalyst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catalyst/meta.yaml>`_

   


.. conda:package:: bioconductor-catalyst

   |downloads_bioconductor-catalyst| |docker_bioconductor-catalyst|

   :versions: 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-complexheatmap: >=1.20.0,<1.21.0
   
   :depends bioconductor-consensusclusterplus: >=1.46.0,<1.47.0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   
   :depends bioconductor-flowsom: >=1.14.0,<1.15.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-circlize: 
   
   :depends r-dplyr: 
   
   :depends r-drc: 
   
   :depends r-dt: 
   
   :depends r-ggplot2: 
   
   :depends r-ggrepel: 
   
   :depends r-ggridges: 
   
   :depends r-gridextra: 
   
   :depends r-htmltools: 
   
   :depends r-magrittr: 
   
   :depends r-matrix: 
   
   :depends r-matrixstats: 
   
   :depends r-nnls: 
   
   :depends r-plotly: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-reshape2: 
   
   :depends r-rtsne: 
   
   :depends r-scales: 
   
   :depends r-shiny: 
   
   :depends r-shinybs: 
   
   :depends r-shinydashboard: 
   
   :depends r-shinyjs: 
   
   :depends r-tidyr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-catalyst

   and update with::

      conda update bioconductor-catalyst

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-catalyst:<tag>

   (see `bioconductor-catalyst/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-catalyst| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-catalyst.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-catalyst| image:: https://quay.io/repository/biocontainers/bioconductor-catalyst/status
   :target: https://quay.io/repository/biocontainers/bioconductor-catalyst
.. _`bioconductor-catalyst/tags`: https://quay.io/repository/biocontainers/bioconductor-catalyst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-catalyst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-catalyst/README.html