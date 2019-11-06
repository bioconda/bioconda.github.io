:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cve'
.. highlight: bash

bioconductor-cve
================

.. conda:recipe:: bioconductor-cve
   :replaces_section_title:

   Shiny app for interactive variant prioritisation in precision oncology. The input file for CVE is the output file of the recently released Oncotator Variant Annotation tool summarising variant\-centric information from 14 different publicly available resources relevant for cancer researches. Interactive priortisation in CVE is based on known germline and cancer variants\, DNA repair genes and functional prediction scores. An optional feature of CVE is the exploration of the tumour\-specific pathway context that is facilitated using co\-expression modules generated from publicly available transcriptome data. Finally druggability of prioritised variants is assessed using the Drug Gene Interaction Database \(DGIdb\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CVE.html
   :license: GPL-3
   :recipe: /`bioconductor-cve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cve/meta.yaml>`_
   :links: biotools: :biotools:`cve`, doi: :doi:`10.1186/s12920-017-0261-6`

   


.. conda:package:: bioconductor-cve

   |downloads_bioconductor-cve| |docker_bioconductor-cve|

   :versions: 1.11.2-0, 1.10.0-1, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-consensusclusterplus: >=1.50.0,<1.51.0
   :depends bioconductor-rtcgatoolbox: >=2.16.0,<2.17.0
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :depends r-tidyverse: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cve

   and update with::

      conda update bioconductor-cve

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cve:<tag>

   (see `bioconductor-cve/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cve
   :alt:   (downloads)
.. |docker_bioconductor-cve| image:: https://quay.io/repository/biocontainers/bioconductor-cve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cve
.. _`bioconductor-cve/tags`: https://quay.io/repository/biocontainers/bioconductor-cve?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cve/README.html