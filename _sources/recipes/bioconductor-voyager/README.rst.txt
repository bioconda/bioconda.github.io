:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-voyager'
.. highlight: bash

bioconductor-voyager
====================

.. conda:recipe:: bioconductor-voyager
   :replaces_section_title:
   :noindex:

   From geospatial to spatial omics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Voyager.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-voyager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-voyager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-voyager/meta.yaml>`_

   SpatialFeatureExperiment \(SFE\) is a new S4 class for working with spatial single\-cell genomics data. The voyager package implements basic exploratory spatial data analysis \(ESDA\) methods for SFE. Univariate methods include univariate global spatial ESDA methods such as Moran\'s I\, permutation testing for Moran\'s I\, and correlograms. Bivariate methods include Lee\'s L and cross variogram. Multivariate methods include MULTISPATI PCA and multivariate local Geary\'s C recently developed by Anselin. The Voyager package also implements plotting functions to plot SFE data and ESDA results.


.. conda:package:: bioconductor-voyager

   |downloads_bioconductor-voyager| |docker_bioconductor-voyager|

   :versions:
      
      

      ``1.2.3-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bluster: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sparsematrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-spatialfeatureexperiment: ``>=1.2.0,<1.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggnewscale: 
   :depends r-ggplot2: ``>=3.4.0``
   :depends r-lifecycle: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-rlang: 
   :depends r-rspectra: 
   :depends r-scales: 
   :depends r-scico: 
   :depends r-sf: 
   :depends r-spdep: 
   :depends r-terra: 
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

      mamba install bioconductor-voyager

   and update with::

      mamba update bioconductor-voyager

  To create a new environment, run::

      mamba create --name myenvname bioconductor-voyager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-voyager:<tag>

   (see `bioconductor-voyager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-voyager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-voyager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-voyager
   :alt:   (downloads)
.. |docker_bioconductor-voyager| image:: https://quay.io/repository/biocontainers/bioconductor-voyager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-voyager
.. _`bioconductor-voyager/tags`: https://quay.io/repository/biocontainers/bioconductor-voyager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-voyager";
        var versions = ["1.2.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-voyager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-voyager/README.html