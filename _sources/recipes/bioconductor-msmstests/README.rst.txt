:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmstests'
.. highlight: bash

bioconductor-msmstests
======================

.. conda:recipe:: bioconductor-msmstests
   :replaces_section_title:
   :noindex:

   LC\-MS\/MS Differential Expression Tests

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/msmsTests.html
   :license: GPL-2
   :recipe: /`bioconductor-msmstests <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmstests>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmstests/meta.yaml>`_

   Statistical tests for label\-free LC\-MS\/MS data by spectral counts\, to discover differentially expressed proteins between two biological conditions. Three tests are available\: Poisson GLM regression\, quasi\-likelihood GLM regression\, and the negative binomial of the edgeR package.The three models admit blocking factors to control for nuissance variables.To assure a good level of reproducibility a post\-test filter is available\, where we may set the minimum effect size considered biologicaly relevant\, and the minimum expression of the most abundant condition.


.. conda:package:: bioconductor-msmstests

   |downloads_bioconductor-msmstests| |docker_bioconductor-msmstests|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-msmseda: ``>=1.38.0,<1.39.0``
   :depends bioconductor-msnbase: ``>=2.26.0,<2.27.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-msmstests

   and update with::

      mamba update bioconductor-msmstests

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msmstests

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msmstests:<tag>

   (see `bioconductor-msmstests/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msmstests| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmstests.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmstests
   :alt:   (downloads)
.. |docker_bioconductor-msmstests| image:: https://quay.io/repository/biocontainers/bioconductor-msmstests/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmstests
.. _`bioconductor-msmstests/tags`: https://quay.io/repository/biocontainers/bioconductor-msmstests?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msmstests";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmstests/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmstests/README.html