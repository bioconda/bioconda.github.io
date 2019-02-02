.. _`bioconductor-padog`:

bioconductor-padog
==================

|downloads|

This package implements a general purpose gene set analysis method called PADOG that downplays the importance of genes that apear often accross the sets of genes to be analyzed. The package provides also a benchmark for gene set analysis methods in terms of sensitivity and ranking using 24 public datasets from KEGGdzPathwaysGEO package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/PADOG.html
Versions      1.24.0, 1.22.0, 1.20.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-padog/meta.yaml



Links         biotools: :biotools:`padog`, doi: :doi:`10.1186/1471-2105-13-136`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-padog

and update with::

   conda update bioconductor-padog



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-padog.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-padog/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-padog/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-padog/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-padog
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-padog/status
                :target: https://quay.io/repository/biocontainers/bioconductor-padog

