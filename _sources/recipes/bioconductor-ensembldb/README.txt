.. _`bioconductor-ensembldb`:

bioconductor-ensembldb
======================

|downloads|

The package provides functions to create and use transcript centric annotation databases/packages. The annotation for the databases are directly fetched from Ensembl using their Perl API. The functionality and data is similar to that of the TxDb packages from the GenomicFeatures package, but, in addition to retrieve all gene/transcript models and annotations from the database, the ensembldb package provides also a filter framework allowing to retrieve annotations for specific entries like genes encoded on a chromosome region or transcript models of lincRNA genes.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/ensembldb.html
Versions 1.6.0
License  LGPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensembldb
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ensembldb

and update with::

   conda update bioconductor-ensembldb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ensembldb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ensembldb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ensembldb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ensembldb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ensembldb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ensembldb


