:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apl'
.. highlight: bash

bioconductor-apl
================

.. conda:recipe:: bioconductor-apl
   :replaces_section_title:
   :noindex:

   Association Plots

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/APL.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-apl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apl/meta.yaml>`_

   APL is a package developed for computation of Association Plots \(AP\)\, a method for visualization and analysis of single cell transcriptomics data. The main focus of APL is the identification of genes characteristic for individual clusters of cells from input data. The package performs correspondence analysis \(CA\) and allows to identify cluster\-specific genes using Association Plots. Additionally\, APL computes the cluster\-specificity scores for all genes which allows to rank the genes by their specificity for a selected cell cluster of interest.


.. conda:package:: bioconductor-apl

   |downloads_bioconductor-apl| |docker_bioconductor-apl|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-seurat: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-apl

   and update with::

      mamba update bioconductor-apl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-apl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apl:<tag>

   (see `bioconductor-apl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apl
   :alt:   (downloads)
.. |docker_bioconductor-apl| image:: https://quay.io/repository/biocontainers/bioconductor-apl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apl
.. _`bioconductor-apl/tags`: https://quay.io/repository/biocontainers/bioconductor-apl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apl";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apl/README.html