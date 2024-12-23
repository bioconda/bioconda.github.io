:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decontx'
.. highlight: bash

bioconductor-decontx
====================

.. conda:recipe:: bioconductor-decontx
   :replaces_section_title:
   :noindex:

   Decontamination of single cell genomics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/decontX.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-decontx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontx/meta.yaml>`_

   This package contains implementation of DecontX \(Yang et al. 2020\)\, a decontamination algorithm for single\-cell RNA\-seq\, and DecontPro \(Yin et al. 2023\)\, a decontamination algorithm for single cell protein expression data. DecontX is a novel Bayesian method to computationally estimate and remove RNA contamination in individual cells without empty droplet information. DecontPro is a Bayesian method that estimates the level of contamination from ambient and background sources in CITE\-seq ADT dataset and decontaminate the dataset.


.. conda:package:: bioconductor-decontx

   |downloads_bioconductor-decontx| |docker_bioconductor-decontx|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-celda: ``>=1.22.0,<1.23.0``
   :depends bioconductor-celda: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-dbscan: 
   :depends r-ggplot2: 
   :depends r-matrix: ``>=1.5.3``
   :depends r-mcmcprecision: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-reshape2: 
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.2.0``
   :depends r-seurat: 
   :depends r-stanheaders: ``>=2.18.0``
   :depends r-withr: 
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

      mamba install bioconductor-decontx

   and update with::

      mamba update bioconductor-decontx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-decontx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decontx:<tag>

   (see `bioconductor-decontx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decontx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decontx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decontx
   :alt:   (downloads)
.. |docker_bioconductor-decontx| image:: https://quay.io/repository/biocontainers/bioconductor-decontx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decontx
.. _`bioconductor-decontx/tags`: https://quay.io/repository/biocontainers/bioconductor-decontx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decontx";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decontx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decontx/README.html