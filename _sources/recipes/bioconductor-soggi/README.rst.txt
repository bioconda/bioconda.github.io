:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-soggi'
.. highlight: bash

bioconductor-soggi
==================

.. conda:recipe:: bioconductor-soggi
   :replaces_section_title:
   :noindex:

   Visualise ChIP\-seq\, MNase\-seq and motif occurrence as aggregate plots Summarised Over Grouped Genomic Intervals

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/soGGi.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-soggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi/meta.yaml>`_
   :links: biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

   The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.


.. conda:package:: bioconductor-soggi

   |downloads_bioconductor-soggi| |docker_bioconductor-soggi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-chipseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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


.. raw:: html

    <script>
        var package = "bioconductor-soggi";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soggi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soggi/README.html