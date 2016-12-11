.. _`r-r.huge`:

r-r.huge
========

|downloads|

DEPRECATED. Do not start building new projects based on this package. Cross-platform alternatives are the following packages: bigmemory (CRAN), ff (CRAN), BufferedMatrix (Bioconductor).  The main usage of it was inside the aroma.affymetrix package. (The package currently provides a class representing a matrix where the actual data is stored in a binary format on the local file system.  This way the size limit of the data is set by the file system and not the memory.)

======== ===========
Home     https://github.com/HenrikBengtsson/R.huge
Versions 0.9.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r.huge
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-r.huge

and update with::

   conda update r-r.huge



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-r.huge.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-r.huge/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-r.huge/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-r.huge/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-r.huge
.. |docker| image:: https://quay.io/repository/biocontainers/r-r.huge/status
                :target: https://quay.io/repository/biocontainers/r-r.huge


