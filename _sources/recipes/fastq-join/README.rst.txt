.. _`fastq-join`:

fastq-join
==========

|downloads|

Similar to audy's stitch program, but in C, more efficient and supports some automatic benchmarking and tuning. It uses the same "squared distance for anchored alignment" as other tools.

======== ===========
Home     https://github.com/brwnj/fastq-join
Versions 1.3.1
License  MIT
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-join
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install fastq-join

and update with::

   conda update fastq-join



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/fastq-join.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/fastq-join/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/fastq-join/README.html
.. |downloads| image:: https://anaconda.org/bioconda/fastq-join/badges/downloads.svg
               :target: https://anaconda.org/bioconda/fastq-join
.. |docker| image:: https://quay.io/repository/biocontainers/fastq-join/status
                :target: https://quay.io/repository/biocontainers/fastq-join


