:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-redeemr'
.. highlight: bash

r-redeemr
=========

.. conda:recipe:: r-redeemr
   :replaces_section_title:
   :noindex:

   R package for Regulatory multi\-omics with Deep Mitochondrial mutation profiling.

   :homepage: https://github.com/chenweng1991/redeemR
   :documentation: https://chenweng1991.github.io/redeemR
   
   :license: MIT / MIT
   :recipe: /`r-redeemr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-redeemr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-redeemr/meta.yaml>`_

   Introduce a new approach for single\-cell Regulatory multi\-omics \(transcriptomics and chromatin accessibility\) with Deep Mitochondrial mutation profiling \(\~10\-fold increase in detection rate\)\, or ReDeeM. redeemR is the R package that facilitates mutation refining\, lineage tracing\, as well multiomics integration analysis.


.. conda:package:: r-redeemr

   |downloads_r-redeemr| |docker_r-redeemr|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends bioconductor-ggtreeextra: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends bioconductor-treeio: ``>=1.30.0,<1.31.0a0``
   :depends libgcc: ``>=13``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-domc: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggextra: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-phangorn: 
   :depends r-phytools: 
   :depends r-pryr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scavenge: ``>=1.0.2,<1.1.0a0``
   :depends r-seurat: 
   :depends r-tibble: 
   :depends r-tidytree: 
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

      mamba install r-redeemr

   and update with::

      mamba update r-redeemr

  To create a new environment, run::

      mamba create --name myenvname r-redeemr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-redeemr:<tag>

   (see `r-redeemr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-redeemr| image:: https://img.shields.io/conda/dn/bioconda/r-redeemr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-redeemr
   :alt:   (downloads)
.. |docker_r-redeemr| image:: https://quay.io/repository/biocontainers/r-redeemr/status
   :target: https://quay.io/repository/biocontainers/r-redeemr
.. _`r-redeemr/tags`: https://quay.io/repository/biocontainers/r-redeemr?tab=tags


.. raw:: html

    <script>
        var package = "r-redeemr";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-redeemr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-redeemr/README.html