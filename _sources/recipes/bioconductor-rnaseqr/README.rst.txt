.. title:: Package Recipe 'bioconductor-rnaseqr'
.. highlight: bash


bioconductor-rnaseqr
====================

.. conda:recipe:: bioconductor-rnaseqr
   :replaces_section_title:

   This R package is designed for case\-control RNA\-Seq analysis \(two\-group\). There are six steps\: \"RNASeqRParam S4 Object Creation\"\, \"Environment Setup\"\, \"Quality Assessment\"\, \"Reads Alignment \& Quantification\"\, \"Gene\-level Differential Analyses\" and \"Functional Analyses\". Each step corresponds to a function in this package. After running functions in order\, a basic RNASeq analysis would be done easily.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RNASeqR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnaseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqr/meta.yaml>`_

   


.. conda:package:: bioconductor-rnaseqr

   |downloads_bioconductor-rnaseqr| |docker_bioconductor-rnaseqr|

   :versions: 1.0.3

   :depends: :conda:package:`bioconductor-ballgown` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.sc.sgd.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-pathview` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-systempiper` >=1.16.0,<1.17.0 :conda:package:`bioconductor-systempiperdata` >=1.10.0,<1.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corrplot`  :conda:package:`r-factoextra`  :conda:package:`r-factominer`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-performanceanalytics`  :conda:package:`r-pheatmap`  :conda:package:`r-rafalib`  :conda:package:`r-reshape2`  :conda:package:`r-reticulate`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-rnaseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqr

   and update with::

      conda update bioconductor-rnaseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnaseqr


.. |required_by_bioconductor-rnaseqr| conda:required_by:: bioconductor-rnaseqr
.. |downloads_bioconductor-rnaseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqr| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqr/README.html

