.. _`bioconductor-fastseg`:

bioconductor-fastseg
====================

|downloads|

fastseg implements a very fast and efficient segmentation algorithm. It has similar functionality as DNACopy (Olshen and Venkatraman 2004), but is considerably faster and more flexible. fastseg can segment data from DNA microarrays and data from next generation sequencing for example to detect copy number segments. Further it can segment data from RNA microarrays like tiling arrays to identify transcripts. Most generally, it can segment data given as a matrix or as a vector. Various data formats can be used as input to fastseg like expression set objects for microarrays or GRanges for sequencing data. The segmentation criterion of fastseg is based on a statistical test in a Bayesian framework, namely the cyber t-test (Baldi 2001). The speed-up arises from the facts, that sampling is not necessary in for fastseg and that a dynamic programming approach is used for calculation of the segments' first and higher order moments.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/fastseg.html
Versions 1.20.0
License  LGPL (>= 2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastseg
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-fastseg

and update with::

   conda update bioconductor-fastseg



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-fastseg.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-fastseg/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-fastseg/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-fastseg/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-fastseg
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-fastseg/status
                :target: https://quay.io/repository/biocontainers/bioconductor-fastseg


