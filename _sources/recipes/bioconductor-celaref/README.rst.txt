.. _`bioconductor-celaref`:

bioconductor-celaref
====================

|downloads|

After the clustering step of a single\-cell RNAseq experiment\, this package aims to suggest labels\/cell types for the clusters\, on the basis of similarity to a reference dataset. It requires a table of read counts per cell per gene\, and a list of the cells belonging to each of the clusters\, \(for both test and reference data\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/celaref.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celaref



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-celaref

and update with::

   conda update bioconductor-celaref



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-celaref.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-celaref/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-celaref/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-celaref/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-celaref
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-celaref/status
                :target: https://quay.io/repository/biocontainers/bioconductor-celaref

