.. _`bioconductor-dnabarcodes`:

bioconductor-dnabarcodes
========================

|downloads|

The package offers a function to create DNA barcode sets capable of correcting insertion\, deletion\, and substitution errors. Existing barcodes can be analysed regarding their minimal\, maximal and average distances between barcodes. Finally\, reads that start with a \(possibly mutated\) barcode can be demultiplexed\, i.e.\, assigned to their original reference barcode.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/DNABarcodes.html
Versions      1.10.0, 1.8.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnabarcodes



Links         biotools: :biotools:`dnabarcodes`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dnabarcodes

and update with::

   conda update bioconductor-dnabarcodes



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dnabarcodes.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dnabarcodes/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dnabarcodes/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dnabarcodes
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dnabarcodes

