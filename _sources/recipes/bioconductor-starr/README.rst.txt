.. _`bioconductor-starr`:

bioconductor-starr
==================

|downloads|

Starr facilitates the analysis of ChIP\-chip data\, in particular that of Affymetrix tiling arrays. The package provides functions for data import\, quality assessment\, data visualization and exploration. Furthermore\, it includes high\-level analysis features like association of ChIP signals with annotated features\, correlation analysis of ChIP signals and other genomic data \(e.g. gene expression\)\, peak\-finding with the CMARRT algorithm and comparative display of multiple clusters of ChIP\-profiles. It uses the basic Bioconductor classes ExpressionSet and probeAnno for maximum compatibility with other software on Bioconductor. All functions from Starr can be used to investigate preprocessed data from the Ringo package\, and vice versa. An important novel tool is the the automated generation of correct\, up\-to\-date microarray probe annotation \(bpmap\) files\, which relies on an efficient mapping of short sequences \(e.g. the probe sequences on a microarray\) to an arbitrary genome.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/Starr.html
Versions      1.32.0, 1.34.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starr



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-starr

and update with::

   conda update bioconductor-starr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-starr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-starr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-starr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-starr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-starr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-starr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-starr

