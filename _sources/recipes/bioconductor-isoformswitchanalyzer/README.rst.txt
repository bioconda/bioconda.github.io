:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isoformswitchanalyzer'
.. highlight: bash

bioconductor-isoformswitchanalyzer
==================================

.. conda:recipe:: bioconductor-isoformswitchanalyzer
   :replaces_section_title:
   :noindex:

   Identify\, Annotate and Visualize Alternative Splicing and Isoform Switches with Functional Consequences from both short\- and long\-read RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/IsoformSwitchAnalyzeR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-isoformswitchanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isoformswitchanalyzer/meta.yaml>`_
   :links: biotools: :biotools:`IsoformSwitchAnalyzeR`, doi: :doi:`10.1158/1541-7786.MCR-16-0459`

   Analysis of alternative splicing and isoform switches with predicted functional consequences \(e.g. gain\/loss of protein domains etc.\) from quantification of all types of RNASeq by tools such as Kallisto\, Salmon\, StringTie\, Cufflinks\/Cuffdiff etc.


.. conda:package:: bioconductor-isoformswitchanalyzer

   |downloads_bioconductor-isoformswitchanalyzer| |docker_bioconductor-isoformswitchanalyzer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-dexseq: ``>=1.40.0,<1.41.0``
   :depends bioconductor-drimseq: ``>=1.22.0,<1.23.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-tximeta: ``>=1.12.0,<1.13.0``
   :depends bioconductor-tximport: ``>=1.22.0,<1.23.0``
   :depends bioconductor-xvector: ``>=0.34.0,<0.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
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
   :target: https://anaconda.org/bioconda/bioconductor-isoformswitchanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-isoformswitchanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer
.. _`bioconductor-isoformswitchanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-isoformswitchanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isoformswitchanalyzer";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isoformswitchanalyzer/README.html