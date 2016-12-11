.. _`r-batch`:

r-batch
=======

|downloads|

Functions to allow you to easily pass command-line arguments into R, and functions to aid in submitting your R code in parallel on a cluster and joining the results afterward (e.g. multiple parameter values for simulations running in parallel, splitting up a permutation test in parallel, etc.). See `parseCommandArgs(...)' for the main example of how to use this package.

======== ===========
Home     http://sites.google.com/site/thomashoffmannproject/
Versions 1.1_4
License  GPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-batch
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-batch

and update with::

   conda update r-batch



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-batch.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-batch/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-batch/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-batch/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-batch
.. |docker| image:: https://quay.io/repository/biocontainers/r-batch/status
                :target: https://quay.io/repository/biocontainers/r-batch


