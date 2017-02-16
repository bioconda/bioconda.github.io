.. _`bioconductor-chipseeker`:

bioconductor-chipseeker
=======================

|downloads|

This package implements functions to retrieve the nearest genes around the peak, annotate genomic region of the peak, statstical methods for estimate the significance of overlap among ChIP peak data sets, and incorporate GEO database for user to compare the own dataset with those deposited in database. The comparison can be used to infer cooperative regulation and thus can be used to generate hypotheses. Several visualization functions are implemented to summarize the coverage of the peak experiment, average profile and heatmap of peaks binding to TSS regions, genomic annotation, distance to TSS, and overlap of peaks or genes.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/ChIPseeker.html
Versions 1.10.0, 1.6.6
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseeker
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-chipseeker

and update with::

   conda update bioconductor-chipseeker



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-chipseeker.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-chipseeker/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-chipseeker/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-chipseeker
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-chipseeker/status
                :target: https://quay.io/repository/biocontainers/bioconductor-chipseeker


