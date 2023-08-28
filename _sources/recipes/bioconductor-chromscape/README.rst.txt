:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromscape'
.. highlight: bash

bioconductor-chromscape
=======================

.. conda:recipe:: bioconductor-chromscape
   :replaces_section_title:
   :noindex:

   Analysis of single\-cell epigenomics datasets with a Shiny App

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ChromSCape.html
   :license: GPL-3
   :recipe: /`bioconductor-chromscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromscape/meta.yaml>`_

   ChromSCape \- Chromatin landscape profiling for Single Cells \- is a ready\-to\-launch user\-friendly Shiny Application for the analysis of single\-cell epigenomics datasets \(scChIP\-seq\, scATAC\-seq\, scCUT\&Tag\, ...\) from aligned data to differential analysis \& gene set enrichment analysis. It is highly interactive\, enables users to save their analysis and covers a wide range of analytical steps\: QC\, preprocessing\, filtering\, batch correction\, dimensionality reduction\, vizualisation\, clustering\, differential analysis and gene set analysis.


.. conda:package:: bioconductor-chromscape

   |downloads_bioconductor-chromscape| |docker_bioconductor-chromscape|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-batchelor: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorramps: 
   :depends r-colourpicker: 
   :depends r-coop: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-fs: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-irlba: 
   :depends r-jsonlite: 
   :depends r-kableextra: 
   :depends r-matrix: 
   :depends r-matrixtests: 
   :depends r-msigdbr: 
   :depends r-plotly: 
   :depends r-qs: 
   :depends r-qualv: 
   :depends r-rcpp: 
   :depends r-rlist: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinydashboardplus: 
   :depends r-shinyfiles: 
   :depends r-shinyhelper: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
   :depends r-stringdist: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-umap: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-chromscape

   and update with::

      mamba update bioconductor-chromscape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromscape:<tag>

   (see `bioconductor-chromscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromscape
   :alt:   (downloads)
.. |docker_bioconductor-chromscape| image:: https://quay.io/repository/biocontainers/bioconductor-chromscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromscape
.. _`bioconductor-chromscape/tags`: https://quay.io/repository/biocontainers/bioconductor-chromscape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromscape";
        var versions = ["1.10.0","1.8.0","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromscape/README.html