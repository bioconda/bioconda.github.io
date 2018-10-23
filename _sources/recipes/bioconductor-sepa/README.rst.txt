.. _`bioconductor-sepa`:

bioconductor-sepa
=================

|downloads|

Given single\-cell RNA\-seq data and true experiment time of cells or pseudo\-time cell ordering\, SEPA provides convenient functions for users to assign genes into different gene expression patterns such as constant\, monotone increasing and increasing then decreasing. SEPA then performs GO enrichment analysis to analysis the functional roles of genes with same or similar patterns.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/SEPA.html
Versions      1.10.0, 1.6.0, 1.8.0
License       GPL(>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepa



Links         biotools: :biotools:`sepa`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sepa

and update with::

   conda update bioconductor-sepa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sepa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sepa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sepa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sepa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sepa
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sepa/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sepa

