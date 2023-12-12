:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mai'
.. highlight: bash

bioconductor-mai
================

.. conda:recipe:: bioconductor-mai
   :replaces_section_title:
   :noindex:

   Mechanism\-Aware Imputation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MAI.html
   :license: GPL-3
   :recipe: /`bioconductor-mai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai/meta.yaml>`_

   A two\-step approach to imputing missing data in metabolomics. Step 1 uses a random forest classifier to classify missing values as either Missing Completely at Random\/Missing At Random \(MCAR\/MAR\) or Missing Not At Random \(MNAR\). MCAR\/MAR are combined because it is often difficult to distinguish these two missing types in metabolomics data. Step 2 imputes the missing values based on the classified missing mechanisms\, using the appropriate imputation algorithms. Imputation algorithms tested and available for MCAR\/MAR include Bayesian Principal Component Analysis \(BPCA\)\, Multiple Imputation No\-Skip K\-Nearest Neighbors \(Multi\_nsKNN\)\, and Random Forest. Imputation algorithms tested and available for MNAR include nsKNN and a single imputation approach for imputation of metabolites where left\-censoring is present.


.. conda:package:: bioconductor-mai

   |downloads_bioconductor-mai| |docker_bioconductor-mai|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-missforest: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-mai

   and update with::

      mamba update bioconductor-mai

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mai:<tag>

   (see `bioconductor-mai/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mai
   :alt:   (downloads)
.. |docker_bioconductor-mai| image:: https://quay.io/repository/biocontainers/bioconductor-mai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mai
.. _`bioconductor-mai/tags`: https://quay.io/repository/biocontainers/bioconductor-mai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mai";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mai/README.html