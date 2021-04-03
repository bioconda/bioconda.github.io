:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-psichomics'
.. highlight: bash

bioconductor-psichomics
=======================

.. conda:recipe:: bioconductor-psichomics
   :replaces_section_title:
   :noindex:

   Graphical Interface for Alternative Splicing Quantification\, Analysis and Visualisation

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/psichomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-psichomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psichomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-psichomics/meta.yaml>`_

   Interactive R package with an intuitive Shiny\-based graphical interface for alternative splicing quantification and integrative analyses of alternative splicing and gene expression based on The Cancer Genome Atlas \(TCGA\)\, the Genotype\-Tissue Expression project \(GTEx\)\, Sequence Read Archive \(SRA\) and user\-provided data. The tool interactively performs survival\, dimensionality reduction and median\- and variance\-based differential splicing and gene expression analyses that benefit from the incorporation of clinical and molecular sample\-associated features \(such as tumour stage or survival\). Interactive visual access to genomic mapping and functional annotation of selected alternative splicing events is also included.


.. conda:package:: bioconductor-psichomics

   |downloads_bioconductor-psichomics| |docker_bioconductor-psichomics|

   :versions:
      
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.13.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-annotationhub: ``>=2.22.0,<2.23.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-recount: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-dt: ``>=0.2``
   :depends r-fastica: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-highcharter: ``>=0.5.0``
   :depends r-htmltools: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-pairsd3: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcpp: ``>=0.12.14``
   :depends r-reshape2: 
   :depends r-rfast: 
   :depends r-shiny: ``>=1.5.0``
   :depends r-shinybs: 
   :depends r-shinyjs: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-xml: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-psichomics

   and update with::

      conda update bioconductor-psichomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-psichomics:<tag>

   (see `bioconductor-psichomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-psichomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-psichomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-psichomics
   :alt:   (downloads)
.. |docker_bioconductor-psichomics| image:: https://quay.io/repository/biocontainers/bioconductor-psichomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-psichomics
.. _`bioconductor-psichomics/tags`: https://quay.io/repository/biocontainers/bioconductor-psichomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-psichomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-psichomics/README.html