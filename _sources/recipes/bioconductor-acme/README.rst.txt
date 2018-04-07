.. _`bioconductor-acme`:

bioconductor-acme
=================

|downloads|

ACME \(Algorithms for Calculating Microarray Enrichment\) is a set of tools for analysing tiling array ChIP\/chip\, DNAse hypersensitivity\, or other experiments that result in regions of the genome showing \"enrichment\".  It does not rely on a specific array technology \(although the array should be a \"tiling\" array\)\, is very general \(can be applied in experiments resulting in regions of enrichment\)\, and is very insensitive to array noise or normalization methods.  It is also very fast and can be applied on whole\-genome tiling array experiments quite easily with enough memory.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/ACME.html
Versions      2.32.0, 2.34.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acme



Links         biotools: :biotools:`acme`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-acme

and update with::

   conda update bioconductor-acme



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-acme.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-acme/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-acme/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-acme/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-acme
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-acme/status
                :target: https://quay.io/repository/biocontainers/bioconductor-acme

