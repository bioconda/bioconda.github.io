.. _`bioconductor-baalchip`:

bioconductor-baalchip
=====================

|downloads|

The package offers functions to process multiple ChIP\-seq BAM files and detect allele\-specific events. Computes allele counts at individual variants \(SNPs\/SNVs\)\, implements extensive QC steps to remove problematic variants\, and utilizes a bayesian framework to identify statistically significant allele\- specific events. BaalChIP is able to account for copy number differences between the two alleles\, a known phenotypical feature of cancer samples.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BaalChIP.html
Versions      1.6.0, 1.4.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-baalchip/meta.yaml



Links         biotools: :biotools:`baalchip`, doi: :doi:`10.1186/s13059-017-1165-7`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-baalchip

and update with::

   conda update bioconductor-baalchip



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-baalchip.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-baalchip/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-baalchip/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-baalchip/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-baalchip
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-baalchip/status
                :target: https://quay.io/repository/biocontainers/bioconductor-baalchip

