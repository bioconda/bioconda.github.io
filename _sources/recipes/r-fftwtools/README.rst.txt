.. _`r-fftwtools`:

r-fftwtools
===========

|downloads|

Provides a wrapper for several FFTW functions. This package provides access to the two-dimensional FFT, the multivariate FFT, and the one-dimensional real to complex FFT using FFTW3. The package includes the functions fftw and mvfftw which are designed to mimic the functionality of the R functions fft and mvfft. The FFT functions have a parameter that allows them to not return the redundant complex conjugate when the input is real data. 

======== ===========
Home     http://github.com/krahim/fftwtools
Versions 0.9.7
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fftwtools
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fftwtools

and update with::

   conda update r-fftwtools



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fftwtools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fftwtools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fftwtools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fftwtools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fftwtools
.. |docker| image:: https://quay.io/repository/biocontainers/r-fftwtools/status
                :target: https://quay.io/repository/biocontainers/r-fftwtools


