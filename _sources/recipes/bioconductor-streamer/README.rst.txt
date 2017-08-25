.. _`bioconductor-streamer`:

bioconductor-streamer
=====================

|downloads|

Large data files can be difficult to work with in R, where data generally resides in memory. This package encourages a style of programming where data is 'streamed' from disk into R via a `producer' and through a series of `consumers' that, typically reduce the original data to a manageable size. The package provides useful Producer and Consumer stream components for operations such as data input, sampling, indexing, and transformation; see package?Streamer for details.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/Streamer.html
Versions 1.22.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-streamer
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-streamer

and update with::

   conda update bioconductor-streamer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-streamer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-streamer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-streamer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-streamer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-streamer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-streamer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-streamer


