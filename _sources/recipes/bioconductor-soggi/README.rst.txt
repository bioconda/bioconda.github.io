.. _`bioconductor-soggi`:

bioconductor-soggi
==================

|downloads|

The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/soGGi.html
Versions      1.12.0, 1.10.0, 1.8.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-soggi/meta.yaml



Links         biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-soggi

and update with::

   conda update bioconductor-soggi



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-soggi.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-soggi/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-soggi/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-soggi/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-soggi
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-soggi/status
                :target: https://quay.io/repository/biocontainers/bioconductor-soggi

