:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bg2'
.. highlight: bash

bioconductor-bg2
================

.. conda:recipe:: bioconductor-bg2
   :replaces_section_title:
   :noindex:

   Performs Bayesian GWAS analysis for non\-Gaussian data using BG2

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BG2.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bg2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bg2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bg2/meta.yaml>`_

   This package is built to perform GWAS analysis for non\-Gaussian data using BG2. The BG2 method uses penalized quasi\-likelihood along with nonlocal priors in a two step manner to identify SNPs in GWAS analysis. The research related to this package was supported in part by National Science Foundation awards DMS 1853549 and DMS 2054173.


.. conda:package:: bioconductor-bg2

   |downloads_bioconductor-bg2| |docker_bioconductor-bg2|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
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

      mamba install bioconductor-bg2

   and update with::

      mamba update bioconductor-bg2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bg2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bg2:<tag>

   (see `bioconductor-bg2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bg2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bg2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bg2
   :alt:   (downloads)
.. |docker_bioconductor-bg2| image:: https://quay.io/repository/biocontainers/bioconductor-bg2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bg2
.. _`bioconductor-bg2/tags`: https://quay.io/repository/biocontainers/bioconductor-bg2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bg2";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bg2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bg2/README.html