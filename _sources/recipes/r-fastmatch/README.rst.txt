.. _`r-fastmatch`:

r-fastmatch
===========

|downloads|

Package providing a fast match() replacement for cases that require repeated look-ups. It is slightly faster that R's built-in match() function on first match against a table, but extremely fast on any subsequent lookup as it keeps the hash table in memory.

======== ===========
Home     http://www.rforge.net/fastmatch
Versions 1.1_0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastmatch
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fastmatch

and update with::

   conda update r-fastmatch



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fastmatch.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fastmatch/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fastmatch/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fastmatch/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fastmatch
.. |docker| image:: https://quay.io/repository/biocontainers/r-fastmatch/status
                :target: https://quay.io/repository/biocontainers/r-fastmatch


