.. _`bioconductor-snphood`:

bioconductor-snphood
====================

|downloads|

To date\, thousands of single nucleotide polymorphisms \(SNPs\) have been found to be associated with complex traits and diseases. However\, the vast majority of these disease\-associated SNPs lie in the non\-coding part of the genome\, and are likely to affect regulatory elements\, such as enhancers and promoters\, rather than function of a protein. Thus\, to understand the molecular mechanisms underlying genetic traits and diseases\, it becomes increasingly important to study the effect of a SNP on nearby molecular traits such as chromatin environment or transcription factor \(TF\) binding. Towards this aim\, we developed SNPhood\, a user\-friendly \*Bioconductor\* R package to investigate and visualize the local neighborhood of a set of SNPs of interest for NGS data such as chromatin marks or transcription factor binding sites from ChIP\-Seq or RNA\- Seq experiments. SNPhood comprises a set of easy\-to\-use functions to extract\, normalize and summarize reads for a genomic region\, perform various data quality checks\, normalize read counts using additional input files\, and to cluster and visualize the regions according to the binding pattern. The regions around each SNP can be binned in a user\-defined fashion to allow for analysis of very broad patterns as well as a detailed investigation of specific binding shapes. Furthermore\, SNPhood supports the integration with genotype information to investigate and visualize genotype\-specific binding patterns. Finally\, SNPhood can be employed for determining\, investigating\, and visualizing allele\-specific binding patterns around the SNPs of interest.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SNPhood.html
Versions      1.12.0, 1.10.0, 1.8.0, 1.6.1
License       LGPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-snphood/meta.yaml



Links         biotools: :biotools:`snphood`, doi: :doi:`10.1093/bioinformatics/btw127`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-snphood

and update with::

   conda update bioconductor-snphood



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-snphood.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-snphood/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-snphood/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-snphood/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-snphood
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-snphood/status
                :target: https://quay.io/repository/biocontainers/bioconductor-snphood

