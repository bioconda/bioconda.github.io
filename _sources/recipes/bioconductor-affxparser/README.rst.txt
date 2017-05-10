.. _`bioconductor-affxparser`:

bioconductor-affxparser
=======================

|downloads|

Package for parsing Affymetrix files (CDF, CEL, CHP, BPMAP, BAR).  It provides methods for fast and memory efficient parsing of Affymetrix files using the Affymetrix' Fusion SDK.  Both ASCII- and binary-based files are supported.  Currently, there are methods for reading chip definition file (CDF) and a cell intensity file (CEL).  These files can be read either in full or in part.  For example, probe signals from a few probesets can be extracted very quickly from a set of CEL files into a convenient list structure.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/affxparser.html
Versions 1.48.0
License  LGPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affxparser
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-affxparser

and update with::

   conda update bioconductor-affxparser



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-affxparser.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-affxparser/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-affxparser/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-affxparser/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-affxparser
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-affxparser/status
                :target: https://quay.io/repository/biocontainers/bioconductor-affxparser


