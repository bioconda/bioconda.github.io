.. _`afterqc`:

afterqc
=======

|downloads|

Automatic Filtering\, Trimming\, Error Removing and Quality Control for fastq data. AfterQC can simply go through all fastq files in a folder and then output three folders\: good\, bad and QC folders\, which contains good reads\, bad reads and the QC results of each fastq file\/pair. Currently it supports processing data from HiSeq 2000\/2500\/3000\/4000\, Nextseq 500\/550\, MiniSeq...and other Illumina 1.8 or newer formats.

============= ===========
Home          https://github.com/OpenGene/AfterQC
Versions      0.9.7, 0.9.6
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afterqc



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install afterqc

and update with::

   conda update afterqc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/afterqc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/afterqc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/afterqc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/afterqc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/afterqc
.. |docker| image:: https://quay.io/repository/biocontainers/afterqc/status
                :target: https://quay.io/repository/biocontainers/afterqc

