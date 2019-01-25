.. _`bioconductor-sagenhaft`:

bioconductor-sagenhaft
======================

|downloads|

This package implements several functions useful for analysis of gene expression data by sequencing tags as done in SAGE \(Serial Analysis of Gene Expressen\) data\, i.e. extraction of a SAGE library from sequence files\, sequence error correction\, library comparison. Sequencing error correction is implementing using an Expectation Maximization Algorithm based on a Mixture Model of tag counts.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/sagenhaft.html
Versions      1.50.0, 1.48.0, 1.46.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-sagenhaft/meta.yaml



Links         biotools: :biotools:`sagenhaft`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sagenhaft

and update with::

   conda update bioconductor-sagenhaft



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sagenhaft.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sagenhaft/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sagenhaft
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sagenhaft/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sagenhaft

