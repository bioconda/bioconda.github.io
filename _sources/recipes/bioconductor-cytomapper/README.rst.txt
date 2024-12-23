:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomapper'
.. highlight: bash

bioconductor-cytomapper
=======================

.. conda:recipe:: bioconductor-cytomapper
   :replaces_section_title:
   :noindex:

   Visualization of highly multiplexed imaging data in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cytomapper.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cytomapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomapper/meta.yaml>`_

   Highly multiplexed imaging acquires the single\-cell expression of selected proteins in a spatially\-resolved fashion. These measurements can be visualised across multiple length\-scales. First\, pixel\-level intensities represent the spatial distributions of feature expression with highest resolution. Second\, after segmentation\, expression values or cell\-level metadata \(e.g. cell\-type information\) can be visualised on segmented cell areas. This package contains functions for the visualisation of multiplexed read\-outs and cell\-level information obtained by multiplexed imaging technologies. The main functions of this package allow 1. the visualisation of pixel\-level information across multiple channels\, 2. the display of cell\-level information \(expression and\/or metadata\) on segmentation masks and 3. gating and visualisation of single cells.


.. conda:package:: bioconductor-cytomapper

   |downloads_bioconductor-cytomapper| |docker_bioconductor-cytomapper|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-nnls: 
   :depends r-raster: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-svglite: 
   :depends r-svgpanzoom: 
   :depends r-viridis: 
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

      mamba install bioconductor-cytomapper

   and update with::

      mamba update bioconductor-cytomapper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytomapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytomapper:<tag>

   (see `bioconductor-cytomapper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytomapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomapper
   :alt:   (downloads)
.. |docker_bioconductor-cytomapper| image:: https://quay.io/repository/biocontainers/bioconductor-cytomapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomapper
.. _`bioconductor-cytomapper/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomapper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomapper";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomapper/README.html