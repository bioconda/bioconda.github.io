:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regparallel'
.. highlight: bash

bioconductor-regparallel
========================

.. conda:recipe:: bioconductor-regparallel
   :replaces_section_title:
   :noindex:

   Standard regression functions in R enabled for parallel processing over large data\-frames

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RegParallel.html
   :license: GPL-3
   :recipe: /`bioconductor-regparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel/meta.yaml>`_

   In many analyses\, a large amount of variables have to be tested independently against the trait\/endpoint of interest\, and also adjusted for covariates and confounding factors at the same time. The major bottleneck in these is the amount of time that it takes to complete these analyses. With RegParallel\, a large number of tests can be performed simultaneously. On a 12\-core system\, 144 variables can be tested simultaneously\, with 1000s of variables processed in a matter of seconds via \'nested\' parallel processing. Works for logistic regression\, linear regression\, conditional logistic regression\, Cox proportional hazards and survival models\, and Bayesian logistic regression. Also caters for generalised linear models that utilise survey weights created by the \'survey\' CRAN package and that utilise \'survey\:\:svyglm\'.


.. conda:package:: bioconductor-regparallel

   |downloads_bioconductor-regparallel| |docker_bioconductor-regparallel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.15.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.6-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.15.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-arm: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-stringr: 
   :depends r-survival: 
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

      mamba install bioconductor-regparallel

   and update with::

      mamba update bioconductor-regparallel

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regparallel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regparallel:<tag>

   (see `bioconductor-regparallel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regparallel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regparallel
   :alt:   (downloads)
.. |docker_bioconductor-regparallel| image:: https://quay.io/repository/biocontainers/bioconductor-regparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regparallel
.. _`bioconductor-regparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-regparallel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regparallel";
        var versions = ["1.18.0","1.15.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regparallel/README.html