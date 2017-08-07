.. _`gff3toembl`:

gff3toembl
==========

|downloads|

Submitting annotated genomes to EMBL is a very difficult and time consuming process. This software converts GFF3 files from the most commonly use prokaryote annotation tool Prokka into a format that is suitable for submission to EMBL. It has been used to prepare more than 30% of all annotated genomes in EMBL/GenBank.

======== ===========
Home     https://github.com/sanger-pathogens/gff3toembl/
Versions 1.1.4
License  GNU GENERAL PUBLIC LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toembl
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install gff3toembl

and update with::

   conda update gff3toembl



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/gff3toembl.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/gff3toembl/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/gff3toembl/README.html
.. |downloads| image:: https://anaconda.org/bioconda/gff3toembl/badges/downloads.svg
               :target: https://anaconda.org/bioconda/gff3toembl
.. |docker| image:: https://quay.io/repository/biocontainers/gff3toembl/status
                :target: https://quay.io/repository/biocontainers/gff3toembl


