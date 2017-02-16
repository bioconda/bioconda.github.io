.. _`r-aroma.apd`:

r-aroma.apd
===========

|downloads|

DEPRECATED. Do not start building new projects based on this package. (The (in-house) APD file format was initially developed to store Affymetrix probe-level data, e.g. normalized CEL intensities.  Chip types can be added to APD file and similar to methods in the affxparser package, this package provides methods to read APDs organized by units (probesets).  In addition, the probe elements can be arranged optimally such that the elements are guaranteed to be read in order when, for instance, data is read unit by unit.  This speeds up the read substantially.  This package is supporting the Aroma framework and should not be used elsewhere.)

======== ===========
Home     URL: http://www.aroma-project.org/, https://github.com/HenrikBengtsson/aroma.apd
Versions 0.6.0
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.apd
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-aroma.apd

and update with::

   conda update r-aroma.apd



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-aroma.apd.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-aroma.apd/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-aroma.apd/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-aroma.apd/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-aroma.apd
.. |docker| image:: https://quay.io/repository/biocontainers/r-aroma.apd/status
                :target: https://quay.io/repository/biocontainers/r-aroma.apd


