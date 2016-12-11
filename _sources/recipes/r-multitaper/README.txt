.. _`r-multitaper`:

r-multitaper
============

|downloads|

Implements multitaper spectral analysis using discrete prolate spheroidal sequences (Slepians) and sine tapers. It includes an adaptive weighted multitaper spectral estimate, a coherence estimate, Thomson's Harmonic F-test, and complex demodulation. The Slepians sequences are generated efficiently using a tridiagonal matrix solution, and jackknifed confidence intervals are available for most estimates.

======== ===========
Home     https://cran.r-project.org/web/packages/multitaper/index.html
Versions 1.0.11
License  GPL-2|GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-multitaper
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-multitaper

and update with::

   conda update r-multitaper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-multitaper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-multitaper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-multitaper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-multitaper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-multitaper
.. |docker| image:: https://quay.io/repository/biocontainers/r-multitaper/status
                :target: https://quay.io/repository/biocontainers/r-multitaper


