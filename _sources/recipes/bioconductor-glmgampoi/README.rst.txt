:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glmgampoi'
.. highlight: bash

bioconductor-glmgampoi
======================

.. conda:recipe:: bioconductor-glmgampoi
   :replaces_section_title:
   :noindex:

   Fit a Gamma\-Poisson Generalized Linear Model

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/glmGamPoi.html
   :license: GPL-3
   :recipe: /`bioconductor-glmgampoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmgampoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmgampoi/meta.yaml>`_

   Fit linear models to overdispersed count data. The package can estimate the overdispersion and fit repeated models for matrix input. It is designed to handle large input datasets as they typically occur in single cell RNA\-seq experiments.


.. conda:package:: bioconductor-glmgampoi

   |downloads_bioconductor-glmgampoi| |docker_bioconductor-glmgampoi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rlang: 
   :depends r-vctrs: 
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

      mamba install bioconductor-glmgampoi

   and update with::

      mamba update bioconductor-glmgampoi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-glmgampoi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glmgampoi:<tag>

   (see `bioconductor-glmgampoi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glmgampoi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glmgampoi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glmgampoi
   :alt:   (downloads)
.. |docker_bioconductor-glmgampoi| image:: https://quay.io/repository/biocontainers/bioconductor-glmgampoi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glmgampoi
.. _`bioconductor-glmgampoi/tags`: https://quay.io/repository/biocontainers/bioconductor-glmgampoi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-glmgampoi";
        var versions = ["1.18.0","1.14.0","1.12.2","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glmgampoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glmgampoi/README.html