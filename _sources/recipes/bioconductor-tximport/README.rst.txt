.. _`bioconductor-tximport`:

bioconductor-tximport
=====================

|downloads|

Imports transcript-level abundance, estimated counts and transcript lengths, and summarizes into matrices for use with downstream gene-level analysis packages. Average transcript length, weighted by sample-specific transcript abundance estimates, is provided as a matrix which can be used as an offset for different expression of gene-level counts.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/tximport.html
Versions 1.0.3
License  GPL (>=2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximport
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tximport

and update with::

   conda update bioconductor-tximport



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tximport.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tximport/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tximport/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tximport/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tximport
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tximport/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tximport


