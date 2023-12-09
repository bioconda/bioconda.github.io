:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicewiz'
.. highlight: bash

bioconductor-splicewiz
======================

.. conda:recipe:: bioconductor-splicewiz
   :replaces_section_title:
   :noindex:

   Easy\, optimized\, and accurate alternative splicing analysis in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SpliceWiz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-splicewiz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz/meta.yaml>`_

   Reads and fragments aligned to splice junctions can be used to quantify alternative splicing events \(ASE\). However\, overlapping ASEs can confound their quantification. SpliceWiz quantifies ASEs\, calculating percent\-spliced\-in \(PSI\) using junction reads\, and intron retention using IRFinder\-based quantitation. Novel filters identify ASEs that are relatively less confounded by overlapping events\, whereby PSIs can be calculated with higher confidence. SpliceWiz is ultra\-fast\, using multi\-threaded processing of BAM files. It can be run using a graphical user or command line interfaces. GUI\-based interactive visualization of differential ASEs\, including novel group\-based RNA\-seq coverage visualization\, simplifies short\-read RNA\-seq analysis in R.


.. conda:package:: bioconductor-splicewiz

   |downloads_bioconductor-splicewiz| |docker_bioconductor-splicewiz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0a0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.1,<2.11.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-nxtirfdata: ``>=1.8.0,<1.9.0``
   :depends bioconductor-nxtirfdata: ``>=1.8.0,<1.9.0a0``
   :depends bioconductor-ompbam: ``>=1.6.0,<1.7.0``
   :depends bioconductor-ompbam: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-fst: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-progress: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-rcppprogress: 
   :depends r-rhandsontable: 
   :depends r-rvest: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinywidgets: 
   :depends r-stringi: 
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

      mamba install bioconductor-splicewiz

   and update with::

      mamba update bioconductor-splicewiz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splicewiz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicewiz:<tag>

   (see `bioconductor-splicewiz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicewiz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicewiz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicewiz
   :alt:   (downloads)
.. |docker_bioconductor-splicewiz| image:: https://quay.io/repository/biocontainers/bioconductor-splicewiz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicewiz
.. _`bioconductor-splicewiz/tags`: https://quay.io/repository/biocontainers/bioconductor-splicewiz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splicewiz";
        var versions = ["1.4.0","1.2.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicewiz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicewiz/README.html