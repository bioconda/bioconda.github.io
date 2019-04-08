:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snphood'
.. highlight: bash

bioconductor-snphood
====================

.. conda:recipe:: bioconductor-snphood
   :replaces_section_title:

   To date\, thousands of single nucleotide polymorphisms \(SNPs\) have been found to be associated with complex traits and diseases. However\, the vast majority of these disease\-associated SNPs lie in the non\-coding part of the genome\, and are likely to affect regulatory elements\, such as enhancers and promoters\, rather than function of a protein. Thus\, to understand the molecular mechanisms underlying genetic traits and diseases\, it becomes increasingly important to study the effect of a SNP on nearby molecular traits such as chromatin environment or transcription factor \(TF\) binding. Towards this aim\, we developed SNPhood\, a user\-friendly \*Bioconductor\* R package to investigate and visualize the local neighborhood of a set of SNPs of interest for NGS data such as chromatin marks or transcription factor binding sites from ChIP\-Seq or RNA\- Seq experiments. SNPhood comprises a set of easy\-to\-use functions to extract\, normalize and summarize reads for a genomic region\, perform various data quality checks\, normalize read counts using additional input files\, and to cluster and visualize the regions according to the binding pattern. The regions around each SNP can be binned in a user\-defined fashion to allow for analysis of very broad patterns as well as a detailed investigation of specific binding shapes. Furthermore\, SNPhood supports the integration with genotype information to investigate and visualize genotype\-specific binding patterns. Finally\, SNPhood can be employed for determining\, investigating\, and visualizing allele\-specific binding patterns around the SNPs of interest.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SNPhood.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-snphood <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphood>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphood/meta.yaml>`_
   :links: biotools: :biotools:`snphood`, doi: :doi:`10.1093/bioinformatics/btw127`

   


.. conda:package:: bioconductor-snphood

   |downloads_bioconductor-snphood| |docker_bioconductor-snphood|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.1-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-checkmate: 
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snphood

   and update with::

      conda update bioconductor-snphood

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snphood:<tag>

   (see `bioconductor-snphood/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snphood| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snphood.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snphood| image:: https://quay.io/repository/biocontainers/bioconductor-snphood/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snphood
.. _`bioconductor-snphood/tags`: https://quay.io/repository/biocontainers/bioconductor-snphood?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snphood/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snphood/README.html