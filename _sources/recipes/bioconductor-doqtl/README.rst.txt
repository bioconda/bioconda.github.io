.. _`bioconductor-doqtl`:

bioconductor-doqtl
==================

|downloads|

DOQTL is a quantitative trait locus \(QTL\) mapping pipeline designed for Diversity Outbred mice and other multi\-parent outbred populations. The package reads in data from genotyping arrays and perform haplotype reconstruction using a hidden Markov model \(HMM\). The haplotype probabilities from the HMM are then used to perform linkage mapping. When founder sequences are available\, DOQTL can use the haplotype reconstructions to impute the founder sequences onto DO genomes and perform association mapping.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DOQTL.html
Versions      1.16.2, 1.14.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-doqtl/meta.yaml



Links         biotools: :biotools:`doqtl`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-doqtl

and update with::

   conda update bioconductor-doqtl



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-doqtl.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-doqtl/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-doqtl/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-doqtl/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-doqtl
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-doqtl/status
                :target: https://quay.io/repository/biocontainers/bioconductor-doqtl

