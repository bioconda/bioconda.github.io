.. _`r-downloader`:

r-downloader
============

|downloads|

Provides a wrapper for the download.file function, making it possible to download files over HTTPS on Windows, Mac OS X, and other Unix-like platforms. The RCurl package provides this functionality (and much more) but can be difficult to install because it must be compiled with external dependencies. This package has no external dependencies, so it is much easier to install.

======== ===========
Home     https://cran.rstudio.com/web/packages/downloader/index.html
Versions 0.0.4
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-downloader
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-downloader

and update with::

   conda update r-downloader



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-downloader.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-downloader/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-downloader/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-downloader/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-downloader
.. |docker| image:: https://quay.io/repository/biocontainers/r-downloader/status
                :target: https://quay.io/repository/biocontainers/r-downloader


