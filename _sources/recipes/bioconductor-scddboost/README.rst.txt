:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scddboost'
.. highlight: bash

bioconductor-scddboost
======================

.. conda:recipe:: bioconductor-scddboost
   :replaces_section_title:
   :noindex:

   A compositional model to assess expression changes from single\-cell rna\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scDDboost.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scddboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scddboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scddboost/meta.yaml>`_

   scDDboost is an R package to analyze changes in the distribution of single\-cell expression data between two experimental conditions. Compared to other methods that assess differential expression\, scDDboost benefits uniquely from information conveyed by the clustering of cells into cellular subtypes. Through a novel empirical Bayesian formulation it calculates gene\-specific posterior probabilities that the marginal expression distribution is the same \(or different\) between the two conditions. The implementation in scDDboost treats gene\-level expression data within each condition as a mixture of negative binomial distributions.


.. conda:package:: bioconductor-scddboost

   |downloads_bioconductor-scddboost| |docker_bioconductor-scddboost|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-ebseq: ``>=2.0.0,<2.1.0``
   :depends bioconductor-ebseq: ``>=2.0.0,<2.1.0a0``
   :depends bioconductor-oscope: ``>=1.32.0,<1.33.0``
   :depends bioconductor-oscope: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-cluster: 
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-rcpp: ``>=0.12.11``
   :depends r-rcppeigen: ``>=0.3.2.9.0``
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

      mamba install bioconductor-scddboost

   and update with::

      mamba update bioconductor-scddboost

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scddboost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scddboost:<tag>

   (see `bioconductor-scddboost/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scddboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scddboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scddboost
   :alt:   (downloads)
.. |docker_bioconductor-scddboost| image:: https://quay.io/repository/biocontainers/bioconductor-scddboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scddboost
.. _`bioconductor-scddboost/tags`: https://quay.io/repository/biocontainers/bioconductor-scddboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scddboost";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scddboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scddboost/README.html