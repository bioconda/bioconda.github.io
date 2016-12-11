.. _`bmtagger`:

bmtagger
========

|downloads|

BMTagger aka Best Match Tagger is for removing human reads from metagenomics datasets

======== ===========
Home     ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
Versions 3.101
License  Public Domain
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtagger
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bmtagger

and update with::

   conda update bmtagger

Notes
-----

You may find it necessary to create a bmtagger.conf file to specify paired or single-end searching. The file should contain the line 'srprismopts="-b 100000000 -n 5 -R 0 -r 1 -M 7168"' along with '-p true' or '-p false' for paired, and single, respectively. This config file can be passed to bmtagger.sh via the '-C' option.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bmtagger.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bmtagger/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bmtagger/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bmtagger/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bmtagger
.. |docker| image:: https://quay.io/repository/biocontainers/bmtagger/status
                :target: https://quay.io/repository/biocontainers/bmtagger


