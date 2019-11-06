:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fourcseq'
.. highlight: bash

bioconductor-fourcseq
=====================

.. conda:recipe:: bioconductor-fourcseq
   :replaces_section_title:

   FourCSeq is an R package dedicated to the analysis of \(multiplexed\) 4C sequencing data. The package provides a pipeline to detect specific interactions between DNA elements and identify differential interactions between conditions. The statistical analysis in R starts with individual bam files for each sample as inputs. To obtain these files\, the package contains a python script \(extdata\/python\/demultiplex.py\) to demultiplex libraries and trim off primer sequences. With a standard alignment software the required bam files can be then be generated.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/FourCSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-fourcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fourcseq/meta.yaml>`_
   :links: biotools: :biotools:`fourcseq`

   


.. conda:package:: bioconductor-fourcseq

   |downloads_bioconductor-fourcseq| |docker_bioconductor-fourcseq|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.4.0-1, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-ggbio: >=1.34.0,<1.35.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-fda: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-lsd: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fourcseq

   and update with::

      conda update bioconductor-fourcseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fourcseq:<tag>

   (see `bioconductor-fourcseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fourcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fourcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fourcseq
   :alt:   (downloads)
.. |docker_bioconductor-fourcseq| image:: https://quay.io/repository/biocontainers/bioconductor-fourcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fourcseq
.. _`bioconductor-fourcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-fourcseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fourcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fourcseq/README.html