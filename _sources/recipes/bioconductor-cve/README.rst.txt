.. title:: Package Recipe 'bioconductor-cve'
.. highlight: bash


bioconductor-cve
================

.. conda:recipe:: bioconductor-cve
   :replaces_section_title:

   Shiny app for interactive variant prioritisation in precision oncology. The input file for CVE is the output file of the recently released Oncotator Variant Annotation tool summarising variant\-centric information from 14 different publicly available resources relevant for cancer researches. Interactive priortisation in CVE is based on known germline and cancer variants\, DNA repair genes and functional prediction scores. An optional feature of CVE is the exploration of the tumour\-specific pathway context that is facilitated using co\-expression modules generated from publicly available transcriptome data. Finally druggability of prioritised variants is assessed using the Drug Gene Interaction Database \(DGIdb\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CVE.html
   :license: GPL-3
   :recipe: /`bioconductor-cve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cve/meta.yaml>`_
   :links: biotools: :biotools:`cve`, doi: :doi:`10.1186/s12920-017-0261-6`

   


.. conda:package:: bioconductor-cve

   |downloads_bioconductor-cve| |docker_bioconductor-cve|

   :versions: 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-consensusclusterplus` >=1.46.0,<1.47.0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-jsonlite`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-shiny`  :conda:package:`r-tidyverse`  :conda:package:`r-wgcna`  

   :required~by: |required_by_bioconductor-cve|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cve

   and update with::

      conda update bioconductor-cve

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cve


.. |required_by_bioconductor-cve| conda:required_by:: bioconductor-cve
.. |downloads_bioconductor-cve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cve.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cve| image:: https://quay.io/repository/biocontainers/bioconductor-cve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cve







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cve/README.html

