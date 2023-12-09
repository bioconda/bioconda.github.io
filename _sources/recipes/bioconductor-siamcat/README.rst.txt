:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-siamcat'
.. highlight: bash

bioconductor-siamcat
====================

.. conda:recipe:: bioconductor-siamcat
   :replaces_section_title:
   :noindex:

   Statistical Inference of Associations between Microbial Communities And host phenoTypes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SIAMCAT.html
   :license: GPL-3
   :recipe: /`bioconductor-siamcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat/meta.yaml>`_

   Pipeline for Statistical Inference of Associations between Microbial Communities And host phenoTypes \(SIAMCAT\). A primary goal of analyzing microbiome data is to determine changes in community composition that are associated with environmental factors. In particular\, linking human microbiome composition to host phenotypes such as diseases has become an area of intense research. For this\, robust statistical modeling and biomarker extraction toolkits are crucially needed. SIAMCAT provides a full pipeline supporting data preprocessing\, statistical association testing\, statistical modeling \(LASSO logistic regression\) including tools for evaluation and interpretation of these models \(such as cross validation\, parameter selection\, ROC analysis and diagnostic model plots\).


.. conda:package:: bioconductor-siamcat

   |downloads_bioconductor-siamcat| |docker_bioconductor-siamcat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-phyloseq: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-beanplot: 
   :depends r-corrplot: 
   :depends r-glmnet: 
   :depends r-gridbase: 
   :depends r-gridextra: 
   :depends r-infotheo: 
   :depends r-lgr: 
   :depends r-liblinear: 
   :depends r-lmertest: 
   :depends r-matrixstats: 
   :depends r-mlr3: 
   :depends r-mlr3learners: 
   :depends r-mlr3tuning: 
   :depends r-paradox: 
   :depends r-proc: 
   :depends r-progress: 
   :depends r-prroc: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-stringr: 
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

      mamba install bioconductor-siamcat

   and update with::

      mamba update bioconductor-siamcat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-siamcat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-siamcat:<tag>

   (see `bioconductor-siamcat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-siamcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-siamcat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-siamcat
   :alt:   (downloads)
.. |docker_bioconductor-siamcat| image:: https://quay.io/repository/biocontainers/bioconductor-siamcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-siamcat
.. _`bioconductor-siamcat/tags`: https://quay.io/repository/biocontainers/bioconductor-siamcat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-siamcat";
        var versions = ["2.6.0","2.4.0","2.2.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-siamcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-siamcat/README.html