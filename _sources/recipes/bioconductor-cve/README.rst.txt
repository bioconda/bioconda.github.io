.. _`bioconductor-cve`:

bioconductor-cve
================

|downloads|

Shiny app for interactive variant prioritisation in precision oncology\. The input file for CVE is the output file of the recently released Oncotator Variant Annotation tool summarising variant\-centric information from 14 different publicly available resources relevant for cancer researches\. Interactive priortisation in CVE is based on known germline and cancer variants\, DNA repair genes and functional prediction scores\. An optional feature of CVE is the exploration of the tumour\-specific pathway context that is facilitated using co\-expression modules generated from publicly available transcriptome data\. Finally druggability of prioritised variants is assessed using the Drug Gene Interaction Database \(DGIdb\)\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/CVE.html
Versions      1.4.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cve



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cve

and update with::

   conda update bioconductor-cve



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cve.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cve/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cve/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cve/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cve
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cve/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cve

