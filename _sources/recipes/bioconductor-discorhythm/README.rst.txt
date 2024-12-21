:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-discorhythm'
.. highlight: bash

bioconductor-discorhythm
========================

.. conda:recipe:: bioconductor-discorhythm
   :replaces_section_title:
   :noindex:

   Interactive Workflow for Discovering Rhythmicity in Biological Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DiscoRhythm.html
   :license: GPL-3
   :recipe: /`bioconductor-discorhythm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discorhythm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discorhythm/meta.yaml>`_

   Set of functions for estimation of cyclical characteristics\, such as period\, phase\, amplitude\, and statistical significance in large temporal datasets. Supporting functions are available for quality control\, dimensionality reduction\, spectral analysis\, and analysis of experimental replicates. Contains a R Shiny web interface to execute all workflow steps.


.. conda:package:: bioconductor-discorhythm

   |downloads_bioconductor-discorhythm| |docker_bioconductor-discorhythm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends pandoc: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-heatmaply: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-magick: 
   :depends r-matrixstats: 
   :depends r-matrixtests: 
   :depends r-metacycle: ``>=1.2.0``
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
   :depends r-viridis: 
   :depends r-zip: 
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

      mamba install bioconductor-discorhythm

   and update with::

      mamba update bioconductor-discorhythm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-discorhythm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-discorhythm:<tag>

   (see `bioconductor-discorhythm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-discorhythm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-discorhythm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-discorhythm
   :alt:   (downloads)
.. |docker_bioconductor-discorhythm| image:: https://quay.io/repository/biocontainers/bioconductor-discorhythm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-discorhythm
.. _`bioconductor-discorhythm/tags`: https://quay.io/repository/biocontainers/bioconductor-discorhythm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-discorhythm";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-discorhythm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-discorhythm/README.html