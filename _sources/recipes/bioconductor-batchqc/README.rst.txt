:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-batchqc'
.. highlight: bash

bioconductor-batchqc
====================

.. conda:recipe:: bioconductor-batchqc
   :replaces_section_title:
   :noindex:

   Batch Effects Quality Control Software

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BatchQC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-batchqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchqc/meta.yaml>`_
   :links: biotools: :biotools:`batchqc`

   Sequencing and microarray samples often are collected or processed in multiple batches or at different times. This often produces technical biases that can lead to incorrect results in the downstream analysis. BatchQC is a software tool that streamlines batch preprocessing and evaluation by providing interactive diagnostics\, visualizations\, and statistical analyses to explore the extent to which batch variation impacts the data. BatchQC diagnostics help determine whether batch adjustment needs to be done\, and how correction should be applied before proceeding with a downstream analysis. Moreover\, BatchQC interactively applies multiple common batch effect approaches to the data and the user can quickly see the benefits of each method. BatchQC is developed as a Shiny App. The output is organized into multiple tabs and each tab features an important part of the batch effect analysis and visualization of the data. The BatchQC interface has the following analysis groups\: Summary\, Differential Expression\, Median Correlations\, Heatmaps\, Circular Dendrogram\, PCA Analysis\, Shape\, ComBat and SVA.


.. conda:package:: bioconductor-batchqc

   |downloads_bioconductor-batchqc| |docker_bioconductor-batchqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-ebseq: ``>=2.4.0,<2.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reader: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-batchqc

   and update with::

      mamba update bioconductor-batchqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-batchqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-batchqc:<tag>

   (see `bioconductor-batchqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-batchqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-batchqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-batchqc
   :alt:   (downloads)
.. |docker_bioconductor-batchqc| image:: https://quay.io/repository/biocontainers/bioconductor-batchqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-batchqc
.. _`bioconductor-batchqc/tags`: https://quay.io/repository/biocontainers/bioconductor-batchqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-batchqc";
        var versions = ["2.2.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchqc/README.html