.. _`bioconductor-rain`:

bioconductor-rain
=================

|downloads|

This package uses non-parametric methods to detect rhythms in time series. It deals with outliers, missing values and is optimized for time series comprising 10-100 measurements. As it does not assume expect any distinct waveform it is optimal or detecting oscillating behavior (e.g. circadian or cell cycle) in e.g. genome- or proteome-wide biological measurements such as: micro arrays, proteome mass spectrometry, or metabolome measurements.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/rain.html
Versions 1.10.0, 1.12.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rain
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rain

and update with::

   conda update bioconductor-rain



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rain.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rain/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rain/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rain/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rain
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rain/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rain


