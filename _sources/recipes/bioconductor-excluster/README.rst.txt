.. _`bioconductor-excluster`:

bioconductor-excluster
======================

|downloads|

ExCluster flattens Ensembl and GENCODE GTF files into GFF files\, which are used to count reads per non\-overlapping exon bin from BAM files. This read counting is done using the function featureCounts from the package Rsubread. Library sizes are normalized across all biological replicates\, and ExCluster then compares two different conditions to detect signifcantly differentially spliced genes. This process requires at least two independent biological repliates per condition\, and ExCluster accepts only exactly two conditions at a time. ExCluster ultimately produces false discovery rates \(FDRs\) per gene\, which are used to detect significance. Exon log2 fold change \(log2FC\) means and variances may be plotted for each significantly differentially spliced gene\, which helps scientists develop hypothesis and target differential splicing events for RT\-qPCR validation in the wet lab.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ExCluster.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-excluster/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-excluster

and update with::

   conda update bioconductor-excluster



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-excluster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-excluster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-excluster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-excluster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-excluster
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-excluster/status
                :target: https://quay.io/repository/biocontainers/bioconductor-excluster

