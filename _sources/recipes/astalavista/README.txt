.. _`astalavista`:

astalavista
===========

|downloads|

AStalavista is a computer program to extract alternative splicing (AS) events from a given genomic annotation of exon-intron gene coordinates. By comparing all given transcripts, AStalavista detects the variations in their splicing structure and identify all AS events (like exon skipping, alternate donor, etc) by assigning to each of them an AS code.

======== ===========
Home     http://sammeth.net/confluence/display/ASTA/Home
Versions 3.2
License  BSD
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install astalavista

and update with::

   conda update astalavista



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/astalavista.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/astalavista/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/astalavista/README.html
.. |downloads| image:: https://anaconda.org/bioconda/astalavista/badges/downloads.svg
               :target: https://anaconda.org/bioconda/astalavista
.. |docker| image:: https://quay.io/repository/biocontainers/astalavista/status
                :target: https://quay.io/repository/biocontainers/astalavista


