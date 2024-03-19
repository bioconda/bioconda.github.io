:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-azimuth'
.. highlight: bash

r-azimuth
=========

.. conda:recipe:: r-azimuth
   :replaces_section_title:
   :noindex:

   Azimuth is a Shiny app demonstrating a query\-reference mapping algorithm for single\-cell data.

   :homepage: https://github.com/satijalab/azimuth
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-azimuth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-azimuth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-azimuth/meta.yaml>`_

   


.. conda:package:: r-azimuth

   |downloads_r-azimuth| |docker_r-azimuth|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.6-0``

      

   
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.5,<1.5.0a0``
   :depends bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0a0``
   :depends bioconductor-glmgampoi: ``>=1.0.0``
   :depends bioconductor-glmgampoi: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-jaspar2020: ``>=0.99.10,<0.100.0a0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: ``>=0.15``
   :depends r-future: ``>=1.19.1``
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-googlesheets4: ``>=0.2.0``
   :depends r-hdf5r: ``>=1.3.2``
   :depends r-htmltools: ``>=0.5.0``
   :depends r-httr: ``>=1.4.2``
   :depends r-jsonlite: ``>=1.7.0``
   :depends r-matrix: ``>=1.2.18``
   :depends r-patchwork: ``>=1.0.1``
   :depends r-plotly: 
   :depends r-presto: ``1.0.0``
   :depends r-presto: ``>=1.0.0,<1.0.1.0a0``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-rlang: ``>=0.4.8``
   :depends r-scales: ``>=1.1.1``
   :depends r-seurat: ``>=5.0.0``
   :depends r-seurat-data: ``0.2.1``
   :depends r-seurat-data: ``>=0.2.1,<0.2.2.0a0``
   :depends r-seurat-disk: ``0.0.0.9021``
   :depends r-seurat-disk: ``>=0.0.0.9021,<0.0.0.9022.0a0``
   :depends r-seuratobject: ``>=5.0.0``
   :depends r-shiny: ``>=1.5.0``
   :depends r-shinybs: ``>=0.61``
   :depends r-shinydashboard: ``>=0.7.1``
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-signac: ``>=1.12.0``
   :depends r-signac: ``>=1.12.0,<2.0a0``
   :depends r-stringr: ``>=1.4.0``
   :depends r-withr: ``>=2.3.0``
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

      mamba install r-azimuth

   and update with::

      mamba update r-azimuth

  To create a new environment, run::

      mamba create --name myenvname r-azimuth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-azimuth:<tag>

   (see `r-azimuth/tags`_ for valid values for ``<tag>``)


.. |downloads_r-azimuth| image:: https://img.shields.io/conda/dn/bioconda/r-azimuth.svg?style=flat
   :target: https://anaconda.org/bioconda/r-azimuth
   :alt:   (downloads)
.. |docker_r-azimuth| image:: https://quay.io/repository/biocontainers/r-azimuth/status
   :target: https://quay.io/repository/biocontainers/r-azimuth
.. _`r-azimuth/tags`: https://quay.io/repository/biocontainers/r-azimuth?tab=tags


.. raw:: html

    <script>
        var package = "r-azimuth";
        var versions = ["0.5.0","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-azimuth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-azimuth/README.html