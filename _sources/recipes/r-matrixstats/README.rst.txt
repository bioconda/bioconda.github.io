.. _`r-matrixstats`:

r-matrixstats
=============

|downloads|

High-performing functions operating on rows and columns of matrices, e.g. col / rowMedians(), col / rowRanks(), and col / rowSds().  Functions optimized per data type and for subsetted calculations such that both memory usage and processing time is minimized.  There are also optimized vector-based methods, e.g. binMeans(), madDiff() and weightedMedian().

======== ===========
Home     https://github.com/HenrikBengtsson/matrixStats
Versions 0.50.1, 0.51.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-matrixstats
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-matrixstats

and update with::

   conda update r-matrixstats



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-matrixstats.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-matrixstats/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-matrixstats/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-matrixstats/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-matrixstats
.. |docker| image:: https://quay.io/repository/biocontainers/r-matrixstats/status
                :target: https://quay.io/repository/biocontainers/r-matrixstats


