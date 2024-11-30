:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeexplorer'
.. highlight: bash

bioconductor-microbiomeexplorer
===============================

.. conda:recipe:: bioconductor-microbiomeexplorer
   :replaces_section_title:
   :noindex:

   Microbiome Exploration App

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiomeExplorer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomeexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer/meta.yaml>`_

   The MicrobiomeExplorer R package is designed to facilitate the analysis and visualization of marker\-gene survey feature data. It allows a user to perform and visualize typical microbiome analytical workflows either through the command line or an interactive Shiny application included with the package. In addition to applying common analytical workflows the application enables automated analysis report generation.


.. conda:package:: bioconductor-microbiomeexplorer

   |downloads_bioconductor-microbiomeexplorer| |docker_bioconductor-microbiomeexplorer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomformat: ``>=1.30.0,<1.31.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-car: 
   :depends r-dplyr: 
   :depends r-dt: ``>=0.12.0``
   :depends r-forcats: 
   :depends r-heatmaply: 
   :depends r-knitr: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-plotly: ``>=4.9.1``
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: ``>=1.9.0``
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install bioconductor-microbiomeexplorer

   and update with::

      mamba update bioconductor-microbiomeexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomeexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomeexplorer:<tag>

   (see `bioconductor-microbiomeexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomeexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeexplorer
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer
.. _`bioconductor-microbiomeexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomeexplorer";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html