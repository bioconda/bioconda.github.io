.. _`sra-tools`:

sra-tools
=========

|downloads|

The SRA Toolkit and SDK from NCBI is a collection of tools and libraries for using data in the INSDC Sequence Read Archives.

======== ===========
Home     https://github.com/ncbi/sra-tools
Versions 2.6.2, 2.6.3, 2.7.0, 2.8.0
License  Public Domain
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sra-tools
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install sra-tools

and update with::

   conda update sra-tools

Notes
-----

This package includes ncbi-vdb and ngs-sdk. After installation, you should run the configuration tool: ./vdb-config -i. This tool will setup your download/cache area for downloaded files and references.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/sra-tools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/sra-tools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/sra-tools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/sra-tools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/sra-tools
.. |docker| image:: https://quay.io/repository/biocontainers/sra-tools/status
                :target: https://quay.io/repository/biocontainers/sra-tools


