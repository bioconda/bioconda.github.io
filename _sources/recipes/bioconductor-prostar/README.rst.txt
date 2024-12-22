:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostar'
.. highlight: bash

bioconductor-prostar
====================

.. conda:recipe:: bioconductor-prostar
   :replaces_section_title:
   :noindex:

   Provides a GUI for DAPAR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Prostar.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar/meta.yaml>`_

   This package provides a GUI interface for the DAPAR package. The package Prostar \(Proteomics statistical analysis with R\) is a Bioconductor distributed R package which provides all the necessary functions to analyze quantitative data from label\-free proteomics experiments. Contrarily to most other similar R packages\, it is endowed with rich and user\-friendly graphical interfaces\, so that no programming skill is required.


.. conda:package:: bioconductor-prostar

   |downloads_bioconductor-prostar| |docker_bioconductor-prostar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.3-0</code>,  <code>1.32.1-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.3-0</code>,  <code>1.22.8-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.3-0``,  ``1.32.1-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.3-0``,  ``1.22.8-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.7-0``,  ``1.14.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-dapar: ``>=1.38.0,<1.39.0``
   :depends bioconductor-dapardata: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-highcharter: 
   :depends r-htmlwidgets: 
   :depends r-later: 
   :depends r-markdown: 
   :depends r-promises: 
   :depends r-r.utils: 
   :depends r-rclipboard: 
   :depends r-rcolorbrewer: 
   :depends r-rhandsontable: 
   :depends r-sass: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinyjqui: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinytree: 
   :depends r-shinywidgets: 
   :depends r-tibble: 
   :depends r-vioplot: 
   :depends r-webshot: 
   :depends r-xml: 
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

      mamba install bioconductor-prostar

   and update with::

      mamba update bioconductor-prostar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prostar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostar:<tag>

   (see `bioconductor-prostar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostar
   :alt:   (downloads)
.. |docker_bioconductor-prostar| image:: https://quay.io/repository/biocontainers/bioconductor-prostar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostar
.. _`bioconductor-prostar/tags`: https://quay.io/repository/biocontainers/bioconductor-prostar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prostar";
        var versions = ["1.38.0","1.34.3","1.32.1","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostar/README.html