:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transformgampoi'
.. highlight: bash

bioconductor-transformgampoi
============================

.. conda:recipe:: bioconductor-transformgampoi
   :replaces_section_title:
   :noindex:

   Variance Stabilizing Transformation for Gamma\-Poisson Models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/transformGamPoi.html
   :license: GPL-3
   :recipe: /`bioconductor-transformgampoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transformgampoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transformgampoi/meta.yaml>`_

   Variance\-stabilizing transformations help with the analysis of heteroskedastic data \(i.e.\, data where the variance is not constant\, like count data\). This package provide two types of variance stabilizing transformations\: \(1\) methods based on the delta method \(e.g.\, \'acosh\'\, \'log\(x\+1\)\'\)\, \(2\) model residual based \(Pearson and randomized quantile residuals\).


.. conda:package:: bioconductor-transformgampoi

   |downloads_bioconductor-transformgampoi| |docker_bioconductor-transformgampoi|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-glmgampoi: ``>=1.18.0,<1.19.0``
   :depends bioconductor-glmgampoi: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
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

      mamba install bioconductor-transformgampoi

   and update with::

      mamba update bioconductor-transformgampoi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-transformgampoi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transformgampoi:<tag>

   (see `bioconductor-transformgampoi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transformgampoi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transformgampoi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transformgampoi
   :alt:   (downloads)
.. |docker_bioconductor-transformgampoi| image:: https://quay.io/repository/biocontainers/bioconductor-transformgampoi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transformgampoi
.. _`bioconductor-transformgampoi/tags`: https://quay.io/repository/biocontainers/bioconductor-transformgampoi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transformgampoi";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transformgampoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transformgampoi/README.html