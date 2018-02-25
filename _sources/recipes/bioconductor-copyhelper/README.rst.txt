.. _`bioconductor-copyhelper`:

bioconductor-copyhelper
=======================

|downloads|

This package contains the helper files that are required to run the Bioconductor package CopywriteR\. It contains pre\-assembled 1kb bin GC\-content and mappability files for the reference genomes hg18\, hg19\, hg38\, mm9 and mm10\. In addition\, it contains a blacklist filter to remove regions that display CNV\. Files are stored as GRanges objects from the GenomicRanges Bioconductor package\.

======== ===========
Home     http://bioconductor.org/packages/3.6/data/experiment/html/CopyhelpeR.html
Versions 1.10.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyhelper

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-copyhelper

and update with::

   conda update bioconductor-copyhelper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-copyhelper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-copyhelper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-copyhelper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-copyhelper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-copyhelper
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-copyhelper/status
                :target: https://quay.io/repository/biocontainers/bioconductor-copyhelper

