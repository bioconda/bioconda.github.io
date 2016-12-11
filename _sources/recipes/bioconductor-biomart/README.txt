.. _`bioconductor-biomart`:

bioconductor-biomart
====================

|downloads|

In recent years a wealth of biological data has become available in public data repositories. Easy access to these valuable data resources and firm integration with data analysis is needed for comprehensive bioinformatics data analysis.  biomaRt provides an interface to a growing collection of databases implementing the BioMart software suite (http://www.biomart.org). The package enables retrieval of large amounts of data in a uniform way without the need to know the underlying database schemas or write complex SQL queries. Examples of BioMart databases are Ensembl, COSMIC, Uniprot, HGNC, Gramene, Wormbase and dbSNP mapped to Ensembl. These major databases give biomaRt users direct access to a diverse set of data and enable a wide range of powerful online queries from gene annotation to database mining.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/biomaRt.html
Versions 2.26.0, 2.26.1, 2.27.0, 2.28.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-biomart

and update with::

   conda update bioconductor-biomart



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-biomart.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-biomart/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-biomart/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-biomart/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-biomart
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-biomart/status
                :target: https://quay.io/repository/biocontainers/bioconductor-biomart


