.. _`bioconductor-qdnaseq`:

bioconductor-qdnaseq
====================

|downloads|

Quantitative DNA sequencing for chromosomal aberrations. The genome is divided into non-overlapping fixed-sized bins, number of sequence reads in each counted, adjusted with a simultaneous two-dimensional loess correction for sequence mappability and GC content, and filtered to remove spurious regions in the genome. Downstream steps of segmentation and calling are also implemented via packages DNAcopy and CGHcall, respectively.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/QDNAseq.html
Versions 1.10.0, 1.8.0
License  GPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-qdnaseq

and update with::

   conda update bioconductor-qdnaseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-qdnaseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-qdnaseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-qdnaseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq


