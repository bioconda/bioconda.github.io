.. _`bioconductor-pkgdeptools`:

bioconductor-pkgdeptools
========================

|downloads|

This package provides tools for computing and analyzing dependency relationships among R packages.  It provides tools for building a graph-based representation of the dependencies among all packages in a list of CRAN-style package repositories.  There are also utilities for computing installation order of a given package.  If the RCurl package is available, an estimate of the download size required to install a given package and its dependencies can be obtained.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/pkgDepTools.html
Versions 1.42.0, 1.44.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pkgdeptools
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pkgdeptools

and update with::

   conda update bioconductor-pkgdeptools



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pkgdeptools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pkgdeptools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pkgdeptools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pkgdeptools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pkgdeptools
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pkgdeptools/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pkgdeptools


