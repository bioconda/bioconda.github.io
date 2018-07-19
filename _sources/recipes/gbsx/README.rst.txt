.. _`gbsx`:

gbsx
====

|downloads|

Toolkit for experimental design and demultiplexing genotyping by sequencing experiments

============= ===========
Home          https://github.com/GenomicsCoreLeuven/GBSX
Versions      1.3
License       GPL-3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx



Links         doi: :doi:`10.1186/s12859-015-0514-3`

============= ===========

Genotyping By Sequencing demultipleXing toolkit \(GBSX\) is a toolkit with an
inline barcode demultiplexer for usage in the analysis of single read or
paired\-end genotyping by sequence \(GBS\) data\, a barcode generator\, a barcode
discovery tool\, and a restriction enzyme predictor. GBSX can easily be
incorperated as a preceding analysis step for already deployed SNP pipelines.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install gbsx

and update with::

   conda update gbsx


Notes
-----
GBSX is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"gbsx\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"gbsx \-Xms512m \-Xmx1g\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/gbsx.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/gbsx/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/gbsx/README.html
.. |downloads| image:: https://anaconda.org/bioconda/gbsx/badges/downloads.svg
               :target: https://anaconda.org/bioconda/gbsx
.. |docker| image:: https://quay.io/repository/biocontainers/gbsx/status
                :target: https://quay.io/repository/biocontainers/gbsx

