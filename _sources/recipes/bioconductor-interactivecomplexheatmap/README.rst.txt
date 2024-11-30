:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivecomplexheatmap'
.. highlight: bash

bioconductor-interactivecomplexheatmap
======================================

.. conda:recipe:: bioconductor-interactivecomplexheatmap
   :replaces_section_title:
   :noindex:

   Make Interactive Complex Heatmaps

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/InteractiveComplexHeatmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-interactivecomplexheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivecomplexheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivecomplexheatmap/meta.yaml>`_

   This package can easily make heatmaps which are produced by the ComplexHeatmap package into interactive applications. It provides two types of interactivities\: 1. on the interactive graphics device\, and 2. on a Shiny app. It also provides functions for integrating the interactive heatmap widgets for more complex Shiny app development.


.. conda:package:: bioconductor-interactivecomplexheatmap

   |downloads_bioconductor-interactivecomplexheatmap| |docker_bioconductor-interactivecomplexheatmap|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clisymbols: 
   :depends r-digest: 
   :depends r-fontawesome: 
   :depends r-getoptlong: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-kableextra: ``>=1.3.1``
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :depends r-svglite: 
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

      mamba install bioconductor-interactivecomplexheatmap

   and update with::

      mamba update bioconductor-interactivecomplexheatmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-interactivecomplexheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interactivecomplexheatmap:<tag>

   (see `bioconductor-interactivecomplexheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivecomplexheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivecomplexheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interactivecomplexheatmap
   :alt:   (downloads)
.. |docker_bioconductor-interactivecomplexheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap
.. _`bioconductor-interactivecomplexheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivecomplexheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interactivecomplexheatmap";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivecomplexheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivecomplexheatmap/README.html