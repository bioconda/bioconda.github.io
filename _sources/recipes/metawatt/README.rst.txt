.. _`metawatt`:

metawatt
========

|downloads|

MetaWatt is a metagenomic binning tool

============= ===========
Home          https://sourceforge.net/projects/metawatt/
Versions      3.5.3
License       AFL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawatt



============= ===========

The Metawatt binner is a graphical binning tool that makes use of
multivariate statistics of tetranucleotide frequencies and differential
coverage based binning\. It also performs taxonomic assessment of binning
quality \(via diamond BLASTx\)\. Created bins can be edited and exported as
fasta\. The Metawatt is implemented in Java SWING and minimally depends on
Diamond\, HMMer3\.1\, BBMap\, Prodigal and the Batik library for the export of
SVG graphics\.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install metawatt

and update with::

   conda update metawatt


Notes
-----
metawatt \-\-help


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/metawatt.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/metawatt/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/metawatt/README.html
.. |downloads| image:: https://anaconda.org/bioconda/metawatt/badges/downloads.svg
               :target: https://anaconda.org/bioconda/metawatt
.. |docker| image:: https://quay.io/repository/biocontainers/metawatt/status
                :target: https://quay.io/repository/biocontainers/metawatt

