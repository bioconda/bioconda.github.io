:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sponge'
.. highlight: bash

bioconductor-sponge
===================

.. conda:recipe:: bioconductor-sponge
   :replaces_section_title:
   :noindex:

   Sparse Partial Correlations On Gene Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SPONGE.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-sponge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge/meta.yaml>`_

   This package provides methods to efficiently detect competitive endogeneous RNA interactions between two genes. Such interactions are mediated by one or several miRNAs such that both gene and miRNA expression data for a larger number of samples is needed as input. The SPONGE package now also includes spongEffects\: ceRNA modules offer patient\-specific insights into the miRNA regulatory landscape.


.. conda:package:: bioconductor-sponge

   |downloads_bioconductor-sponge| |docker_bioconductor-sponge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-cvms: 
   :depends r-data.table: 
   :depends r-dorng: 
   :depends r-dplyr: 
   :depends r-expm: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggridges: 
   :depends r-glmnet: 
   :depends r-grbase: 
   :depends r-igraph: 
   :depends r-iterators: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-metbrewer: 
   :depends r-ppcor: 
   :depends r-randomforest: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
   :depends r-tnet: 
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

      mamba install bioconductor-sponge

   and update with::

      mamba update bioconductor-sponge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sponge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sponge:<tag>

   (see `bioconductor-sponge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sponge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sponge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sponge
   :alt:   (downloads)
.. |docker_bioconductor-sponge| image:: https://quay.io/repository/biocontainers/bioconductor-sponge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sponge
.. _`bioconductor-sponge/tags`: https://quay.io/repository/biocontainers/bioconductor-sponge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sponge";
        var versions = ["1.28.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sponge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sponge/README.html