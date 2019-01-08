.. _`mirtrace`:

mirtrace
========

|downloads|

miRTrace is a new quality control and taxonomic tracing tool developed specifically for small RNA sequencing data \(sRNA\-Seq\).
Each sample is characterized by profiling sequencing quality\, read length\, sequencing depth and miRNA complexity and also the
amounts of miRNAs versus undesirable sequences \(derived from tRNAs\, rRNAs and sequencing artifacts\). In addition to these routine
quality control \(QC\) analyses\, miRTrace can accurately and sensitively resolve taxonomic origins of small RNA\-Seq data based on the
composition of clade\-specific miRNAs. This feature can be used to detect cross\-clade contaminations in typical lab settings. It can
also be applied for more specific applications in forensics\, food quality control and clinical diagnosis\, for instance tracing the
origins of meat products or detecting parasitic microRNAs in host serum.


============= ===========
Home          https://github.com/friedlanderlab/mirtrace
Versions      1.0.0
License       GPL-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtrace



Links         biotools: :biotools:`mirtrace`, doi: :doi:`10.1186/s13059-018-1588-9`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install mirtrace

and update with::

   conda update mirtrace



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/mirtrace.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/mirtrace/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/mirtrace/README.html
.. |downloads| image:: https://anaconda.org/bioconda/mirtrace/badges/downloads.svg
               :target: https://anaconda.org/bioconda/mirtrace
.. |docker| image:: https://quay.io/repository/biocontainers/mirtrace/status
                :target: https://quay.io/repository/biocontainers/mirtrace

