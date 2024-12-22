:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qmtools'
.. highlight: bash

bioconductor-qmtools
====================

.. conda:recipe:: bioconductor-qmtools
   :replaces_section_title:
   :noindex:

   Quantitative Metabolomics Data Processing Tools

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/qmtools.html
   :license: GPL-3
   :recipe: /`bioconductor-qmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools/meta.yaml>`_

   The qmtools \(quantitative metabolomics tools\) package provides basic tools for processing quantitative metabolomics data with the standard SummarizedExperiment class. This includes functions for imputation\, normalization\, feature filtering\, feature clustering\, dimension\-reduction\, and visualization to help users prepare data for statistical analysis. This package also offers a convenient way to compute empirical Bayes statistics for which metabolic features are different between two sets of study samples. Several functions in this package could also be used in other types of omics data.


.. conda:package:: bioconductor-qmtools

   |downloads_bioconductor-qmtools| |docker_bioconductor-qmtools|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-patchwork: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-vim: 
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

      mamba install bioconductor-qmtools

   and update with::

      mamba update bioconductor-qmtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qmtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qmtools:<tag>

   (see `bioconductor-qmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qmtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qmtools
   :alt:   (downloads)
.. |docker_bioconductor-qmtools| image:: https://quay.io/repository/biocontainers/bioconductor-qmtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qmtools
.. _`bioconductor-qmtools/tags`: https://quay.io/repository/biocontainers/bioconductor-qmtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qmtools";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qmtools/README.html