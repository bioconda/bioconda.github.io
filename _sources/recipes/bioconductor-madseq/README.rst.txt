:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-madseq'
.. highlight: bash

bioconductor-madseq
===================

.. conda:recipe:: bioconductor-madseq
   :replaces_section_title:

   The MADSEQ package provides a group of hierarchical Bayeisan models for the detection of mosaic aneuploidy\, the inference of the type of aneuploidy and also for the quantification of the fraction of aneuploid cells in the sample.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MADSEQ.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-madseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq/meta.yaml>`_
   :links: biotools: :biotools:`madseq`, doi: :doi:`10.1101/142299`

   


.. conda:package:: bioconductor-madseq

   |downloads_bioconductor-madseq| |docker_bioconductor-madseq|

   :versions: 1.6.1-0, 1.4.1-0
   
   :depends bioconductor-biostrings: >=2.48.0,<2.50.0
   :depends bioconductor-bsgenome: >=1.48.0,<1.50.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.6.0
   :depends bioconductor-genomeinfodb: >=1.16.0,<1.18.0
   :depends bioconductor-genomicalignments: >=1.16.0,<1.18.0
   :depends bioconductor-genomicranges: >=1.32.7,<1.34.0
   :depends bioconductor-iranges: >=2.14.12,<2.16.0
   :depends bioconductor-preprocesscore: >=1.42.0,<1.44.0
   :depends bioconductor-rsamtools: >=1.32.3,<1.34.0
   :depends bioconductor-rtracklayer: >=1.40.6,<1.42.0
   :depends bioconductor-s4vectors: >=0.18.3,<0.20.0
   :depends bioconductor-summarizedexperiment: >=1.10.1,<1.12.0
   :depends bioconductor-variantannotation: >=1.26.1,<1.28.0
   :depends bioconductor-zlibbioc: >=1.26.0,<1.28.0
   :depends r-base: >=3.4.1,<3.4.2.0a0
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