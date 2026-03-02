:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicewiz'
.. highlight: bash

bioconductor-splicewiz
======================

.. conda:recipe:: bioconductor-splicewiz
   :replaces_section_title:
   :noindex:

   interactive analysis and visualization of alternative splicing in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpliceWiz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-splicewiz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicewiz/meta.yaml>`_

   The analysis and visualization of alternative splicing \(AS\) events from RNA sequencing data remains challenging. SpliceWiz is a user\-friendly and performance\-optimized R package for AS analysis\, by processing alignment BAM files to quantify read counts across splice junctions\, IRFinder\-based intron retention quantitation\, and supports novel splicing event identification. We introduce a novel visualization for AS using normalized coverage\, thereby allowing visualization of differential AS across conditions. SpliceWiz features a shiny\-based GUI facilitating interactive data exploration of results including gene ontology enrichment. It is performance optimized with multi\-threaded processing of BAM files and a new COV file format for fast recall of sequencing coverage. Overall\, SpliceWiz streamlines AS analysis\, enabling reliable identification of functionally relevant AS events for further characterization.


.. conda:package:: bioconductor-splicewiz

   |downloads_bioconductor-splicewiz| |docker_bioconductor-splicewiz|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends bioconductor-genefilter: ``>=1.92.0,<1.93.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-h5mread: ``>=1.2.0,<1.3.0``
   :depends bioconductor-h5mread: ``>=1.2.1,<1.3.0a0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-nxtirfdata: ``>=1.16.0,<1.17.0``
   :depends bioconductor-nxtirfdata: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-ompbam: ``>=1.14.0,<1.15.0``
   :depends bioconductor-ompbam: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends bioconductor-rhdf5: ``>=2.54.1,<2.55.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-fst: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-htmltools: 
   :depends r-httr: 
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
   :depends r-rsqlite: 
   :depends r-rvest: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinywidgets: 
   :depends r-stringi: 
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
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.2","1.0.0"];
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