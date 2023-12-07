:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lisaclust'
.. highlight: bash

bioconductor-lisaclust
======================

.. conda:recipe:: bioconductor-lisaclust
   :replaces_section_title:
   :noindex:

   lisaClust\: Clustering of Local Indicators of Spatial Association

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/lisaClust.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-lisaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lisaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lisaclust/meta.yaml>`_

   lisaClust provides a series of functions to identify and visualise regions of tissue where spatial associations between cell\-types is similar. This package can be used to provide a high\-level summary of cell\-type colocalization in multiplexed imaging data that has been segmented at a single\-cell resolution.


.. conda:package:: bioconductor-lisaclust

   |downloads_bioconductor-lisaclust| |docker_bioconductor-lisaclust|

   :versions:
      
      

      ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-spicyr: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-class: 
   :depends r-concaveman: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
   :depends r-spatstat.random: 
   :depends r-tidyr: 
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

      mamba install bioconductor-lisaclust

   and update with::

      mamba update bioconductor-lisaclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lisaclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lisaclust:<tag>

   (see `bioconductor-lisaclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lisaclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lisaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lisaclust
   :alt:   (downloads)
.. |docker_bioconductor-lisaclust| image:: https://quay.io/repository/biocontainers/bioconductor-lisaclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lisaclust
.. _`bioconductor-lisaclust/tags`: https://quay.io/repository/biocontainers/bioconductor-lisaclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lisaclust";
        var versions = ["1.10.1","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lisaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lisaclust/README.html