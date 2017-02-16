.. _`r-nastiseq`:

r-nastiseq
==========

|downloads|

Pairs of RNA molecules transcribed from partially or entirely complementary loci are called cis-natural antisense transcripts (cis-NATs), and they play key roles in the regulation of gene expression in many organisms. A promising experimental tool for profiling sense and antisense transcription is strand-specific RNA sequencing (ssRNA-seq). To identify cis-NATs using ssRNA-seq, we developed a new computational method based on model comparison that incorporates the inherent variable efficiency of generating perfectly strand-specific libraries. Applying the method to new ssRNA-seq data from whole root and cell-type specific Arabidopsis libraries confirmed most of the known cis-NAT pairs and identified hundreds of additional cis-NAT pairs.

======== ===========
Home     https://ohlerlab.mdc-berlin.de/software/NASTIseq_104/
Versions 1.0
License  GPL-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nastiseq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-nastiseq

and update with::

   conda update r-nastiseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-nastiseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-nastiseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-nastiseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-nastiseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-nastiseq
.. |docker| image:: https://quay.io/repository/biocontainers/r-nastiseq/status
                :target: https://quay.io/repository/biocontainers/r-nastiseq


