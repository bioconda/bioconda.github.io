.. _`r-r.filesets`:

r-r.filesets
============

|downloads|

A file set refers to a set of files located in one or more directories on the file system.  This package provides classes and methods to locate, setup, subset, navigate and iterate such sets.  The API is designed such that these classes can be extended via inheritance to provide a richer API for special file formats.  Moreover, a specific name format is defined such that filenames and directories can be considered to have full names which consists of a name followed by comma-separated tags.  This adds additional flexibility to identify file sets and individual files.  NOTE: This package's API should be considered to be in an beta stage.  Its main purpose is currently to support the aroma.* packages, where it is one of the main core components; if you decide to build on top of this package, please contact the author first.

======== ===========
Home     https://github.com/HenrikBengtsson/R.filesets, http://www.aroma-project.org/
Versions 2.10.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r.filesets
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-r.filesets

and update with::

   conda update r-r.filesets



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-r.filesets.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-r.filesets/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-r.filesets/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-r.filesets/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-r.filesets
.. |docker| image:: https://quay.io/repository/biocontainers/r-r.filesets/status
                :target: https://quay.io/repository/biocontainers/r-r.filesets


