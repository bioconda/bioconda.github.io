:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicspca'
.. highlight: bash

bioconductor-omicspca
=====================

.. conda:recipe:: bioconductor-omicspca
   :replaces_section_title:
   :noindex:

   An R package for quantitative integration and analysis of multiple omics assays from heterogeneous samples

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/OMICsPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-omicspca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca/meta.yaml>`_

   OMICsPCA is an analysis pipeline designed to integrate multi OMICs experiments done on various subjects \(e.g. Cell lines\, individuals\)\, treatments \(e.g. disease\/control\) or time points and to analyse such integrated data from various various angles and perspectives. In it\'s core OMICsPCA uses Principal Component Analysis \(PCA\) to integrate multiomics experiments from various sources and thus has ability to over data insufficiency issues by using the ingegrated data as representatives. OMICsPCA can be used in various application including analysis of overall distribution of OMICs assays across various samples \/individuals \/time points\; grouping assays by user\-defined conditions\; identification of source of variation\, similarity\/dissimilarity between assays\, variables or individuals.


.. conda:package:: bioconductor-omicspca

   |downloads_bioconductor-omicspca| |docker_bioconductor-omicspca|

   :versions:
      
      

      ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-helloranges: ``>=1.16.0,<1.17.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-omicspcadata: ``>=1.8.0,<1.9.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-clvalid: 
   :depends r-corrplot: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-factoextra: 
   :depends r-factominer: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-kableextra: 
   :depends r-magick: 
   :depends r-mass: 
   :depends r-nbclust: 
   :depends r-pdftools: 
   :depends r-performanceanalytics: 
   :depends r-reshape2: 
   :depends r-rgl: 
   :depends r-rmarkdown: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicspca

   and update with::

      conda update bioconductor-omicspca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicspca:<tag>

   (see `bioconductor-omicspca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicspca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicspca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicspca
   :alt:   (downloads)
.. |docker_bioconductor-omicspca| image:: https://quay.io/repository/biocontainers/bioconductor-omicspca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicspca
.. _`bioconductor-omicspca/tags`: https://quay.io/repository/biocontainers/bioconductor-omicspca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicspca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicspca/README.html