:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidyspatialexperiment'
.. highlight: bash

bioconductor-tidyspatialexperiment
==================================

.. conda:recipe:: bioconductor-tidyspatialexperiment
   :replaces_section_title:
   :noindex:

   SpatialExperiment with tidy principles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidySpatialExperiment.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tidyspatialexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyspatialexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyspatialexperiment/meta.yaml>`_

   tidySpatialExperiment provides a bridge between the SpatialExperiment package and the tidyverse ecosystem. It creates an invisible layer that allows you to interact with a SpatialExperiment object as if it were a tibble\; enabling the use of functions from dplyr\, tidyr\, ggplot2 and plotly. But\, underneath\, your data remains a SpatialExperiment object.


.. conda:package:: bioconductor-tidyspatialexperiment

   |downloads_bioconductor-tidyspatialexperiment| |docker_bioconductor-tidyspatialexperiment|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-tidysinglecellexperiment: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-fansi: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magick: 
   :depends r-matrix: 
   :depends r-pillar: 
   :depends r-pkgconfig: 
   :depends r-plotly: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidygate: ``>=1.0.13``
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-ttservice: 
   :depends r-vctrs: 
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

      mamba install bioconductor-tidyspatialexperiment

   and update with::

      mamba update bioconductor-tidyspatialexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidyspatialexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidyspatialexperiment:<tag>

   (see `bioconductor-tidyspatialexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidyspatialexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidyspatialexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidyspatialexperiment
   :alt:   (downloads)
.. |docker_bioconductor-tidyspatialexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-tidyspatialexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidyspatialexperiment
.. _`bioconductor-tidyspatialexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-tidyspatialexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidyspatialexperiment";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidyspatialexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidyspatialexperiment/README.html