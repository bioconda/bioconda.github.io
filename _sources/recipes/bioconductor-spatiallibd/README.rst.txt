:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatiallibd'
.. highlight: bash

bioconductor-spatiallibd
========================

.. conda:recipe:: bioconductor-spatiallibd
   :replaces_section_title:
   :noindex:

   spatialLIBD\: an R\/Bioconductor package to visualize spatially\-resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/spatialLIBD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatiallibd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatiallibd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatiallibd/meta.yaml>`_

   Inspect interactively the spatially\-resolved transcriptomics data from the 10x Genomics Visium platform as well as data from the Maynard\, Collado\-Torres et al\, Nature Neuroscience\, 2021 project analyzed by Lieber Institute for Brain Development \(LIBD\) researchers and collaborators.


.. conda:package:: bioconductor-spatiallibd

   |downloads_bioconductor-spatiallibd| |docker_bioconductor-spatiallibd|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-data-packages: ``>=20250105``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-benchmarkme: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-jsonlite: 
   :depends r-magick: 
   :depends r-matrix: 
   :depends r-paletteer: 
   :depends r-plotly: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-sessioninfo: 
   :depends r-shiny: 
   :depends r-shinywidgets: 
   :depends r-statmod: 
   :depends r-tibble: 
   :depends r-viridislite: 
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

      mamba install bioconductor-spatiallibd

   and update with::

      mamba update bioconductor-spatiallibd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatiallibd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatiallibd:<tag>

   (see `bioconductor-spatiallibd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatiallibd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatiallibd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatiallibd
   :alt:   (downloads)
.. |docker_bioconductor-spatiallibd| image:: https://quay.io/repository/biocontainers/bioconductor-spatiallibd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatiallibd
.. _`bioconductor-spatiallibd/tags`: https://quay.io/repository/biocontainers/bioconductor-spatiallibd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatiallibd";
        var versions = ["1.18.0","1.14.1","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatiallibd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatiallibd/README.html