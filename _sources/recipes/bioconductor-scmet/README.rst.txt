:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmet'
.. highlight: bash

bioconductor-scmet
==================

.. conda:recipe:: bioconductor-scmet
   :replaces_section_title:
   :noindex:

   Bayesian modelling of cell\-to\-cell DNA methylation heterogeneity

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scMET.html
   :license: GPL-3
   :recipe: /`bioconductor-scmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmet/meta.yaml>`_

   High\-throughput single\-cell measurements of DNA methylomes can quantify methylation heterogeneity and uncover its role in gene regulation. However\, technical limitations and sparse coverage can preclude this task. scMET is a hierarchical Bayesian model which overcomes sparsity\, sharing information across cells and genomic features to robustly quantify genuine biological heterogeneity. scMET can identify highly variable features that drive epigenetic heterogeneity\, and perform differential methylation and variability analyses. We illustrate how scMET facilitates the characterization of epigenetically distinct cell populations and how it enables the formulation of novel hypotheses on the epigenetic regulation of gene expression.


.. conda:package:: bioconductor-scmet

   |downloads_bioconductor-scmet| |docker_bioconductor-scmet|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-coda: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-logitnorm: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-rstan: ``>=2.21.3``
   :depends r-rstantools: ``>=2.1.0``
   :depends r-stanheaders: ``>=2.21.0.7``
   :depends r-vgam: 
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

      mamba install bioconductor-scmet

   and update with::

      mamba update bioconductor-scmet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmet:<tag>

   (see `bioconductor-scmet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmet
   :alt:   (downloads)
.. |docker_bioconductor-scmet| image:: https://quay.io/repository/biocontainers/bioconductor-scmet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmet
.. _`bioconductor-scmet/tags`: https://quay.io/repository/biocontainers/bioconductor-scmet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmet";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmet/README.html