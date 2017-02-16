.. _`sga`:

sga
===

|downloads|

SGA - String Graph Assembler. SGA is a de novo assembler for DNA sequence reads. It is based on Gene Myers string graph formulation of assembly and uses the FM-index/Burrows-Wheeler transform to efficiently find overlaps between sequence reads.

======== ===========
Home     https://github.com/jts/sga
Versions 0.10.13
License  GPLv3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install sga

and update with::

   conda update sga



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/sga.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/sga/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/sga/README.html
.. |downloads| image:: https://anaconda.org/bioconda/sga/badges/downloads.svg
               :target: https://anaconda.org/bioconda/sga
.. |docker| image:: https://quay.io/repository/biocontainers/sga/status
                :target: https://quay.io/repository/biocontainers/sga


