.. _`fastq-multx`:

fastq-multx
===========

|downloads|

Demultiplexes a fastq. Capable of auto-determining barcode id's based on a master set fields. Keeps multiple reads in-sync during demultiplexing. Can verify that the reads are in-sync as well, and fail if they're not.

======== ===========
Home     https://github.com/brwnj/fastq-multx
Versions 1.3.0
License  MIT
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install fastq-multx

and update with::

   conda update fastq-multx



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/fastq-multx.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/fastq-multx/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/fastq-multx/README.html
.. |downloads| image:: https://anaconda.org/bioconda/fastq-multx/badges/downloads.svg
               :target: https://anaconda.org/bioconda/fastq-multx
.. |docker| image:: https://quay.io/repository/biocontainers/fastq-multx/status
                :target: https://quay.io/repository/biocontainers/fastq-multx


