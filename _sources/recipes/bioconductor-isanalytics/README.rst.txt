:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isanalytics'
.. highlight: bash

bioconductor-isanalytics
========================

.. conda:recipe:: bioconductor-isanalytics
   :replaces_section_title:
   :noindex:

   Analyze gene therapy vector insertion sites data identified from genomics next generation sequencing reads for clonal tracking studies

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ISAnalytics.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-isanalytics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isanalytics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isanalytics/meta.yaml>`_

   In gene therapy\, stem cells are modified using viral vectors to deliver the therapeutic transgene and replace functional properties since the genetic modification is stable and inherited in all cell progeny. The retrieval and mapping of the sequences flanking the virus\-host DNA junctions allows the identification of insertion sites \(IS\)\, essential for monitoring the evolution of genetically modified cells in vivo. A comprehensive toolkit for the analysis of IS is required to foster clonal trackign studies and supporting the assessment of safety and long term efficacy in vivo. This package is aimed at \(1\) supporting automation of IS workflow\, \(2\) performing base and advance analysis for IS tracking \(clonal abundance\, clonal expansions and statistics for insertional mutagenesis\, etc.\)\, \(3\) providing basic biology insights of transduced stem cells in vivo.


.. conda:package:: bioconductor-isanalytics

   |downloads_bioconductor-isanalytics| |docker_bioconductor-isanalytics|

   :versions:
      
      

      ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-htmltools: 
   :depends r-lifecycle: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-reactable: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isanalytics

   and update with::

      conda update bioconductor-isanalytics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isanalytics:<tag>

   (see `bioconductor-isanalytics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isanalytics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isanalytics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isanalytics
   :alt:   (downloads)
.. |docker_bioconductor-isanalytics| image:: https://quay.io/repository/biocontainers/bioconductor-isanalytics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isanalytics
.. _`bioconductor-isanalytics/tags`: https://quay.io/repository/biocontainers/bioconductor-isanalytics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isanalytics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isanalytics/README.html