:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathostat'
.. highlight: bash

bioconductor-pathostat
======================

.. conda:recipe:: bioconductor-pathostat
   :replaces_section_title:
   :noindex:

   PathoStat Statistical Microbiome Analysis Package

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/PathoStat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pathostat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathostat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathostat/meta.yaml>`_
   :links: biotools: :biotools:`pathostat`, doi: :doi:`10.1038/nmeth.3252`

   The purpose of this package is to perform Statistical Microbiome Analysis on metagenomics results from sequencing data samples. In particular\, it supports analyses on the PathoScope generated report files. PathoStat provides various functionalities including Relative Abundance charts\, Diversity estimates and plots\, tests of Differential Abundance\, Time Series visualization\, and Core OTU analysis.


.. conda:package:: bioconductor-pathostat

   |downloads_bioconductor-pathostat| |docker_bioconductor-pathostat|

   :versions:
      
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.4-0``,  ``1.6.1-0``,  ``1.4.1-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.6.0,<2.7.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-phyloseq: ``>=1.34.0,<1.35.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-corpcor: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gmodels: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rentrez: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-webshot: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathostat

   and update with::

      conda update bioconductor-pathostat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathostat:<tag>

   (see `bioconductor-pathostat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathostat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathostat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathostat
   :alt:   (downloads)
.. |docker_bioconductor-pathostat| image:: https://quay.io/repository/biocontainers/bioconductor-pathostat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathostat
.. _`bioconductor-pathostat/tags`: https://quay.io/repository/biocontainers/bioconductor-pathostat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathostat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathostat/README.html