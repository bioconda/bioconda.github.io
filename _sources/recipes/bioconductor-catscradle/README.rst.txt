:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catscradle'
.. highlight: bash

bioconductor-catscradle
=======================

.. conda:recipe:: bioconductor-catscradle
   :replaces_section_title:
   :noindex:

   This package provides methods for analysing spatial transcriptomics data and for discovering gene clusters

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CatsCradle.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-catscradle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catscradle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catscradle/meta.yaml>`_

   This package addresses two broad areas.  It allows for in\-depth analysis of spatial transcriptomic data by identifying tissue neighbourhoods.  These are contiguous regions of tissue surrounding individual cells.  \'CatsCradle\' allows for the categorisation of neighbourhoods by the cell types contained in them and the genes expressed in them.  In particular\, it produces Seurat objects whose individual elements are neighbourhoods rather than cells.  In addition\, it enables the categorisation and annotation of genes by producing Seurat objects whose elements are genes.


.. conda:package:: bioconductor-catscradle

   |downloads_bioconductor-catscradle| |docker_bioconductor-catscradle|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-geometry: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-msigdbr: 
   :depends r-networkd3: 
   :depends r-pheatmap: 
   :depends r-pracma: 
   :depends r-rdist: 
   :depends r-reshape2: 
   :depends r-rfast: 
   :depends r-seurat: ``>=5.0.1``
   :depends r-seuratobject: 
   :depends r-stringr: 
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

      mamba install bioconductor-catscradle

   and update with::

      mamba update bioconductor-catscradle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-catscradle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-catscradle:<tag>

   (see `bioconductor-catscradle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-catscradle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-catscradle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-catscradle
   :alt:   (downloads)
.. |docker_bioconductor-catscradle| image:: https://quay.io/repository/biocontainers/bioconductor-catscradle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-catscradle
.. _`bioconductor-catscradle/tags`: https://quay.io/repository/biocontainers/bioconductor-catscradle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-catscradle";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-catscradle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-catscradle/README.html