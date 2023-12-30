:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicplot'
.. highlight: bash

bioconductor-genomicplot
========================

.. conda:recipe:: bioconductor-genomicplot
   :replaces_section_title:
   :noindex:

   Plot profiles of next generation sequencing data in genomic features

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenomicPlot.html
   :license: GPL-2
   :recipe: /`bioconductor-genomicplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicplot/meta.yaml>`_

   Visualization of next generation sequencing \(NGS\) data is essential for interpreting high\-throughput genomics experiment results. \'GenomicPlot\' facilitates plotting of NGS data in various formats \(bam\, bed\, wig and bigwig\)\; both coverage and enrichment over input can be computed and displayed with respect to genomic features \(such as UTR\, CDS\, enhancer\)\, and user defined genomic loci or regions. Statistical tests on signal intensity within user defined regions of interest can be performed and represented as boxplots or bar graphs. Parallel processing is used to speed up computation on multicore platforms. In addition to genomic plots which is suitable for displaying of coverage of genomic DNA \(such as ChIPseq data\)\, metagenomic \(without introns\) plots can also be made for RNAseq or CLIPseq data as well.


.. conda:package:: bioconductor-genomicplot

   |downloads_bioconductor-genomicplot| |docker_bioconductor-genomicplot|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomation: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rcas: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cowplot: ``>=1.1.1``
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggplotify: 
   :depends r-ggpubr: 
   :depends r-ggsci: ``>=2.9``
   :depends r-ggsignif: ``>=0.6.3``
   :depends r-scales: ``>=1.2.0``
   :depends r-tidyr: 
   :depends r-venndiagram: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genomicplot

   and update with::

      mamba update bioconductor-genomicplot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicplot:<tag>

   (see `bioconductor-genomicplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicplot
   :alt:   (downloads)
.. |docker_bioconductor-genomicplot| image:: https://quay.io/repository/biocontainers/bioconductor-genomicplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicplot
.. _`bioconductor-genomicplot/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicplot";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicplot/README.html