.. _`bioconductor-blima`:

bioconductor-blima
==================

|downloads|

Package blima includes several algorithms for the preprocessing of Illumina microarray data\. It focuses to the bead level analysis and provides novel approach to the quantile normalization of the vectors of unequal lengths\. It provides variety of the methods for background correction including background subtraction\, RMA like convolution and background outlier removal\. It also implements variance stabilizing transformation on the bead level\. There are also implemented methods for data summarization\. It also provides the methods for performing T\-tests on the detector \(bead\) level and on the probe level for differential expression testing\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/blima.html
Versions      1.10.0, 1.12.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-blima



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-blima

and update with::

   conda update bioconductor-blima



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-blima.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-blima/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-blima/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-blima/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-blima
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-blima/status
                :target: https://quay.io/repository/biocontainers/bioconductor-blima

