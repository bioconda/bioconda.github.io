.. _`bioconductor-exomepeak`:

bioconductor-exomepeak
======================

|downloads|

The package is developed for the analysis of affinity\-based epitranscriptome shortgun sequencing data from MeRIP\-seq \(maA\-seq\). It was built on the basis of the exomePeak MATLAB package \(Meng\, Jia\, et al. \"Exome\-based analysis for RNA epigenome sequencing data.\" Bioinformatics 29.12 \(2013\)\: 1565\-1567.\) with new functions for differential analysis of two experimental conditions to unveil the dynamics in post\-transcriptional regulation of the RNA methylome. The exomePeak R\-package accepts and statistically supports multiple biological replicates\, internally removes PCR artifacts and multi\-mapping reads\, outputs exome\-based binding sites \(RNA methylation sites\) and detects differential post\-transcriptional RNA modification sites between two experimental conditions in term of percentage rather the absolute amount. The package is still under active development\, and we welcome all biology and computation scientist for all kinds of collaborations and communications. Please feel free to contact Dr. Jia Meng \<jia.meng\@hotmail.com\> if you have any questions.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/exomePeak.html
Versions      2.14.0, 2.13.2
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak



Links         biotools: :biotools:`exomepeak`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-exomepeak

and update with::

   conda update bioconductor-exomepeak



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-exomepeak.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-exomepeak/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-exomepeak/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-exomepeak/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-exomepeak
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-exomepeak/status
                :target: https://quay.io/repository/biocontainers/bioconductor-exomepeak

