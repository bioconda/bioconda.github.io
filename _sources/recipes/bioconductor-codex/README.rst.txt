.. title:: Package Recipe 'bioconductor-codex'
.. highlight: bash


bioconductor-codex
==================

.. conda:recipe:: bioconductor-codex
   :replaces_section_title:

   A normalization and copy number variation calling procedure for whole exome DNA sequencing data. CODEX relies on the availability of multiple samples processed using the same sequencing pipeline for normalization\, and does not require matched controls. The normalization model in CODEX includes terms that specifically remove biases due to GC content\, exon length and targeting and amplification efficiency\, and latent systemic artifacts. CODEX also includes a Poisson likelihood\-based recursive segmentation procedure that explicitly models the count\-based exome sequencing data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CODEX.html
   :license: GPL-2
   :recipe: /`bioconductor-codex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex/meta.yaml>`_
   :links: biotools: :biotools:`codex`, doi: :doi:`10.1093/nar/gku1363`

   


.. conda:package:: bioconductor-codex

   |downloads_bioconductor-codex| |docker_bioconductor-codex|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-codex|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-codex

   and update with::

      conda update bioconductor-codex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-codex


.. |required_by_bioconductor-codex| conda:required_by:: bioconductor-codex
.. |downloads_bioconductor-codex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-codex.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-codex| image:: https://quay.io/repository/biocontainers/bioconductor-codex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-codex







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-codex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-codex/README.html

