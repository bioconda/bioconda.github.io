.. _`bioconductor-generegionscan`:

bioconductor-generegionscan
===========================

|downloads|

A package with focus on analysis of discrete regions of the genome. This package is useful for investigation of one or a few genes using Affymetrix data\, since it will extract probe level data using the Affymetrix Power Tools application and wrap these data into a ProbeLevelSet. A ProbeLevelSet directly extends the expressionSet\, but includes additional information about the sequence of each probe and the probe set it is derived from. The package includes a number of functions used for plotting these probe level data as a function of location along sequences of mRNA\-strands. This can be used for analysis of variable splicing\, and is especially well suited for use with exon\-array data.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/GeneRegionScan.html
Versions      1.36.0, 1.34.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generegionscan



Links         biotools: :biotools:`generegionscan`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-generegionscan

and update with::

   conda update bioconductor-generegionscan



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-generegionscan.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-generegionscan/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-generegionscan/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-generegionscan/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-generegionscan
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-generegionscan/status
                :target: https://quay.io/repository/biocontainers/bioconductor-generegionscan

