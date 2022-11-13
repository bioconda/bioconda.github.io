:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epicompare'
.. highlight: bash

bioconductor-epicompare
=======================

.. conda:recipe:: bioconductor-epicompare
   :replaces_section_title:
   :noindex:

   Comparison\, Benchmarking \& QC of Epigenomic Datasets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/EpiCompare.html
   :license: GPL-3
   :recipe: /`bioconductor-epicompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare/meta.yaml>`_

   EpiCompare is used to compare and analyse epigenetic datasets for quality control and benchmarking purposes. The package outputs an HTML report consisting of three sections\: \(1. General metrics\) Metrics on peaks \(percentage of blacklisted and non\-standard peaks\, and peak widths\) and fragments \(duplication rate\) of samples\, \(2. Peak overlap\) Percentage and statistical significance of overlapping and non\-overlapping peaks. Also includes upset plot and \(3. Functional annotation\) functional annotation \(ChromHMM\, ChIPseeker and enrichment analysis\) of peaks. Also includes peak enrichment around TSS.


.. conda:package:: bioconductor-epicompare

   |downloads_bioconductor-epicompare| |docker_bioconductor-epicompare|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-brgenomics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-chipseeker: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomation: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-htmltools: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epicompare

   and update with::

      conda update bioconductor-epicompare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epicompare:<tag>

   (see `bioconductor-epicompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epicompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epicompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epicompare
   :alt:   (downloads)
.. |docker_bioconductor-epicompare| image:: https://quay.io/repository/biocontainers/bioconductor-epicompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epicompare
.. _`bioconductor-epicompare/tags`: https://quay.io/repository/biocontainers/bioconductor-epicompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epicompare";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epicompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epicompare/README.html