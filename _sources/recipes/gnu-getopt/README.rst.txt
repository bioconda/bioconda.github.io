.. _`gnu-getopt`:

gnu-getopt
==========

|downloads|

Command-line option parsing library

======== ===========
Home     http://software.frodo.looijaard.name/getopt/
Versions 1.1.6
License  GPLv2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install gnu-getopt

and update with::

   conda update gnu-getopt

Notes
-----

On Linux systems gnu-getopt is simply called 'getopt', however due to potential collision with the native BSD getopt on OSX, this binary is renamed 'gnu-getopt'.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/gnu-getopt.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/gnu-getopt/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/gnu-getopt/README.html
.. |downloads| image:: https://anaconda.org/bioconda/gnu-getopt/badges/downloads.svg
               :target: https://anaconda.org/bioconda/gnu-getopt
.. |docker| image:: https://quay.io/repository/biocontainers/gnu-getopt/status
                :target: https://quay.io/repository/biocontainers/gnu-getopt


