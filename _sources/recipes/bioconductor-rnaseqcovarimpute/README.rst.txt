:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqcovarimpute'
.. highlight: bash

bioconductor-rnaseqcovarimpute
==============================

.. conda:recipe:: bioconductor-rnaseqcovarimpute
   :replaces_section_title:
   :noindex:

   Impute Covariate Data in RNA Sequencing Studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAseqCovarImpute.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaseqcovarimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcovarimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcovarimpute/meta.yaml>`_

   The RNAseqCovarImpute package makes linear model analysis for RNA sequencing read counts compatible with multiple imputation \(MI\) of missing covariates. A major problem with implementing MI in RNA sequencing studies is that the outcome data must be included in the imputation prediction models to avoid bias. This is difficult in omics studies with high\-dimensional data. The first method we developed in the RNAseqCovarImpute package surmounts the problem of high\-dimensional outcome data by binning genes into smaller groups to analyze pseudo\-independently. This method implements covariate MI in gene expression studies by 1\) randomly binning genes into smaller groups\, 2\) creating M imputed datasets separately within each bin\, where the imputation predictor matrix includes all covariates and the log counts per million \(CPM\) for the genes within each bin\, 3\) estimating gene expression changes using \`limma\:\:voom\` followed by \`limma\:\:lmFit\` functions\, separately on each M imputed dataset within each gene bin\, 4\) un\-binning the gene sets and stacking the M sets of model results before applying the \`limma\:\:squeezeVar\` function to apply a variance shrinking Bayesian procedure to each M set of model results\, 5\) pooling the results with Rubins’ rules to produce combined coefficients\, standard errors\, and P\-values\, and 6\) adjusting P\-values for multiplicity to account for false discovery rate \(FDR\). A faster method uses principal component analysis \(PCA\) to avoid binning genes while still retaining outcome information in the MI models. Binning genes into smaller groups requires that the MI and limma\-voom analysis is run many times \(typically hundreds\). The more computationally efficient MI PCA method implements covariate MI in gene expression studies by 1\) performing PCA on the log CPM values for all genes using the Bioconductor \`PCAtools\` package\, 2\) creating M imputed datasets where the imputation predictor matrix includes all covariates and the optimum number of PCs to retain \(e.g.\, based on Horn’s parallel analysis or the number of PCs that account for \>80\% explained variation\)\, 3\) conducting the standard limma\-voom pipeline with the \`voom\` followed by \`lmFit\` followed by \`eBayes\` functions on each M imputed dataset\, 4\) pooling the results with Rubins’ rules to produce combined coefficients\, standard errors\, and P\-values\, and 5\) adjusting P\-values for multiplicity to account for false discovery rate \(FDR\).


.. conda:package:: bioconductor-rnaseqcovarimpute

   |downloads_bioconductor-rnaseqcovarimpute| |docker_bioconductor-rnaseqcovarimpute|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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
        var versions = ["1.4.0","1.0.2"];
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