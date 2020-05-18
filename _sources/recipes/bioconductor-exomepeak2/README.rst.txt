:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomepeak2'
.. highlight: bash

bioconductor-exomepeak2
=======================

.. conda:recipe:: bioconductor-exomepeak2
   :replaces_section_title:

   Bias Awared Peak Calling and Quantification for MeRIP\-Seq

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/exomePeak2.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-exomepeak2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2/meta.yaml>`_

   exomePeak2 provides bias awared quantification and peak detection on Methylated RNA immunoprecipitation sequencing data \(MeRIP\-Seq\). MeRIP\-Seq is a commonly applied sequencing technology to measure the transcriptome\-wide location and abundance of RNA modification sites under a given cellular condition. However\, the quantification and peak calling in MeRIP\-Seq are sensitive to PCR amplification bias which is prevalent in next generation sequencing \(NGS\) techniques. In addition\, the RNA\-Seq based count data exhibits biological variation in small reads count. exomePeak2 collectively address these challanges by introducing a rich set of robust data science models tailored for MeRIP\-Seq. With exomePeak2\, users can perform peak calling\, modification site quantification\, and differential analysis with a straightforward one\-step function. Alternatively\, users could define personalized methods for their own analysis through multi\-step functions and diagnostic plots.


.. conda:package:: bioconductor-exomepeak2

   |downloads_bioconductor-exomepeak2| |docker_bioconductor-exomepeak2|

   :versions: 1.0.0-0
   
   :depends bioconductor-apeglm: >=1.10.0,<1.11.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-cqn: >=1.34.0,<1.35.0
   :depends bioconductor-deseq2: >=1.28.0,<1.29.0
   :depends bioconductor-genefilter: >=1.70.0,<1.71.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicalignments: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-reshape2: 
   :depends r-rmariadb: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-exomepeak2

   and update with::

      conda update bioconductor-exomepeak2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-exomepeak2:<tag>

   (see `bioconductor-exomepeak2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-exomepeak2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomepeak2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-exomepeak2
   :alt:   (downloads)
.. |docker_bioconductor-exomepeak2| image:: https://quay.io/repository/biocontainers/bioconductor-exomepeak2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomepeak2
.. _`bioconductor-exomepeak2/tags`: https://quay.io/repository/biocontainers/bioconductor-exomepeak2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html