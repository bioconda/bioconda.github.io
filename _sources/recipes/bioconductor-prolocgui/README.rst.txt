:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prolocgui'
.. highlight: bash

bioconductor-prolocgui
======================

.. conda:recipe:: bioconductor-prolocgui
   :replaces_section_title:
   :noindex:

   Interactive visualisation of spatial proteomics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pRolocGUI.html
   :license: GPL-2
   :recipe: /`bioconductor-prolocgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocgui/meta.yaml>`_
   :links: biotools: :biotools:`prolocgui`, doi: :doi:`10.1038/ncomms9992`

   The package pRolocGUI comprises functions to interactively visualise spatial proteomics data on the basis of pRoloc\, pRolocdata and shiny.


.. conda:package:: bioconductor-prolocgui

   |downloads_bioconductor-prolocgui| |docker_bioconductor-prolocgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-proloc: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: 
   :depends r-colourpicker: 
   :depends r-dplyr: 
   :depends r-dt: ``>=0.1.40``
   :depends r-ggplot2: 
   :depends r-scales: 
   :depends r-shiny: ``>=0.9.1``
   :depends r-shinydashboard: 
   :depends r-shinydashboardplus: ``>=2.0.0``
   :depends r-shinyhelper: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
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

      mamba install bioconductor-prolocgui

   and update with::

      mamba update bioconductor-prolocgui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prolocgui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prolocgui:<tag>

   (see `bioconductor-prolocgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prolocgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prolocgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prolocgui
   :alt:   (downloads)
.. |docker_bioconductor-prolocgui| image:: https://quay.io/repository/biocontainers/bioconductor-prolocgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prolocgui
.. _`bioconductor-prolocgui/tags`: https://quay.io/repository/biocontainers/bioconductor-prolocgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prolocgui";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prolocgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prolocgui/README.html