.. _`r-fields`:

r-fields
========

|downloads|

For curve, surface and function fitting with an emphasis on splines, spatial data and spatial statistics. The major methods include cubic, and thin plate splines, Kriging and compact covariances for large data sets. The splines and Kriging methods are supported by functions that can determine the smoothing parameter (nugget and sill variance) and other covariance parameters by cross validation and also by restricted maximum likelihood. For Kriging there is an easy to use function that also estimates the correlation scale (range).  A major feature is that any covariance function implemented in R and following a simple fields format can be used for spatial prediction. There are also many useful functions for plotting and working with spatial data as images. This package also contains an implementation of sparse matrix methods for large spatial data sets and currently requires the sparse matrix (spam) package. Use help(fields) to get started and for an overview.  The fields source code is deliberately commented and provides useful explanations of numerical details in addition to the manual pages. The commented source code can be viewed by expanding the source code file (ending in tar.gz) and looking in the R subdirectory. Please cite fields along with its DOI in your publications!

======== ===========
Home     http://www.image.ucar.edu/fields
Versions 8.4_1
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fields
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fields

and update with::

   conda update r-fields



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fields.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fields/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fields/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fields/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fields
.. |docker| image:: https://quay.io/repository/biocontainers/r-fields/status
                :target: https://quay.io/repository/biocontainers/r-fields


