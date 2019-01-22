.. _`bioconductor-dada2`:

bioconductor-dada2
==================

|downloads|

The dada2 package infers exact amplicon sequence variants \(ASVs\) from high\-throughput amplicon sequencing data\, replacing the coarser and less accurate OTU clustering approach. The dada2 pipeline takes as input demultiplexed fastq files\, and outputs the sequence variants and their sample\-wise abundances after removing substitution and chimera errors. Taxonomic classification is available via a native implementation of the RDP naive Bayesian classifier\, and species\-level assignment to 16S rRNA gene fragments by exact matching.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/dada2.html
Versions      1.8.0, 1.6.0, 1.4, 1.4.0, 1.2, 1.0.3, 0.99.10, 0.10.4, 0.10.3, 0.10.1, 0.10.0
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2



Links         biotools: :biotools:`dada2`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dada2

and update with::

   conda update bioconductor-dada2



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dada2.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dada2/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dada2/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dada2/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dada2
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dada2/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dada2

