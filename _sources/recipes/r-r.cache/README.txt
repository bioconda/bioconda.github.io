.. _`r-r.cache`:

r-r.cache
=========

|downloads|

Memoization can be used to speed up repetitive and computational expensive function calls.  The first time a function that implements memoization is called the results are stored in a cache memory.  The next time the function is called with the same set of parameters, the results are momentarily retrieved from the cache avoiding repeating the calculations.  With this package, any R object can be cached in a key-value storage where the key can be an arbitrary set of R objects.  The cache memory is persistent (on the file system).

======== ===========
Home     https://github.com/HenrikBengtsson/R.cache
Versions 0.12.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r.cache
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-r.cache

and update with::

   conda update r-r.cache



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-r.cache.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-r.cache/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-r.cache/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-r.cache/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-r.cache
.. |docker| image:: https://quay.io/repository/biocontainers/r-r.cache/status
                :target: https://quay.io/repository/biocontainers/r-r.cache


