:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdotplot'
.. highlight: bash

bioconductor-scdotplot
======================

.. conda:recipe:: bioconductor-scdotplot
   :replaces_section_title:
   :noindex:

   Cluster a Single\-cell RNA\-seq Dot Plot

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDotPlot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scdotplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdotplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdotplot/meta.yaml>`_

   Dot plots of single\-cell RNA\-seq data allow for an examination of the relationships between cell groupings \(e.g. clusters\) and marker gene expression. The scDotPlot package offers a unified approach to perform a hierarchical clustering analysis and add annotations to the columns and\/or rows of a scRNA\-seq dot plot. It works with SingleCellExperiment and Seurat objects as well as data frames.


.. conda:package:: bioconductor-scdotplot

   |downloads_bioconductor-scdotplot| |docker_bioconductor-scdotplot|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-aplot: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-scdotplot

   and update with::

      mamba update bioconductor-scdotplot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdotplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdotplot:<tag>

   (see `bioconductor-scdotplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdotplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdotplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdotplot
   :alt:   (downloads)
.. |docker_bioconductor-scdotplot| image:: https://quay.io/repository/biocontainers/bioconductor-scdotplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdotplot
.. _`bioconductor-scdotplot/tags`: https://quay.io/repository/biocontainers/bioconductor-scdotplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdotplot";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdotplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdotplot/README.html