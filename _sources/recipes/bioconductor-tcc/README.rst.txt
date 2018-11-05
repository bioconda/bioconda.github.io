.. _`bioconductor-tcc`:

bioconductor-tcc
================

|downloads|

This package provides a series of functions for performing differential expression analysis from RNA\-seq count data using robust normalization strategy \(called DEGES\). The basic idea of DEGES is that potential differentially expressed genes or transcripts \(DEGs\) among compared samples should be removed before data normalization to obtain a well\-ranked gene list where true DEGs are top\-ranked and non\-DEGs are bottom ranked. This can be done by performing a multi\-step normalization strategy \(called DEGES for DEG elimination strategy\). A major characteristic of TCC is to provide the robust normalization methods for several kinds of count data \(two\-group with or without replicates\, multi\-group\/multi\-factor\, and so on\) by virtue of the use of combinations of functions in depended packages.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/TCC.html
Versions      1.18.0, 1.20.1
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcc



Links         biotools: :biotools:`tcc`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tcc

and update with::

   conda update bioconductor-tcc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tcc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tcc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tcc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tcc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tcc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tcc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tcc

