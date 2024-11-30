:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqcovarimpute'
.. highlight: bash

bioconductor-rnaseqcovarimpute
==============================

.. conda:recipe:: bioconductor-rnaseqcovarimpute
   :replaces_section_title:
   :noindex:

   Impute Covariate Data in RNA Sequencing Studies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RNAseqCovarImpute.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaseqcovarimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcovarimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcovarimpute/meta.yaml>`_

   The RNAseqCovarImpute package implements multiple imputation of missing covariates and differential gene expression analysis by\: 1\) Randomly binning genes into smaller groups\, 2\) Creating M imputed datasets separately within each bin\, where the imputation predictor matrix includes all covariates and the log counts per million \(CPM\) for the genes within each bin\, 3\) Estimating gene expression changes using voom followed by lmFit functions\, separately on each M imputed dataset within each gene bin\, 4\) Un\-binning the gene sets and stacking the M sets of model results before applying the squeezeVar function to apply a variance shrinking Bayesian procedure to each M set of model results\, 5\) Pooling the results with Rubins’ rules to produce combined coefficients\, standard errors\, and P\-values\, and 6\) Adjusting P\-values for multiplicity to account for false discovery rate \(FDR\).


.. conda:package:: bioconductor-rnaseqcovarimpute

   |downloads_bioconductor-rnaseqcovarimpute| |docker_bioconductor-rnaseqcovarimpute|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-magrittr: 
   :depends r-mice: 
   :depends r-rlang: 
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

      mamba install bioconductor-rnaseqcovarimpute

   and update with::

      mamba update bioconductor-rnaseqcovarimpute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnaseqcovarimpute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqcovarimpute:<tag>

   (see `bioconductor-rnaseqcovarimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqcovarimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqcovarimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqcovarimpute
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqcovarimpute| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqcovarimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqcovarimpute
.. _`bioconductor-rnaseqcovarimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqcovarimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqcovarimpute";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqcovarimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqcovarimpute/README.html