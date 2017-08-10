.. _`busco`:

busco
=====

|downloads|

BUSCO provides measures for quantitative assessment of genome assembly, gene set, and transcriptome completeness based on evolutionarily informed expectations of gene content from near-universal single-copy orthologs selected from OrthoDB.

======== ===========
Home     http://busco.ezlab.org/
Versions 1.2, 2.0, 2.0.1, 3.0.1, 3.0.2
License  GPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install busco

and update with::

   conda update busco

Notes
-----

An additional script, generate-busco-config.py, is installed with the package to generate a config file that has the correct paths to the dependencies used by busco that are also installed via conda.

|docker|

A Docker container is available at https://quay.io/repository/biocontainers/busco.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/busco/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/busco/README.html
.. |downloads| image:: https://anaconda.org/bioconda/busco/badges/downloads.svg
               :target: https://anaconda.org/bioconda/busco
.. |docker| image:: https://quay.io/repository/biocontainers/busco/status
                :target: https://quay.io/repository/biocontainers/busco


