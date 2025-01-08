:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imcrtools'
.. highlight: bash

bioconductor-imcrtools
======================

.. conda:recipe:: bioconductor-imcrtools
   :replaces_section_title:
   :noindex:

   Methods for imaging mass cytometry data analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/imcRtools.html
   :license: GPL-3
   :recipe: /`bioconductor-imcrtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcrtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcrtools/meta.yaml>`_

   This R package supports the handling and analysis of imaging mass cytometry and other highly multiplexed imaging data. The main functionality includes reading in single\-cell data after image segmentation and measurement\, data formatting to perform channel spillover correction and a number of spatial analysis approaches. First\, cell\-cell interactions are detected via spatial graph construction\; these graphs can be visualized with cells representing nodes and interactions representing edges. Furthermore\, per cell\, its direct neighbours are summarized to allow spatial clustering. Per image\/grouping level\, interactions between types of cells are counted\, averaged and compared against random permutations. In that way\, types of cells that interact more \(attraction\) or less \(avoidance\) frequently than expected by chance are detected.


.. conda:package:: bioconductor-imcrtools

   |downloads_bioconductor-imcrtools| |docker_bioconductor-imcrtools|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-cytomapper: ``>=1.18.0,<1.19.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-concaveman: 
   :depends r-data.table: 
   :depends r-distances: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rtriangle: 
   :depends r-sf: 
   :depends r-stringr: 
   :depends r-tidygraph: 
   :depends r-tidyselect: 
   :depends r-viridis: 
   :depends r-vroom: 
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

      mamba install bioconductor-imcrtools

   and update with::

      mamba update bioconductor-imcrtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-imcrtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imcrtools:<tag>

   (see `bioconductor-imcrtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imcrtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imcrtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imcrtools
   :alt:   (downloads)
.. |docker_bioconductor-imcrtools| image:: https://quay.io/repository/biocontainers/bioconductor-imcrtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imcrtools
.. _`bioconductor-imcrtools/tags`: https://quay.io/repository/biocontainers/bioconductor-imcrtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imcrtools";
        var versions = ["1.12.0","1.8.0","1.6.3","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imcrtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imcrtools/README.html