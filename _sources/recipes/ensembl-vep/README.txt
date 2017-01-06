.. _`ensembl-vep`:

ensembl-vep
===========

|downloads|

The VEP determines the effect of your variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts, and protein sequence, as well as regulatory regions.

======== ===========
Home     http://www.ensembl.org/info/docs/tools/vep/index.html
Versions 
License  Apache 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ensembl-vep

and update with::

   conda update ensembl-vep

Notes
-----

This package installs only the variant effect predictor (VEP) library
code. To install data libraries, you can use the 'ensembl_vep_install.pl' command
installed along with it. For example, to install the VEP library for human
hg19/GRCh37 to a directory

ensembl_vep_install.pl -a cf -s homo_sapiens -y GRCh37 -c /output/path/to/hg19/vep
ensembl_vep_convert_cache.pl -species homo_sapiens -version 86_GRCh37 -d /output/path/to/hg19/vep

(note that ensembl_vep_install.pl is renamed from INSTALL.pl
 and ensembl_vep_convert_cache.pl from covert_cache.pl
 to avoid having generic script names in the PATH)

The convert cache step is not required but improves lookup speeds during
runs. See the VEP documentation for more details

http://useast.ensembl.org/info/docs/tools/vep/script/vep_cache.html


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ensembl-vep.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ensembl-vep/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ensembl-vep/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ensembl-vep/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ensembl-vep
.. |docker| image:: https://quay.io/repository/biocontainers/ensembl-vep/status
                :target: https://quay.io/repository/biocontainers/ensembl-vep


