.. title:: Package Recipe 'bioconductor-isoformswitchanalyzer'
.. highlight: bash


bioconductor-isoformswitchanalyzer
==================================

.. conda:recipe:: bioconductor-isoformswitchanalyzer
   :replaces_section_title:

   IsoformSwitchAnalyzeR enables identification and analysis of alternative splicing and isoform switches with predicted functional consequences \(such as gain\/loss of protein domains etc\) from quantification by Kallisto\, Salmon\, Cufflinks\/Cuffdiff\, RSEM etc.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IsoformSwitchAnalyzeR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-isoformswitchanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer/meta.yaml>`_
   :links: biotools: :biotools:`IsoformSwitchAnalyzeR`, doi: :doi:`10.1158/1541-7786.MCR-16-0459`

   


.. conda:package:: bioconductor-isoformswitchanalyzer

   |downloads_bioconductor-isoformswitchanalyzer| |docker_bioconductor-isoformswitchanalyzer|

   :versions: 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-dexseq` >=1.28.0,<1.29.0 :conda:package:`bioconductor-drimseq` >=1.10.0,<1.11.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-tximport` >=1.10.0,<1.11.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-dplyr`  :conda:package:`r-futile.logger`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-magrittr`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-readr`  :conda:package:`r-reshape2`  :conda:package:`r-stringr`  :conda:package:`r-venndiagram`  

   :required~by: |required_by_bioconductor-isoformswitchanalyzer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isoformswitchanalyzer

   and update with::

      conda update bioconductor-isoformswitchanalyzer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer


.. |required_by_bioconductor-isoformswitchanalyzer| conda:required_by:: bioconductor-isoformswitchanalyzer
.. |downloads_bioconductor-isoformswitchanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isoformswitchanalyzer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isoformswitchanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html

