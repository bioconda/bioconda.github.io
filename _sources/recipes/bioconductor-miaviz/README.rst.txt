:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miaviz'
.. highlight: bash

bioconductor-miaviz
===================

.. conda:recipe:: bioconductor-miaviz
   :replaces_section_title:
   :noindex:

   Microbiome Analysis Plotting and Visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/miaViz.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-miaviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miaviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miaviz/meta.yaml>`_

   The miaViz package implements functions to visualize TreeSummarizedExperiment objects especially in the context of microbiome analysis. Part of the mia family of R\/Bioconductor packages.


.. conda:package:: bioconductor-miaviz

   |downloads_bioconductor-miaviz| |docker_bioconductor-miaviz|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-dirichletmultinomial: ``>=1.44.0,<1.45.0``
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends bioconductor-mia: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.10.0,<2.11.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggraph: ``>=2.0``
   :depends r-ggrepel: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-tidytree: 
   :depends r-viridis: 
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

      mamba install bioconductor-miaviz

   and update with::

      mamba update bioconductor-miaviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-miaviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-miaviz:<tag>

   (see `bioconductor-miaviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-miaviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miaviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miaviz
   :alt:   (downloads)
.. |docker_bioconductor-miaviz| image:: https://quay.io/repository/biocontainers/bioconductor-miaviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miaviz
.. _`bioconductor-miaviz/tags`: https://quay.io/repository/biocontainers/bioconductor-miaviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miaviz";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miaviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miaviz/README.html