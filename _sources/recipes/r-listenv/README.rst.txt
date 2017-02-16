.. _`r-listenv`:

r-listenv
=========

|downloads|

List environments are environments that have list-like properties.  For instance, the elements of a list environment are ordered and can be accessed and iterated over using index subsetting, e.g. 'x <- listenv(a=1, b=2); for (i in seq_along(x)) x[[i]] <- x[[i]]^2; y <- as.list(x)'.

======== ===========
Home     https://github.com/HenrikBengtsson/listenv
Versions 0.5.0, 0.6.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-listenv
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-listenv

and update with::

   conda update r-listenv



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-listenv.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-listenv/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-listenv/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-listenv/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-listenv
.. |docker| image:: https://quay.io/repository/biocontainers/r-listenv/status
                :target: https://quay.io/repository/biocontainers/r-listenv


