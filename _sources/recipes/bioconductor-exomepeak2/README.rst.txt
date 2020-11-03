:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomepeak2'
.. highlight: bash

bioconductor-exomepeak2
=======================

.. conda:recipe:: bioconductor-exomepeak2
   :replaces_section_title:
   :noindex:

   Bias Awared Peak Calling and Quantification for MeRIP\-Seq

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/exomePeak2.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-exomepeak2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2/meta.yaml>`_

   exomePeak2 provides bias awared quantification and peak detection on Methylated RNA immunoprecipitation sequencing data \(MeRIP\-Seq\). MeRIP\-Seq is a commonly applied sequencing technology to measure the transcriptome\-wide location and abundance of RNA modification sites under a given cellular condition. However\, the quantification and peak calling in MeRIP\-Seq are sensitive to PCR amplification bias which is prevalent in next generation sequencing \(NGS\) techniques. In addition\, the RNA\-Seq based count data exhibits biological variation in small reads count. exomePeak2 collectively address these challanges by introducing a rich set of robust data science models tailored for MeRIP\-Seq. With exomePeak2\, users can perform peak calling\, modification site quantification\, and differential analysis with a straightforward one\-step function. Alternatively\, users could define personalized methods for their own analysis through multi\-step functions and diagnostic plots.


.. conda:package:: bioconductor-exomepeak2

   |downloads_bioconductor-exomepeak2| |docker_bioconductor-exomepeak2|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-apeglm: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-cqn: ``>=1.36.0,<1.37.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-reshape2: 
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