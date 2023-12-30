:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elmer'
.. highlight: bash

bioconductor-elmer
==================

.. conda:recipe:: bioconductor-elmer
   :replaces_section_title:
   :noindex:

   Inferring Regulatory Element Landscapes and Transcription Factor Networks Using Cancer Methylomes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ELMER.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer/meta.yaml>`_

   ELMER is designed to use DNA methylation and gene expression from a large number of samples to infere regulatory element landscape and transcription factor network in primary tissue.


.. conda:package:: bioconductor-elmer

   |downloads_bioconductor-elmer| |docker_bioconductor-elmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.24.1-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.9.5-1</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.9.5-1``,  ``2.8.0-1``,  ``2.6.1-0``,  ``2.4.4-1``,  ``2.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-elmer.data: ``>=2.26.0,<2.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-tcgabiolinks: ``>=2.30.0,<2.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-rvest: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml2: 
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

      mamba install bioconductor-elmer

   and update with::

      mamba update bioconductor-elmer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-elmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-elmer:<tag>

   (see `bioconductor-elmer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-elmer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elmer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elmer
   :alt:   (downloads)
.. |docker_bioconductor-elmer| image:: https://quay.io/repository/biocontainers/bioconductor-elmer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elmer
.. _`bioconductor-elmer/tags`: https://quay.io/repository/biocontainers/bioconductor-elmer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-elmer";
        var versions = ["2.26.0","2.24.1","2.22.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elmer/README.html