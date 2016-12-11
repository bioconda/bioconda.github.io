.. _`r-future`:

r-future
========

|downloads|

A Future API for R is provided. In programming, a future is an abstraction for a value that may be available at some point in the future. The state of a future can either be unresolved or resolved. As soon as it is resolved, the value is available. Futures are useful constructs in for instance concurrent evaluation, e.g. parallel processing and distributed processing on compute clusters. The purpose of this package is to provide a lightweight interface for using futures in R. Functions 'future()' and 'value()' exist for creating futures and requesting their values, e.g. 'f <- future({ mandelbrot(-0.75, 0, side=3) })' and 'v <- value(f)'. The 'resolved()' function can be used to check if a future is resolved or not. An infix assignment operator '%<-%' exists for creating futures whose values are accessible by the assigned variables (as promises), e.g. 'v %<-% { mandelbrot(-0.75, 0, side=3) }'. This package implements synchronous "lazy" and "eager" futures, and asynchronous "multicore", "multisession" and ad hoc "cluster" futures. Globals variables and functions are automatically identified and exported. Required packages are attached in external R sessions whenever needed. All types of futures are designed to behave the same such that the exact same code work regardless of futures used or number of cores, background sessions or cluster nodes available. Additional types of futures are provided by other packages enhancing this package.

======== ===========
Home     https://github.com/HenrikBengtsson/future
Versions 0.9.0, 1.2.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-future
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-future

and update with::

   conda update r-future



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-future.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-future/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-future/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-future/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-future
.. |docker| image:: https://quay.io/repository/biocontainers/r-future/status
                :target: https://quay.io/repository/biocontainers/r-future


