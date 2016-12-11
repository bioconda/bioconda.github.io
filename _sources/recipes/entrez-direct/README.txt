.. _`entrez-direct`:

entrez-direct
=============

|downloads|

Entrez Direct (EDirect) is an advanced method for accessing the NCBI's set of interconnected databases (publication, sequence, structure, gene, variation, expression, etc.) from a UNIX terminal window. Functions take search terms from command-line arguments. Individual operations are combined to build multi-step queries. Record retrieval and formatting normally complete the process.

======== ===========
Home     ftp://ftp.ncbi.nlm.nih.gov/entrez/entrezdirect/versions/2016-03-23/README
Versions 4.00
License  PUBLIC DOMAIN
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install entrez-direct

and update with::

   conda update entrez-direct



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/entrez-direct.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/entrez-direct/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/entrez-direct/README.html
.. |downloads| image:: https://anaconda.org/bioconda/entrez-direct/badges/downloads.svg
               :target: https://anaconda.org/bioconda/entrez-direct
.. |docker| image:: https://quay.io/repository/biocontainers/entrez-direct/status
                :target: https://quay.io/repository/biocontainers/entrez-direct


