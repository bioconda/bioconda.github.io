.. _`bioconductor-expressionatlas`:

bioconductor-expressionatlas
============================

|downloads|

This package is for searching for datasets in EMBL\-EBI Expression Atlas\, and downloading them into R for further analysis. Each Expression Atlas dataset is represented as a SimpleList object with one element per platform. Sequencing data is contained in a SummarizedExperiment object\, while microarray data is contained in an ExpressionSet or MAList object.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ExpressionAtlas.html
Versions      1.10.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-expressionatlas/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-expressionatlas

and update with::

   conda update bioconductor-expressionatlas



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-expressionatlas.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-expressionatlas/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-expressionatlas
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-expressionatlas/status
                :target: https://quay.io/repository/biocontainers/bioconductor-expressionatlas

