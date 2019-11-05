:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-codex'
.. highlight: bash

bioconductor-codex
==================

.. conda:recipe:: bioconductor-codex
   :replaces_section_title:

   A normalization and copy number variation calling procedure for whole exome DNA sequencing data. CODEX relies on the availability of multiple samples processed using the same sequencing pipeline for normalization\, and does not require matched controls. The normalization model in CODEX includes terms that specifically remove biases due to GC content\, exon length and targeting and amplification efficiency\, and latent systemic artifacts. CODEX also includes a Poisson likelihood\-based recursive segmentation procedure that explicitly models the count\-based exome sequencing data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CODEX.html
   :license: GPL-2
   :recipe: /`bioconductor-codex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codex/meta.yaml>`_
   :links: biotools: :biotools:`codex`, doi: :doi:`10.1093/nar/gku1363`

   


.. conda:package:: bioconductor-codex

   |downloads_bioconductor-codex| |docker_bioconductor-codex|

   :versions: 1.18.0-0, 1.16.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-codex

   and update with::

      conda update bioconductor-codex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-codex:<tag>

   (see `bioconductor-codex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-codex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-codex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-codex
   :alt:   (downloads)
.. |docker_bioconductor-codex| image:: https://quay.io/repository/biocontainers/bioconductor-codex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-codex
.. _`bioconductor-codex/tags`: https://quay.io/repository/biocontainers/bioconductor-codex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-codex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-codex/README.html