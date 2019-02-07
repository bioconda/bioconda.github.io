.. title:: Package Recipe 'bioconductor-madseq'
.. highlight: bash


bioconductor-madseq
===================

.. conda:recipe:: bioconductor-madseq
   :replaces_section_title:

   The MADSEQ package provides a group of hierarchical Bayeisan models for the detection of mosaic aneuploidy\, the inference of the type of aneuploidy and also for the quantification of the fraction of aneuploid cells in the sample.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MADSEQ.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-madseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-madseq/meta.yaml>`_
   :links: biotools: :biotools:`madseq`, doi: :doi:`10.1101/142299`

   


.. conda:package:: bioconductor-madseq

   |downloads_bioconductor-madseq| |docker_bioconductor-madseq|

   :versions: 1.6.1, 1.4.1

   :depends: :conda:package:`bioconductor-biostrings` >=2.48.0,<2.50.0 :conda:package:`bioconductor-bsgenome` >=1.48.0,<1.50.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.6.0 :conda:package:`bioconductor-genomeinfodb` >=1.16.0,<1.18.0 :conda:package:`bioconductor-genomicalignments` >=1.16.0,<1.18.0 :conda:package:`bioconductor-genomicranges` >=1.32.7,<1.34.0 :conda:package:`bioconductor-iranges` >=2.14.12,<2.16.0 :conda:package:`bioconductor-preprocesscore` >=1.42.0,<1.44.0 :conda:package:`bioconductor-rsamtools` >=1.32.3,<1.34.0 :conda:package:`bioconductor-rtracklayer` >=1.40.6,<1.42.0 :conda:package:`bioconductor-s4vectors` >=0.18.3,<0.20.0 :conda:package:`bioconductor-summarizedexperiment` >=1.10.1,<1.12.0 :conda:package:`bioconductor-variantannotation` >=1.26.1,<1.28.0 :conda:package:`bioconductor-zlibbioc` >=1.26.0,<1.28.0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-coda`  :conda:package:`r-rjags` >=4-6 :conda:package:`r-vcfr`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-madseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-madseq

   and update with::

      conda update bioconductor-madseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-madseq


.. |required_by_bioconductor-madseq| conda:required_by:: bioconductor-madseq
.. |downloads_bioconductor-madseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-madseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-madseq| image:: https://quay.io/repository/biocontainers/bioconductor-madseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-madseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-madseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-madseq/README.html

