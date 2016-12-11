.. _`r-jsonlite`:

r-jsonlite
==========

|downloads|

A fast JSON parser and generator optimized for statistical data and the web. Started out as a fork of 'RJSONIO', but has been completely rewritten in recent versions. The package offers flexible, robust, high performance tools for working with JSON in R and is particularly powerful for building pipelines and interacting with a web API. The implementation is based on the mapping described in the vignette (Ooms, 2014). In addition to converting JSON data from/to R objects, 'jsonlite' contains functions to stream, validate, and prettify JSON data. The unit tests included with the package verify that all edge cases are encoded and decoded consistently for use with dynamic data in systems and applications.

======== ===========
Home     http://arxiv.org/abs/1403.2805, https://www.opencpu.org/posts/jsonlite-a-smarter-json-encoder
Versions 0.9.19
License  MIT + file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jsonlite
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-jsonlite

and update with::

   conda update r-jsonlite



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-jsonlite.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-jsonlite/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-jsonlite/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-jsonlite/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-jsonlite
.. |docker| image:: https://quay.io/repository/biocontainers/r-jsonlite/status
                :target: https://quay.io/repository/biocontainers/r-jsonlite


