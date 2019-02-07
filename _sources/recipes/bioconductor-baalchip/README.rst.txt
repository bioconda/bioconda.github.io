.. title:: Package Recipe 'bioconductor-baalchip'
.. highlight: bash


bioconductor-baalchip
=====================

.. conda:recipe:: bioconductor-baalchip
   :replaces_section_title:

   The package offers functions to process multiple ChIP\-seq BAM files and detect allele\-specific events. Computes allele counts at individual variants \(SNPs\/SNVs\)\, implements extensive QC steps to remove problematic variants\, and utilizes a bayesian framework to identify statistically significant allele\- specific events. BaalChIP is able to account for copy number differences between the two alleles\, a known phenotypical feature of cancer samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BaalChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-baalchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baalchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baalchip/meta.yaml>`_
   :links: biotools: :biotools:`baalchip`, doi: :doi:`10.1186/s13059-017-1165-7`

   


.. conda:package:: bioconductor-baalchip

   |downloads_bioconductor-baalchip| |docker_bioconductor-baalchip|

   :versions: 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coda`  :conda:package:`r-doby`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-baalchip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-baalchip

   and update with::

      conda update bioconductor-baalchip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-baalchip


.. |required_by_bioconductor-baalchip| conda:required_by:: bioconductor-baalchip
.. |downloads_bioconductor-baalchip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baalchip.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-baalchip| image:: https://quay.io/repository/biocontainers/bioconductor-baalchip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-baalchip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-baalchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-baalchip/README.html

