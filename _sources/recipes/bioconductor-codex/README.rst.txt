.. _`bioconductor-codex`:

bioconductor-codex
==================

|downloads|

A normalization and copy number variation calling procedure for whole exome DNA sequencing data. CODEX relies on the availability of multiple samples processed using the same sequencing pipeline for normalization\, and does not require matched controls. The normalization model in CODEX includes terms that specifically remove biases due to GC content\, exon length and targeting and amplification efficiency\, and latent systemic artifacts. CODEX also includes a Poisson likelihood\-based recursive segmentation procedure that explicitly models the count\-based exome sequencing data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/CODEX.html
Versions      1.12.0, 1.10.0, 1.8.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex



Links         biotools: :biotools:`codex`, doi: :doi:`10.1093/nar/gku1363`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-codex

and update with::

   conda update bioconductor-codex



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-codex.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-codex/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-codex/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-codex/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-codex
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-codex/status
                :target: https://quay.io/repository/biocontainers/bioconductor-codex

