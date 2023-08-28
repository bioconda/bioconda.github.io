:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stjoincount'
.. highlight: bash

bioconductor-stjoincount
========================

.. conda:recipe:: bioconductor-stjoincount
   :replaces_section_title:
   :noindex:

   stJoincount \- Join count statistic for quantifying spatial correlation between clusters

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/stJoincount.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-stjoincount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjoincount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjoincount/meta.yaml>`_

   stJoincount facilitates the application of join count analysis to spatial transcriptomic data generated from the 10x Genomics Visium platform. This tool first converts a labeled spatial tissue map into a raster object\, in which each spatial feature is represented by a pixel coded by label assignment. This process includes automatic calculation of optimal raster resolution and extent for the sample. A neighbors list is then created from the rasterized sample\, in which adjacent and diagonal neighbors for each pixel are identified. After adding binary spatial weights to the neighbors list\, a multi\-categorical join count analysis is performed to tabulate \"joins\" between all possible combinations of label pairs. The function returns the observed join counts\, the expected count under conditions of spatial randomness\, and the variance calculated under non\-free sampling. The z\-score is then calculated as the difference between observed and expected counts\, divided by the square root of the variance.


.. conda:package:: bioconductor-stjoincount

   |downloads_bioconductor-stjoincount| |docker_bioconductor-stjoincount|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-raster: 
   :depends r-seurat: 
   :depends r-sp: 
   :depends r-spdep: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-stjoincount

   and update with::

      mamba update bioconductor-stjoincount

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stjoincount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stjoincount:<tag>

   (see `bioconductor-stjoincount/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stjoincount| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stjoincount.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stjoincount
   :alt:   (downloads)
.. |docker_bioconductor-stjoincount| image:: https://quay.io/repository/biocontainers/bioconductor-stjoincount/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stjoincount
.. _`bioconductor-stjoincount/tags`: https://quay.io/repository/biocontainers/bioconductor-stjoincount?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stjoincount";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stjoincount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stjoincount/README.html