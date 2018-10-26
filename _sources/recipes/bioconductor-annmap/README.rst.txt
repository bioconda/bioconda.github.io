.. _`bioconductor-annmap`:

bioconductor-annmap
===================

|downloads|

annmap provides annotation mappings for Affymetrix exon arrays and coordinate based queries to support deep sequencing data analysis. Database access is hidden behind the API which provides a set of functions such as genesInRange\(\)\, geneToExon\(\)\, exonDetails\(\)\, etc. Functions to plot gene architecture and BAM file data are also provided. Underlying data are from Ensembl.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/annmap.html
Versions      1.18.0, 1.20.0, 1.22.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annmap



Links         biotools: :biotools:`annmap`, doi: :doi:`10.1093/nar/gkm779`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-annmap

and update with::

   conda update bioconductor-annmap



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-annmap.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-annmap/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-annmap/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-annmap/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-annmap
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-annmap/status
                :target: https://quay.io/repository/biocontainers/bioconductor-annmap

