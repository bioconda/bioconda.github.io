:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-soggi'
.. highlight: bash

bioconductor-soggi
==================

.. conda:recipe:: bioconductor-soggi
   :replaces_section_title:
   :noindex:

   Visualise ChIP\-seq\, MNase\-seq and motif occurrence as aggregate plots Summarised Over Grouped Genomic Intervals

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/soGGi.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-soggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi/meta.yaml>`_
   :links: biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

   The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.


.. conda:package:: bioconductor-soggi

   |downloads_bioconductor-soggi| |docker_bioconductor-soggi|

   :versions:
      
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-chipseq: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-preprocesscore: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-soggi

   and update with::

      conda update bioconductor-soggi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-soggi:<tag>

   (see `bioconductor-soggi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-soggi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-soggi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-soggi
   :alt:   (downloads)
.. |docker_bioconductor-soggi| image:: https://quay.io/repository/biocontainers/bioconductor-soggi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-soggi
.. _`bioconductor-soggi/tags`: https://quay.io/repository/biocontainers/bioconductor-soggi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soggi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soggi/README.html