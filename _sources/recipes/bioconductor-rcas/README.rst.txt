:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcas'
.. highlight: bash

bioconductor-rcas
=================

.. conda:recipe:: bioconductor-rcas
   :replaces_section_title:

   RCAS is an automated system that provides dynamic genome annotations for custom input files that contain transcriptomic regions. Such transcriptomic regions could be\, for instance\, peak regions detected by CLIP\-Seq analysis that detect protein\-RNA interactions\, RNA modifications \(alias the epitranscriptome\)\, CAGE\-tag locations\, or any other collection of target regions at the level of the transcriptome. RCAS is designed as a reporting tool for the functional analysis of RNA\-binding sites detected by high\-throughput experiments. It takes as input a BED format file containing the genomic coordinates of the RNA binding sites and a GTF file that contains the genomic annotation features usually provided by publicly available databases such as Ensembl and UCSC. RCAS performs overlap operations between the genomic coordinates of the RNA binding sites and the genomic annotation features and produces in\-depth annotation summaries such as the distribution of binding sites with respect to gene features \(exons\, introns\, 5\'\/3\' UTR regions\, exon\-intron boundaries\, promoter regions\, and whole transcripts\). Moreover\, by detecting the collection of targeted transcripts\, RCAS can carry out functional annotation tables for enriched gene sets \(annotated by the Molecular Signatures Database\) and GO terms. As one of the most important questions that arise during protein\-RNA interaction analysis\; RCAS has a module for detecting sequence motifs enriched in the targeted regions of the transcriptome. A full interactive report in HTML format can be generated that contains interactive figures and tables that are ready for publication purposes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RCAS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas/meta.yaml>`_
   :links: biotools: :biotools:`rcas`

   


.. conda:package:: bioconductor-rcas

   |downloads_bioconductor-rcas| |docker_bioconductor-rcas|

   :versions: 1.8.0-0, 1.6.0-0, 1.5.4-2, 1.5.4-0, 1.4.0-0, 1.2.0-0, 1.1.1-0, 1.0.0-0, 1.0.0.dev75225b9-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomation: >=1.14.0,<1.15.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-motifrg: >=1.26.0,<1.27.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-dt: >=0.2
   :depends r-ggplot2: 
   :depends r-ggseqlogo: 
   :depends r-knitr: >=1.12.3
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-plotly: >=4.5.2
   :depends r-plotrix: 
   :depends r-proxy: 
   :depends r-rmarkdown: >=0.9.5
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcas

   and update with::

      conda update bioconductor-rcas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcas:<tag>

   (see `bioconductor-rcas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcas
   :alt:   (downloads)
.. |docker_bioconductor-rcas| image:: https://quay.io/repository/biocontainers/bioconductor-rcas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcas
.. _`bioconductor-rcas/tags`: https://quay.io/repository/biocontainers/bioconductor-rcas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcas/README.html