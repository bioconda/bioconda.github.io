.. _`ascat`:

ascat
=====

|downloads|

ASCAT is a method to derive copy number profiles of tumour cells,
accounting for normal cell admixture and tumour aneuploidy (Figure 1).
ASCAT infers tumour purity (the fraction of tumour cells) and ploidy (the
amount of DNA per tumour cell, expressed as multiples of haploid genomes)
from SNP array or massively parallel sequencing data, and calculates
whole-genome allele-specific copy number profiles (the number of copies of
both parental alleles for all SNP loci across the genome).


======== ===========
Home     https://www.crick.ac.uk/research/a-z-researchers/researchers-v-y/peter-van-loo/software/
Versions 2.5
License  GPL v3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install ascat

and update with::

   conda update ascat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/ascat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/ascat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/ascat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/ascat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/ascat
.. |docker| image:: https://quay.io/repository/biocontainers/ascat/status
                :target: https://quay.io/repository/biocontainers/ascat


