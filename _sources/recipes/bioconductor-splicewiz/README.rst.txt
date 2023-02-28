:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicewiz'
.. highlight: bash

bioconductor-splicewiz
======================

.. conda:recipe:: bioconductor-splicewiz
   :replaces_section_title:
   :noindex:

   Easy\, optimized\, and accurate alternative splicing analysis in R

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SpliceWiz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-splicewiz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz/meta.yaml>`_

   Reads and fragments aligned to splice junctions can be used to quantify alternative splicing events \(ASE\). However\, overlapping ASEs can confound their quantification. SpliceWiz quantifies ASEs\, calculating percent\-spliced\-in \(PSI\) using junction reads\, and intron retention using IRFinder\-based quantitation. Novel filters identify ASEs that are relatively less confounded by overlapping events\, whereby PSIs can be calculated with higher confidence. SpliceWiz is ultra\-fast\, using multi\-threaded processing of BAM files. It can be run using a graphical user or command line interfaces. GUI\-based interactive visualization of differential ASEs\, including novel group\-based RNA\-seq coverage visualization\, simplifies short\-read RNA\-seq analysis in R.


.. conda:package:: bioconductor-splicewiz

   |downloads_bioconductor-splicewiz| |docker_bioconductor-splicewiz|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-nxtirfdata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-ompbam: ``>=1.2.0,<1.3.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-fst: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-progress: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-rcppprogress: 
   :depends r-rhandsontable: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinywidgets: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicewiz

   and update with::

      conda update bioconductor-splicewiz

   or use the docker container::

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
        var versions = ["1.0.0"];
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