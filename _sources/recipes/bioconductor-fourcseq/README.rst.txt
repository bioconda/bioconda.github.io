.. title:: Package Recipe 'bioconductor-fourcseq'
.. highlight: bash


bioconductor-fourcseq
=====================

.. conda:recipe:: bioconductor-fourcseq
   :replaces_section_title:

   FourCSeq is an R package dedicated to the analysis of \(multiplexed\) 4C sequencing data. The package provides a pipeline to detect specific interactions between DNA elements and identify differential interactions between conditions. The statistical analysis in R starts with individual bam files for each sample as inputs. To obtain these files\, the package contains a python script \(extdata\/python\/demultiplex.py\) to demultiplex libraries and trim off primer sequences. With a standard alignment software the required bam files can be then be generated.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FourCSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-fourcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourcseq/meta.yaml>`_
   :links: biotools: :biotools:`fourcseq`

   


.. conda:package:: bioconductor-fourcseq

   |downloads_bioconductor-fourcseq| |docker_bioconductor-fourcseq|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0, 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  :conda:package:`r-lsd`  :conda:package:`r-matrix`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-fourcseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fourcseq

   and update with::

      conda update bioconductor-fourcseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fourcseq


.. |required_by_bioconductor-fourcseq| conda:required_by:: bioconductor-fourcseq
.. |downloads_bioconductor-fourcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fourcseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fourcseq| image:: https://quay.io/repository/biocontainers/bioconductor-fourcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fourcseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fourcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fourcseq/README.html

