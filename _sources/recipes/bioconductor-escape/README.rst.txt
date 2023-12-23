:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-escape'
.. highlight: bash

bioconductor-escape
===================

.. conda:recipe:: bioconductor-escape
   :replaces_section_title:
   :noindex:

   Easy single cell analysis platform for enrichment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/escape.html
   :license: GPL-2
   :recipe: /`bioconductor-escape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escape/meta.yaml>`_

   A bridging R package to facilitate gene set enrichment analysis \(GSEA\) in the context of single\-cell RNA sequencing. Using raw count information\, Seurat objects\, or SingleCellExperiment format\, users can perform and visualize GSEA across individual cells.


.. conda:package:: bioconductor-escape

   |downloads_bioconductor-escape| |docker_bioconductor-escape|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-gsva: ``>=1.50.0,<1.51.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-ucell: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-matrix: 
   :depends r-msigdbr: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-rlang: 
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

      mamba install bioconductor-escape

   and update with::

      mamba update bioconductor-escape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-escape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-escape:<tag>

   (see `bioconductor-escape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-escape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-escape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-escape
   :alt:   (downloads)
.. |docker_bioconductor-escape| image:: https://quay.io/repository/biocontainers/bioconductor-escape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-escape
.. _`bioconductor-escape/tags`: https://quay.io/repository/biocontainers/bioconductor-escape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-escape";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-escape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-escape/README.html