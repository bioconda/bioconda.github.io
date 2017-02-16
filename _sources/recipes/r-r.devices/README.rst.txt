.. _`r-r.devices`:

r-r.devices
===========

|downloads|

Functions for creating plots and image files in a unified way regardless of output format (EPS, PDF, PNG, SVG, TIFF, WMF, etc.). Default device options as well as scales and aspect ratios are controlled in a uniform way across all device types. Switching output format requires minimal changes in code. This package is ideal for large-scale batch processing, because it will never leave open graphics devices or incomplete image files behind, even on errors or user interrupts.

======== ===========
Home     https://github.com/HenrikBengtsson/R.devices
Versions 2.15.1
License  LGPL (>= 2.1)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r.devices
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-r.devices

and update with::

   conda update r-r.devices



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-r.devices.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-r.devices/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-r.devices/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-r.devices/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-r.devices
.. |docker| image:: https://quay.io/repository/biocontainers/r-r.devices/status
                :target: https://quay.io/repository/biocontainers/r-r.devices


