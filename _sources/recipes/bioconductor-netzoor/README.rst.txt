:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netzoor'
.. highlight: bash

bioconductor-netzoor
====================

.. conda:recipe:: bioconductor-netzoor
   :replaces_section_title:
   :noindex:

   Unified methods for the inference and analysis of gene regulatory networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/netZooR.html
   :license: GPL-3
   :recipe: /`bioconductor-netzoor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netzoor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netzoor/meta.yaml>`_

   netZooR unifies the implementations of several Network Zoo methods \(netzoo\, netzoo.github.io\) into a single package by creating interfaces between network inference and network analysis methods. Currently\, the package has 3 methods for network inference including PANDA and its optimized implementation OTTER \(network reconstruction using mutliple lines of biological evidence\)\, LIONESS \(single\-sample network inference\)\, and EGRET \(genotype\-specific networks\). Network analysis methods include CONDOR \(community detection\)\, ALPACA \(differential community detection\)\, CRANE \(significance estimation of differential modules\)\, MONSTER \(estimation of network transition states\). In addition\, YARN allows to process gene expresssion data for tissue\-specific analyses and SAMBAR infers missing mutation data based on pathway information.


.. conda:package:: bioconductor-netzoor

   |downloads_bioconductor-netzoor| |docker_bioconductor-netzoor|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-gostats: ``>=2.72.0,<2.73.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-pandar: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rcy3: ``>=2.26.0,<2.27.0``
   :depends bioconductor-stringdb: ``>=2.18.0,<2.19.0``
   :depends bioconductor-yarn: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixcalc: 
   :depends r-matrixstats: 
   :depends r-nnet: 
   :depends r-penalized: 
   :depends r-reshape: 
   :depends r-reshape2: 
   :depends r-reticulate: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-viridislite: 
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

      mamba install bioconductor-netzoor

   and update with::

      mamba update bioconductor-netzoor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netzoor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netzoor:<tag>

   (see `bioconductor-netzoor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netzoor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netzoor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netzoor
   :alt:   (downloads)
.. |docker_bioconductor-netzoor| image:: https://quay.io/repository/biocontainers/bioconductor-netzoor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netzoor
.. _`bioconductor-netzoor/tags`: https://quay.io/repository/biocontainers/bioconductor-netzoor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netzoor";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netzoor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netzoor/README.html