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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-batchelor: ``>=1.18.0,<1.19.0``
   :depends bioconductor-batchelor: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-consensusclusterplus: ``>=1.66.0,<1.67.0``
   :depends bioconductor-consensusclusterplus: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-edger: ``>=4.0.2,<4.1.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scater: ``>=1.30.1,<1.31.0a0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
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
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.4.0"];
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