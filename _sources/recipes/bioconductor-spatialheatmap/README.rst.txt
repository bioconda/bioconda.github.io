:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialheatmap'
.. highlight: bash

bioconductor-spatialheatmap
===========================

.. conda:recipe:: bioconductor-spatialheatmap
   :replaces_section_title:
   :noindex:

   spatialHeatmap

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/spatialHeatmap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialheatmap/meta.yaml>`_

   The spatialHeatmap package offers the primary functionality for visualizing cell\-\, tissue\- and organ\-specific assay data in spatial anatomical images. Additionally\, it provides extended functionalities for large\-scale data mining routines and co\-visualizing bulk and single\-cell data.


.. conda:package:: bioconductor-spatialheatmap

   |downloads_bioconductor-spatialheatmap| |docker_bioconductor-spatialheatmap|

   :versions:
      
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scuttle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-grimport: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rsvg: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-spscomps: ``>=0.3.3.0``
   :depends r-tibble: 
   :depends r-xml2: 
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

      mamba install bioconductor-spatialheatmap

   and update with::

      mamba update bioconductor-spatialheatmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialheatmap:<tag>

   (see `bioconductor-spatialheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialheatmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialheatmap
   :alt:   (downloads)
.. |docker_bioconductor-spatialheatmap| image:: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap
.. _`bioconductor-spatialheatmap/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialheatmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialheatmap";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialheatmap/README.html