.. _`vcfsamplecompare`:

vcfsamplecompare
================

|downloads|

This script sorts and \(optionally\) filters the rows\/variants of a VCF file \(containing data for 2 or more samples\) based on the differences in the variant data between samples or sample groups. Degree of \"difference\" is determined by either the best possible degree of separation of sample groups by genotype calls or the difference in average allelic frequency of each sample or sample group \(with a gap size threshold\). The pair of samples or sample groups used to represent the difference for a variant row is the one leading to the greatest difference in consistent genotype or average allelic frequencies \(i.e. observation ratios\, e.g. AO\/DP\) of the same variant state. If sample groups are not specified\, the pair of samples leading to the greatest difference is greedily discovered and chosen to represent the variant\/row.

============= ===========
Home          https://github.com/hepcat72/vcfSampleCompare
Versions      v2.008, v2.006
License       GNU
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/vcfsamplecompare/meta.yaml



Links         doi: :doi:`10.5281/zenodo.1463080`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install vcfsamplecompare

and update with::

   conda update vcfsamplecompare



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/vcfsamplecompare.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/vcfsamplecompare/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/vcfsamplecompare/README.html
.. |downloads| image:: https://anaconda.org/bioconda/vcfsamplecompare/badges/downloads.svg
               :target: https://anaconda.org/bioconda/vcfsamplecompare
.. |docker| image:: https://quay.io/repository/biocontainers/vcfsamplecompare/status
                :target: https://quay.io/repository/biocontainers/vcfsamplecompare

