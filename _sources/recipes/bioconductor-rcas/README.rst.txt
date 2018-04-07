.. _`bioconductor-rcas`:

bioconductor-rcas
=================

|downloads|

RCAS is an automated system that provides dynamic genome annotations for custom input files that contain transcriptomic regions. Such transcriptomic regions could be\, for instance\, peak regions detected by CLIP\-Seq analysis that detect protein\-RNA interactions\, RNA modifications \(alias the epitranscriptome\)\, CAGE\-tag locations\, or any other collection of target regions at the level of the transcriptome. RCAS is designed as a reporting tool for the functional analysis of RNA\-binding sites detected by high\-throughput experiments. It takes as input a BED format file containing the genomic coordinates of the RNA binding sites and a GTF file that contains the genomic annotation features usually provided by publicly available databases such as Ensembl and UCSC. RCAS performs overlap operations between the genomic coordinates of the RNA binding sites and the genomic annotation features and produces in\-depth annotation summaries such as the distribution of binding sites with respect to gene features \(exons\, introns\, 5\'\/3\' UTR regions\, exon\-intron boundaries\, promoter regions\, and whole transcripts\). Moreover\, by detecting the collection of targeted transcripts\, RCAS can carry out functional annotation tables for enriched gene sets \(annotated by the Molecular Signatures Database\) and GO terms. As one of the most important questions that arise during protein\-RNA interaction analysis\; RCAS has a module for detecting sequence motifs enriched in the targeted regions of the transcriptome. A full interactive report in HTML format can be generated that contains interactive figures and tables that are ready for publication purposes.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/RCAS.html
Versions      1.0.0, 1.0.0.dev75225b9, 1.1.1, 1.2.0, 1.4.0, 1.5.4
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rcas

and update with::

   conda update bioconductor-rcas



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rcas.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rcas/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rcas/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rcas/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rcas
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rcas/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rcas

