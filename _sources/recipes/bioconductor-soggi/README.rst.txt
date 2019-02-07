.. title:: Package Recipe 'bioconductor-soggi'
.. highlight: bash


bioconductor-soggi
==================

.. conda:recipe:: bioconductor-soggi
   :replaces_section_title:

   The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/soGGi.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-soggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi/meta.yaml>`_
   :links: biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-soggi

   |downloads_bioconductor-soggi| |docker_bioconductor-soggi|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-chipseq` >=1.32.0,<1.33.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-soggi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-soggi

   and update with::

      conda update bioconductor-soggi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-soggi


.. |required_by_bioconductor-soggi| conda:required_by:: bioconductor-soggi
.. |downloads_bioconductor-soggi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-soggi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-soggi| image:: https://quay.io/repository/biocontainers/bioconductor-soggi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-soggi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soggi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soggi/README.html

