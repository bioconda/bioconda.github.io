:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monocle3-cli'
.. highlight: bash

monocle3-cli
============

.. conda:recipe:: monocle3-cli
   :replaces_section_title:

   A set of wrappers for individual components of the monocle3 package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently monocle3 R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/monocle-scripts
   :license: Apache / Apache-2.0
   :recipe: /`monocle3-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monocle3-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monocle3-cli/meta.yaml>`_

   


.. conda:package:: monocle3-cli

   |downloads_monocle3-cli| |docker_monocle3-cli|

   :versions: 0.0.5-1, 0.0.5-0, 0.0.4-0, 0.0.3-1, 0.0.3-0
   
   :depends bioconductor-delayedarray: 
   :depends bioconductor-delayedmatrixstats: 
   :depends bioconductor-limma: 
   :depends bioconductor-singlecellexperiment: <1.8.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends louvain: 
   :depends python: >=3.8,<3.9.0a0
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-base64enc: 
   :depends r-codetools: 
   :depends r-crosstalk: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-grr: 
   :depends r-hexbin: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-lmtest: 
   :depends r-matrix: 
   :depends r-matrix.utils: 
   :depends r-monocle3: <=0.2.0
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-pbmcapply: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-proxy: 
   :depends r-pryr: 
   :depends r-pscl: 
   :depends r-purrr: 
   :depends r-rann: 
   :depends r-reshape2: 
   :depends r-reticulate: 
   :depends r-rhpcblasctl: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :depends r-slam: 
   :depends r-spdep: 
   :depends r-speedglm: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-uwot: 
   :depends r-vgam: 
   :depends r-viridis: 
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install monocle3-cli

   and update with::

      conda update monocle3-cli

   or use the docker container::

      docker pull quay.io/biocontainers/monocle3-cli:<tag>

   (see `monocle3-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_monocle3-cli| image:: https://img.shields.io/conda/dn/bioconda/monocle3-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/monocle3-cli
   :alt:   (downloads)
.. |docker_monocle3-cli| image:: https://quay.io/repository/biocontainers/monocle3-cli/status
   :target: https://quay.io/repository/biocontainers/monocle3-cli
.. _`monocle3-cli/tags`: https://quay.io/repository/biocontainers/monocle3-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monocle3-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monocle3-cli/README.html