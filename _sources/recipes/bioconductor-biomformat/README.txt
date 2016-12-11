.. _`bioconductor-biomformat`:

bioconductor-biomformat
=======================

|downloads|

This is an R package for interfacing with the BIOM format. This package includes basic tools for reading biom-format files, accessing and subsetting data tables from a biom object (which is more complex than a single table), as well as limited support for writing a biom-object back to a biom-format file. The design of this API is intended to match the python API and other tools included with the biom-format project, but with a decidedly "R flavor" that should be familiar to R users. This includes S4 classes and methods, as well as extensions of common core functions/methods.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/biomformat.html
Versions 1.0.2
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-biomformat

and update with::

   conda update bioconductor-biomformat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-biomformat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-biomformat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-biomformat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-biomformat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-biomformat
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-biomformat/status
                :target: https://quay.io/repository/biocontainers/bioconductor-biomformat


