:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-monocle3'
.. highlight: bash

r-monocle3
==========

.. conda:recipe:: r-monocle3
   :replaces_section_title:
   :noindex:

   An analysis toolkit for single\-cell RNA\-seq.

   :homepage: https://cole-trapnell-lab.github.io/monocle3/
   :developer docs: https://github.com/cole-trapnell-lab/monocle3
   :license: MIT
   :recipe: /`r-monocle3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-monocle3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-monocle3/meta.yaml>`_

   


.. conda:package:: r-monocle3

   |downloads_r-monocle3| |docker_r-monocle3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-batchelor: 
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: ``>=0.28``
   :depends bioconductor-delayedarray: ``>=0.8``
   :depends bioconductor-delayedmatrixstats: ``>=1.4``
   :depends bioconductor-limma: ``>=3.38.3``
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: ``>=1.11.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: ``>=0.2.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.8.0.1``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-ggrepel: ``>=0.8.1``
   :depends r-grr: 
   :depends r-htmlwidgets: ``>=1.3``
   :depends r-igraph: ``>=1.2.4``
   :depends r-irlba: ``>=2.3.3``
   :depends r-knitr: 
   :depends r-leidenbase: 
   :depends r-lmtest: ``>=0.9_36``
   :depends r-mass: ``>=7.3_51.4``
   :depends r-matrix: ``>=1.2_17``
   :depends r-matrix.utils: 
   :depends r-pbapply: ``>=1.4``
   :depends r-pbmcapply: ``>=1.4.1``
   :depends r-pheatmap: 
   :depends r-plotly: ``>=4.9``
   :depends r-plyr: ``>=1.8.4``
   :depends r-proxy: ``>=0.4_23``
   :depends r-pryr: ``>=0.1.4``
   :depends r-pscl: ``>=1.5.2``
   :depends r-purrr: ``>=0.3.2``
   :depends r-rann: ``>=2.6.1``
   :depends r-rcpp: ``>=1.0.1``
   :depends r-rcppparallel: 
   :depends r-reshape2: ``>=1.4.3``
   :depends r-reticulate: ``>=1.11.1``
   :depends r-rhpcblasctl: 
   :depends r-rmarkdown: 
   :depends r-rsample: ``>=0.0.5``
   :depends r-rtsne: ``>=0.15``
   :depends r-shiny: 
   :depends r-slam: ``>=0.1_45``
   :depends r-spdep: ``>=1.1_2``
   :depends r-speedglm: ``>=0.3_2``
   :depends r-spelling: 
   :depends r-stringr: ``>=1.4``
   :depends r-testthat: ``>=2.1``
   :depends r-tibble: ``>=2.1.1``
   :depends r-tidyr: ``>=0.8.3``
   :depends r-uwot: ``>=0.1.3``
   :depends r-viridis: ``>=0.5.1``
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

      mamba install r-monocle3

   and update with::

      mamba update r-monocle3

  To create a new environment, run::

      mamba create --name myenvname r-monocle3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-monocle3:<tag>

   (see `r-monocle3/tags`_ for valid values for ``<tag>``)


.. |downloads_r-monocle3| image:: https://img.shields.io/conda/dn/bioconda/r-monocle3.svg?style=flat
   :target: https://anaconda.org/bioconda/r-monocle3
   :alt:   (downloads)
.. |docker_r-monocle3| image:: https://quay.io/repository/biocontainers/r-monocle3/status
   :target: https://quay.io/repository/biocontainers/r-monocle3
.. _`r-monocle3/tags`: https://quay.io/repository/biocontainers/r-monocle3?tab=tags


.. raw:: html

    <script>
        var package = "r-monocle3";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-monocle3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-monocle3/README.html