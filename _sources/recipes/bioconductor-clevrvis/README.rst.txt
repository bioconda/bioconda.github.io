:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clevrvis'
.. highlight: bash

bioconductor-clevrvis
=====================

.. conda:recipe:: bioconductor-clevrvis
   :replaces_section_title:
   :noindex:

   Visualization Techniques for Clonal Evolution

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/clevRvis.html
   :license: LGPL-3
   :recipe: /`bioconductor-clevrvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clevrvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clevrvis/meta.yaml>`_

   clevRvis provides a set of visualization techniques for clonal evolution. These include shark plots\, dolphin plots and plaice plots. Algorithms for time point interpolation as well as therapy effect estimation are provided. Phylogeny\-aware color coding is implemented. A shiny\-app for generating plots interactively is additionally provided.


.. conda:package:: bioconductor-clevrvis

   |downloads_bioconductor-clevrvis| |docker_bioconductor-clevrvis|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: 
   :depends r-colourpicker: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggiraph: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-readxl: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyhelper: 
   :depends r-shinywidgets: 
   :depends r-tibble: 
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

      mamba install bioconductor-clevrvis

   and update with::

      mamba update bioconductor-clevrvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clevrvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clevrvis:<tag>

   (see `bioconductor-clevrvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clevrvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clevrvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clevrvis
   :alt:   (downloads)
.. |docker_bioconductor-clevrvis| image:: https://quay.io/repository/biocontainers/bioconductor-clevrvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clevrvis
.. _`bioconductor-clevrvis/tags`: https://quay.io/repository/biocontainers/bioconductor-clevrvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clevrvis";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clevrvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clevrvis/README.html