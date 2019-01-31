.. _`bioconductor-rgsepd`:

bioconductor-rgsepd
===================

|downloads|

R\/GSEPD is a bioinformatics package for R to help disambiguate transcriptome samples \(a matrix of RNA\-Seq counts at RefSeq IDs\) by automating differential expression \(with DESeq2\)\, then gene set enrichment \(with GOSeq\)\, and finally a N\-dimensional projection to quantify in which ways each sample is like either treatment group.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/rgsepd.html
Versions      1.12.0, 1.10.0, 1.8.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-rgsepd/meta.yaml



Links         biotools: :biotools:`rgsepd`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rgsepd

and update with::

   conda update bioconductor-rgsepd



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rgsepd.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rgsepd/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rgsepd/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rgsepd
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rgsepd/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rgsepd

