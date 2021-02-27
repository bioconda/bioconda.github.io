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
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends bioconductor-batchelor: 
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: ``>=0.28``
   :depends bioconductor-delayedarray: ``>=0.8``
   :depends bioconductor-delayedmatrixstats: ``>=1.4``
   :depends bioconductor-limma: ``>=3.38.3``
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: ``>=1.11.5``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-assertthat: ``>=0.2.1``
   :depends r-base: ``>=4.0,<4.1.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-monocle3

   and update with::

      conda update r-monocle3

   or use the docker container::

      docker pull quay.io/biocontainers/r-monocle3:<tag>

   (see `r-monocle3/tags`_ for valid values for ``<tag>``)


.. |downloads_r-monocle3| image:: https://img.shields.io/conda/dn/bioconda/r-monocle3.svg?style=flat
   :target: https://anaconda.org/bioconda/r-monocle3
   :alt:   (downloads)
.. |docker_r-monocle3| image:: https://quay.io/repository/biocontainers/r-monocle3/status
   :target: https://quay.io/repository/biocontainers/r-monocle3
.. _`r-monocle3/tags`: https://quay.io/repository/biocontainers/r-monocle3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-monocle3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-monocle3/README.html