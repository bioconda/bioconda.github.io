:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lemur'
.. highlight: bash

bioconductor-lemur
==================

.. conda:recipe:: bioconductor-lemur
   :replaces_section_title:
   :noindex:

   Latent Embedding Multivariate Regression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/lemur.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lemur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lemur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lemur/meta.yaml>`_

   Fit a latent embedding multivariate regression \(LEMUR\) model to multi\-condition single\-cell data. The model provides a parametric description of single\-cell data measured with complex experimental designs. The parametric model is used to \(1\) align conditions\, \(2\) predict log fold changes between conditions for all cells\, and \(3\) identify cell neighborhoods with consistent log fold changes. For those neighborhoods\, a pseudobulked differential expression test is conducted to assess which genes are significantly changed.


.. conda:package:: bioconductor-lemur

   |downloads_bioconductor-lemur| |docker_bioconductor-lemur|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-glmgampoi: ``>=1.14.0,<1.15.0``
   :depends bioconductor-glmgampoi: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0a0``
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
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-harmony: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rlang: 
   :depends r-vctrs: 
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

      mamba install bioconductor-lemur

   and update with::

      mamba update bioconductor-lemur

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lemur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lemur:<tag>

   (see `bioconductor-lemur/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lemur| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lemur.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lemur
   :alt:   (downloads)
.. |docker_bioconductor-lemur| image:: https://quay.io/repository/biocontainers/bioconductor-lemur/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lemur
.. _`bioconductor-lemur/tags`: https://quay.io/repository/biocontainers/bioconductor-lemur?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lemur";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lemur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lemur/README.html