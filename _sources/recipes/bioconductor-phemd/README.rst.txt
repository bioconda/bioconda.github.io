:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phemd'
.. highlight: bash

bioconductor-phemd
==================

.. conda:recipe:: bioconductor-phemd
   :replaces_section_title:
   :noindex:

   Phenotypic EMD for comparison of single\-cell samples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/phemd.html
   :license: GPL-2
   :recipe: /`bioconductor-phemd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phemd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phemd/meta.yaml>`_

   Package for comparing and generating a low\-dimensional embedding of multiple single\-cell samples.


.. conda:package:: bioconductor-phemd

   |downloads_bioconductor-phemd| |docker_bioconductor-phemd|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.1-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-destiny: ``>=3.16.0,<3.17.0``
   :depends bioconductor-monocle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-maptree: 
   :depends r-phater: 
   :depends r-pheatmap: 
   :depends r-pracma: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-reticulate: 
   :depends r-rtsne: 
   :depends r-scatterplot3d: 
   :depends r-seurat: 
   :depends r-transport: 
   :depends r-vgam: 
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

      mamba install bioconductor-phemd

   and update with::

      mamba update bioconductor-phemd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phemd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phemd:<tag>

   (see `bioconductor-phemd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phemd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phemd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phemd
   :alt:   (downloads)
.. |docker_bioconductor-phemd| image:: https://quay.io/repository/biocontainers/bioconductor-phemd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phemd
.. _`bioconductor-phemd/tags`: https://quay.io/repository/biocontainers/bioconductor-phemd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phemd";
        var versions = ["1.18.0","1.16.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phemd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phemd/README.html