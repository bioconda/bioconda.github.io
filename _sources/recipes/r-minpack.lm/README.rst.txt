.. _`r-minpack.lm`:

r-minpack.lm
============

|downloads|

The nls.lm function provides an R interface to lmder and lmdif from the MINPACK library, for solving nonlinear least-squares problems by a modification of the Levenberg-Marquardt algorithm, with support for lower and upper parameter bounds.  The implementation can be used via nls-like calls using the nlsLM function.  

======== ===========
Home     https://CRAN.R-project.org/package=minpack.lm
Versions 1.2_1
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minpack.lm
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-minpack.lm

and update with::

   conda update r-minpack.lm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-minpack.lm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-minpack.lm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-minpack.lm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-minpack.lm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-minpack.lm
.. |docker| image:: https://quay.io/repository/biocontainers/r-minpack.lm/status
                :target: https://quay.io/repository/biocontainers/r-minpack.lm


