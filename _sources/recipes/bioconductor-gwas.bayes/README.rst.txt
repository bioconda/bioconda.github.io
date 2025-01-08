:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwas.bayes'
.. highlight: bash

bioconductor-gwas.bayes
=======================

.. conda:recipe:: bioconductor-gwas.bayes
   :replaces_section_title:
   :noindex:

   Bayesian analysis of Gaussian GWAS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GWAS.BAYES.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-gwas.bayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwas.bayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwas.bayes/meta.yaml>`_

   This package is built to perform GWAS analysis using Bayesian techniques. Currently\, GWAS.BAYES has functionality for the implementation of BICOSS \(Williams\, J.\, Ferreira\, M. A.\, and Ji\, T. \(2022\). BICOSS\: Bayesian iterative conditional stochastic search for GWAS. BMC Bioinformatics\)\, BGWAS \(Williams\, J.\, Xu\, S.\, Ferreira\, M. A.. \(2023\) \"BGWAS\: Bayesian variable selection in linear mixed models with nonlocal priors for genome\-wide association studies.\" BMC Bioinformatics\)\, and GINA. All methods currently are for the analysis of Gaussian phenotypes The research related to this package was supported in part by National Science Foundation awards DMS 1853549\, DMS 1853556\, and DMS 2054173.


.. conda:package:: bioconductor-gwas.bayes

   |downloads_bioconductor-gwas.bayes| |docker_bioconductor-gwas.bayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: ``>=6.0-86``
   :depends r-ga: ``>=3.2``
   :depends r-mass: ``>=7.3-58.1``
   :depends r-matrix: ``>=1.2-18``
   :depends r-memoise: ``>=1.1.0``
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

      mamba install bioconductor-gwas.bayes

   and update with::

      mamba update bioconductor-gwas.bayes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwas.bayes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwas.bayes:<tag>

   (see `bioconductor-gwas.bayes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwas.bayes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwas.bayes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwas.bayes
   :alt:   (downloads)
.. |docker_bioconductor-gwas.bayes| image:: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes
.. _`bioconductor-gwas.bayes/tags`: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwas.bayes";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwas.bayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwas.bayes/README.html