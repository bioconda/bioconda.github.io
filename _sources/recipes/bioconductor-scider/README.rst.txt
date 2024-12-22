:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scider'
.. highlight: bash

bioconductor-scider
===================

.. conda:recipe:: bioconductor-scider
   :replaces_section_title:
   :noindex:

   Spatial cell\-type inter\-correlation by density in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scider.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scider/meta.yaml>`_

   scider is an user\-friendly R package providing functions to model the global density of cells in a slide of spatial transcriptomics data. All functions in the package are built based on the SpatialExperiment object\, allowing integration into various spatial transcriptomics\-related packages from Bioconductor. After modelling density\, the package allows for serveral downstream analysis\, including colocalization analysis\, boundary detection analysis and differential density analysis.


.. conda:package:: bioconductor-scider

   |downloads_bioconductor-scider| |docker_bioconductor-scider|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-isoband: 
   :depends r-janitor: 
   :depends r-knitr: 
   :depends r-lwgeom: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-rlang: 
   :depends r-sf: 
   :depends r-shiny: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
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

      mamba install bioconductor-scider

   and update with::

      mamba update bioconductor-scider

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scider:<tag>

   (see `bioconductor-scider/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scider| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scider.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scider
   :alt:   (downloads)
.. |docker_bioconductor-scider| image:: https://quay.io/repository/biocontainers/bioconductor-scider/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scider
.. _`bioconductor-scider/tags`: https://quay.io/repository/biocontainers/bioconductor-scider?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scider";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scider/README.html