:orphan:  .. only available via index, not via toctree

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

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-dexseq: >=1.28.0,<1.29.0
   :depends bioconductor-drimseq: >=1.10.0,<1.11.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-tximport: >=1.10.0,<1.11.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isoformswitchanalyzer

   and update with::

      conda update bioconductor-isoformswitchanalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isoformswitchanalyzer:<tag>

   (see `bioconductor-isoformswitchanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isoformswitchanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isoformswitchanalyzer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-isoformswitchanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer
.. _`bioconductor-isoformswitchanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html