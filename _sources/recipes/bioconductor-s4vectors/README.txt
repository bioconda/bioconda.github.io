.. _`bioconductor-s4vectors`:

bioconductor-s4vectors
======================

|downloads|

The S4Vectors package defines the Vector and List virtual classes and a set of generic functions that extend the semantic of ordinary vectors and lists in R. Package developers can easily implement vector-like or list-like objects as concrete subclasses of Vector or List. In addition, a few low-level concrete subclasses of general interest (e.g. DataFrame, Rle, and Hits) are implemented in the S4Vectors package itself (many more are implemented in the IRanges package and in other Bioconductor infrastructure packages).

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/S4Vectors.html
Versions 0.10.3, 0.12.0, 0.6.6, 0.8.0, 0.8.1, 0.8.11, 0.8.5, 0.8.7, 0.9.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4vectors
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-s4vectors

and update with::

   conda update bioconductor-s4vectors



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-s4vectors.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-s4vectors/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-s4vectors/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-s4vectors/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-s4vectors
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-s4vectors/status
                :target: https://quay.io/repository/biocontainers/bioconductor-s4vectors


