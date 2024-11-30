:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spaniel'
.. highlight: bash

bioconductor-spaniel
====================

.. conda:recipe:: bioconductor-spaniel
   :replaces_section_title:
   :noindex:

   Spatial Transcriptomics Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Spaniel.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spaniel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spaniel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spaniel/meta.yaml>`_

   Spaniel includes a series of tools to aid the quality control and analysis of Spatial Transcriptomics data. Spaniel can import data from either the original Spatial Transcriptomics system or 10X Visium technology. The package contains functions to create a SingleCellExperiment Seurat object and provides a method of loading a histologial image into R. The spanielPlot function allows visualisation of metrics contained within the S4 object overlaid onto the image of the tissue.


.. conda:package:: bioconductor-spaniel

   |downloads_bioconductor-spaniel| |docker_bioconductor-spaniel|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-dropletutils: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-jpeg: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-png: 
   :depends r-seurat: 
   :depends r-shiny: 
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

      mamba install bioconductor-spaniel

   and update with::

      mamba update bioconductor-spaniel

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spaniel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spaniel:<tag>

   (see `bioconductor-spaniel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spaniel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spaniel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spaniel
   :alt:   (downloads)
.. |docker_bioconductor-spaniel| image:: https://quay.io/repository/biocontainers/bioconductor-spaniel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spaniel
.. _`bioconductor-spaniel/tags`: https://quay.io/repository/biocontainers/bioconductor-spaniel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spaniel";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spaniel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spaniel/README.html