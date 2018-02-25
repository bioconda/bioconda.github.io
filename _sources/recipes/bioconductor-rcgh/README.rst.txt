.. _`bioconductor-rcgh`:

bioconductor-rcgh
=================

|downloads|

A comprehensive pipeline for analyzing and interactively visualizing genomic profiles generated through commercial or custom aCGH arrays\. As inputs\, rCGH supports Agilent dual\-color Feature Extraction files \(\.txt\)\, from 44 to 400K\, Affymetrix SNP6\.0 and cytoScanHD probeset\.txt\, cychp\.txt\, and cnchp\.txt files exported from ChAS or Affymetrix Power Tools\. rCGH also supports custom arrays\, provided data complies with the expected format\. This package takes over all the steps required for individual genomic profiles analysis\, from reading files to profiles segmentation and gene annotations\. This package also provides several visualization functions \(static or interactive\) which facilitate individual profiles interpretation\. Input files can be in compressed format\, e\.g\. \.bz2 or \.gz\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/rCGH.html
Versions 1.8.1
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcgh

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rcgh

and update with::

   conda update bioconductor-rcgh



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rcgh.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rcgh/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rcgh/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rcgh/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rcgh
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rcgh/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rcgh

