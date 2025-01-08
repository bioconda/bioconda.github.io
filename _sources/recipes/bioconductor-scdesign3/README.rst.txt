:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdesign3'
.. highlight: bash

bioconductor-scdesign3
======================

.. conda:recipe:: bioconductor-scdesign3
   :replaces_section_title:
   :noindex:

   A unified framework of realistic in silico data generation and statistical model inference for single\-cell and spatial omics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDesign3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scdesign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdesign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdesign3/meta.yaml>`_

   We present a statistical simulator\, scDesign3\, to generate realistic single\-cell and spatial omics data\, including various cell states\, experimental designs\, and feature modalities\, by learning interpretable parameters from real data. Using a unified probabilistic model for single\-cell and spatial omics data\, scDesign3 infers biologically meaningful parameters\; assesses the goodness\-of\-fit of inferred cell clusters\, trajectories\, and spatial locations\; and generates in silico negative and positive controls for benchmarking computational tools.


.. conda:package:: bioconductor-scdesign3

   |downloads_bioconductor-scdesign3| |docker_bioconductor-scdesign3|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-coop: 
   :depends r-dplyr: 
   :depends r-gamlss: 
   :depends r-gamlss.dist: 
   :depends r-ggplot2: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-mgcv: 
   :depends r-mvtnorm: 
   :depends r-pbmcapply: 
   :depends r-rvinecopulib: 
   :depends r-sparsemvn: 
   :depends r-tibble: 
   :depends r-umap: 
   :depends r-viridis: 
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

      mamba install bioconductor-scdesign3

   and update with::

      mamba update bioconductor-scdesign3

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdesign3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdesign3:<tag>

   (see `bioconductor-scdesign3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdesign3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdesign3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdesign3
   :alt:   (downloads)
.. |docker_bioconductor-scdesign3| image:: https://quay.io/repository/biocontainers/bioconductor-scdesign3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdesign3
.. _`bioconductor-scdesign3/tags`: https://quay.io/repository/biocontainers/bioconductor-scdesign3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdesign3";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdesign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdesign3/README.html