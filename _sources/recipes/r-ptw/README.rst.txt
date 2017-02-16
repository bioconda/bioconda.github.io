.. _`r-ptw`:

r-ptw
=====

|downloads|

Parametric Time Warping aligns patterns, i.e. it aims to put corresponding features at the same locations. The algorithm searches for an optimal polynomial describing the warping. It is possible to align one sample to a reference, several samples to the same reference, or several samples to several references. One can choose between calculating individual warpings, or one global warping for a set of samples and one reference. Two optimization criteria are implemented: RMS (Root Mean Square error) and WCC (Weighted Cross Correlation). Both warping of peak profiles and of peak lists are supported.

======== ===========
Home     https://CRAN.R-project.org/package=ptw
Versions 1.9_11
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ptw
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ptw

and update with::

   conda update r-ptw



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ptw.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ptw/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ptw/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ptw/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ptw
.. |docker| image:: https://quay.io/repository/biocontainers/r-ptw/status
                :target: https://quay.io/repository/biocontainers/r-ptw


