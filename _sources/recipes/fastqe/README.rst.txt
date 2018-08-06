.. _`fastqe`:

fastqe
======

|downloads|

A emoji based bioinformatics command line tool

============= ===========
Home          https://github.com/lonsbio/fastqe
Versions      0.1.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe



============= ===========

The program reads one or more input FASTQ files.
For each file it computes the minimum\, maximum and mean FASTQ quality score at each position across all reads in a file.

For some reason\, it then represents these as emoji.

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install fastqe

and update with::

   conda update fastqe



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/fastqe.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/fastqe/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/fastqe/README.html
.. |downloads| image:: https://anaconda.org/bioconda/fastqe/badges/downloads.svg
               :target: https://anaconda.org/bioconda/fastqe
.. |docker| image:: https://quay.io/repository/biocontainers/fastqe/status
                :target: https://quay.io/repository/biocontainers/fastqe

