.. _`r-inlinedocs`:

r-inlinedocs
============

|downloads|

Generates Rd files from R source code with comments. The main features of the default syntax are that (1) docs are defined in comments near the relevant code, (2) function argument names are not repeated in comments, and (3) examples are defined in R code, not comments. It is also easy to define a new syntax.

======== ===========
Home     http://inlinedocs.r-forge.r-project.org
Versions 2013.9.3
License  GPL-2 | GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-inlinedocs
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-inlinedocs

and update with::

   conda update r-inlinedocs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-inlinedocs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-inlinedocs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-inlinedocs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-inlinedocs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-inlinedocs
.. |docker| image:: https://quay.io/repository/biocontainers/r-inlinedocs/status
                :target: https://quay.io/repository/biocontainers/r-inlinedocs


