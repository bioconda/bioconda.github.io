:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-madseq'
.. highlight: bash

bioconductor-madseq
===================

.. conda:recipe:: bioconductor-madseq
   :replaces_section_title:

   Mosaic Aneuploidy Detection and Quantification using Massive Parallel Sequencing Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MADSEQ.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-madseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq/meta.yaml>`_
   :links: biotools: :biotools:`madseq`, doi: :doi:`10.1101/142299`

   The MADSEQ package provides a group of hierarchical Bayeisan models for the detection of mosaic aneuploidy\, the inference of the type of aneuploidy and also for the quantification of the fraction of aneuploid cells in the sample.


.. conda:package:: bioconductor-madseq

   |downloads_bioconductor-madseq| |docker_bioconductor-madseq|

   :versions: 1.12.0-0, 1.10.0-1, 1.6.1-0, 1.4.1-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-preprocesscore: >=1.48.0,<1.49.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends bioconductor-zlibbioc: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-coda: 
   :depends r-rjags: >=4-6
   :depends r-vcfr: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-madseq

   and update with::

      conda update bioconductor-madseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-madseq:<tag>

   (see `bioconductor-madseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-madseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-madseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-madseq
   :alt:   (downloads)
.. |docker_bioconductor-madseq| image:: https://quay.io/repository/biocontainers/bioconductor-madseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-madseq
.. _`bioconductor-madseq/tags`: https://quay.io/repository/biocontainers/bioconductor-madseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-madseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-madseq/README.html