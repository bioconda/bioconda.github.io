:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pmp'
.. highlight: bash

bioconductor-pmp
================

.. conda:recipe:: bioconductor-pmp
   :replaces_section_title:
   :noindex:

   Peak Matrix Processing and signal batch correction for metabolomics datasets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pmp.html
   :license: GPL-3
   :recipe: /`bioconductor-pmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmp/meta.yaml>`_

   Methods and tools for \(pre\-\)processing of metabolomics datasets \(i.e. peak matrices\)\, including filtering\, normalisation\, missing value imputation\, scaling\, and signal drift and batch effect correction methods. Filtering methods are based on\: the fraction of missing values \(across samples or features\)\; Relative Standard Deviation \(RSD\) calculated from the Quality Control \(QC\) samples\; the blank samples. Normalisation methods include Probabilistic Quotient Normalisation \(PQN\) and normalisation to total signal intensity. A unified user interface for several commonly used missing value imputation algorithms is also provided. Supported methods are\: k\-nearest neighbours \(knn\)\, random forests \(rf\)\, Bayesian PCA missing value estimator \(bpca\)\, mean or median value of the given feature and a constant small value. The generalised logarithm \(glog\) transformation algorithm is available to stabilise the variance across low and high intensity mass spectral features. Finally\, this package provides an implementation of the Quality Control\-Robust Spline Correction \(QCRSC\) algorithm for signal drift and batch effect correction of mass spectrometry\-based datasets.


.. conda:package:: bioconductor-pmp

   |downloads_bioconductor-pmp| |docker_bioconductor-pmp|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-missforest: 
   :depends r-reshape2: 
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

      mamba install bioconductor-pmp

   and update with::

      mamba update bioconductor-pmp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pmp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pmp:<tag>

   (see `bioconductor-pmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pmp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pmp
   :alt:   (downloads)
.. |docker_bioconductor-pmp| image:: https://quay.io/repository/biocontainers/bioconductor-pmp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pmp
.. _`bioconductor-pmp/tags`: https://quay.io/repository/biocontainers/bioconductor-pmp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pmp";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pmp/README.html