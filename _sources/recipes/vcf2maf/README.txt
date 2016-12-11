.. _`vcf2maf`:

vcf2maf
=======

|downloads|

Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

======== ===========
Home     https://github.com/mskcc/vcf2maf
Versions 1.6.8
License  Apache
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install vcf2maf

and update with::

   conda update vcf2maf

Notes
-----

This package installs only vcf2maf and does not integrate with the variant-effect-predictor (VEP). To
do so, please follow the instructions at https://github.com/mskcc/vcf2maf/blob/master/README.md.


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/vcf2maf.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/vcf2maf/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/vcf2maf/README.html
.. |downloads| image:: https://anaconda.org/bioconda/vcf2maf/badges/downloads.svg
               :target: https://anaconda.org/bioconda/vcf2maf
.. |docker| image:: https://quay.io/repository/biocontainers/vcf2maf/status
                :target: https://quay.io/repository/biocontainers/vcf2maf


