:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stabmap'
.. highlight: bash

bioconductor-stabmap
====================

.. conda:recipe:: bioconductor-stabmap
   :replaces_section_title:
   :noindex:

   Stabilised mosaic single cell data integration using unshared features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/StabMap.html
   :license: GPL-2
   :recipe: /`bioconductor-stabmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stabmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stabmap/meta.yaml>`_

   StabMap performs single cell mosaic data integration by first building a mosaic data topology\, and for each reference dataset\, traverses the topology to project and predict data onto a common embedding. Mosaic data should be provided in a list format\, with all relevant features included in the data matrices within each list object. The output of stabMap is a joint low\-dimensional embedding taking into account all available relevant features. Expression imputation can also be performed using the StabMap embedding and any of the original data matrices for given reference and query cell lists.


.. conda:package:: bioconductor-stabmap

   |downloads_bioconductor-stabmap| |docker_bioconductor-stabmap|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-slam: 
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

      mamba install bioconductor-stabmap

   and update with::

      mamba update bioconductor-stabmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stabmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stabmap:<tag>

   (see `bioconductor-stabmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stabmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stabmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stabmap
   :alt:   (downloads)
.. |docker_bioconductor-stabmap| image:: https://quay.io/repository/biocontainers/bioconductor-stabmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stabmap
.. _`bioconductor-stabmap/tags`: https://quay.io/repository/biocontainers/bioconductor-stabmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stabmap";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stabmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stabmap/README.html