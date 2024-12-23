:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airpart'
.. highlight: bash

bioconductor-airpart
====================

.. conda:recipe:: bioconductor-airpart
   :replaces_section_title:
   :noindex:

   Differential cell\-type\-specific allelic imbalance

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/airpart.html
   :license: GPL-2
   :recipe: /`bioconductor-airpart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart/meta.yaml>`_

   Airpart identifies sets of genes displaying differential cell\-type\-specific allelic imbalance across cell types or states\, utilizing single\-cell allelic counts. It makes use of a generalized fused lasso with binomial observations of allelic counts to partition cell types by their allelic imbalance. Alternatively\, a nonparametric method for partitioning cell types is offered. The package includes a number of visualizations and quality control functions for examining single cell allelic imbalance datasets.


.. conda:package:: bioconductor-airpart

   |downloads_bioconductor-airpart| |docker_bioconductor-airpart|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-apeglm: ``>=1.28.0,<1.29.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clue: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-emdbook: 
   :depends r-forestplot: 
   :depends r-ggplot2: 
   :depends r-lpsolve: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-smurf: 
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

      mamba install bioconductor-airpart

   and update with::

      mamba update bioconductor-airpart

  To create a new environment, run::

      mamba create --name myenvname bioconductor-airpart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-airpart:<tag>

   (see `bioconductor-airpart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-airpart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airpart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airpart
   :alt:   (downloads)
.. |docker_bioconductor-airpart| image:: https://quay.io/repository/biocontainers/bioconductor-airpart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airpart
.. _`bioconductor-airpart/tags`: https://quay.io/repository/biocontainers/bioconductor-airpart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-airpart";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airpart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airpart/README.html