.. _`fastx_toolkit`:

fastx_toolkit
=============

|downloads|

The FASTX\-Toolkit is a collection of command line tools for Short\-Reads FASTA\/FASTQ files preprocessing\.
Next\-Generation sequencing machines usually produce FASTA or FASTQ files\, containing multiple short\-reads sequences \(possibly with quality information\)\.
The main processing of such FASTA\/FASTQ files is mapping \(aka aligning\) the sequences to reference genomes or other databases using specialized programs\. Example of such mapping programs are\: Blat\, SHRiMP\, LastZ\, MAQ and many many others\.
However\, it is sometimes more productive to preprocess the FASTA\/FASTQ files before mapping the sequences to the genome \- manipulating the sequences to produce better mapping results\.
The FASTX\-Toolkit tools perform some of these preprocessing tasks\.

======== ===========
Home     https://github.com/agordon/fastx_toolkit
Versions 0.0.14
License  AGPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install fastx_toolkit

and update with::

   conda update fastx_toolkit



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/fastx_toolkit.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/fastx_toolkit/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/fastx_toolkit/README.html
.. |downloads| image:: https://anaconda.org/bioconda/fastx_toolkit/badges/downloads.svg
               :target: https://anaconda.org/bioconda/fastx_toolkit
.. |docker| image:: https://quay.io/repository/biocontainers/fastx_toolkit/status
                :target: https://quay.io/repository/biocontainers/fastx_toolkit

