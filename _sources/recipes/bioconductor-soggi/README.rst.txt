:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-soggi'
.. highlight: bash

bioconductor-soggi
==================

.. conda:recipe:: bioconductor-soggi
   :replaces_section_title:
   :noindex:

   Visualise ChIP\-seq\, MNase\-seq and motif occurrence as aggregate plots Summarised Over Grouped Genomic Intervals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/soGGi.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-soggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi/meta.yaml>`_
   :links: biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

   The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.


.. conda:package:: bioconductor-soggi

   |downloads_bioconductor-soggi| |docker_bioconductor-soggi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-chipseq: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-soggi

   and update with::

      mamba update bioconductor-soggi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-soggi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
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