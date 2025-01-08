:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialfeatureexperiment'
.. highlight: bash

bioconductor-spatialfeatureexperiment
=====================================

.. conda:recipe:: bioconductor-spatialfeatureexperiment
   :replaces_section_title:
   :noindex:

   Integrating SpatialExperiment with Simple Features in sf

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpatialFeatureExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialfeatureexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment/meta.yaml>`_

   A new S4 class integrating Simple Features with the R package sf to bring geospatial data analysis methods based on vector data to spatial transcriptomics. Also implements management of spatial neighborhood graphs and geometric operations. This pakage builds upon SpatialExperiment and SingleCellExperiment\, hence methods for these parent classes can still be used.


.. conda:package:: bioconductor-spatialfeatureexperiment

   |downloads_bioconductor-spatialfeatureexperiment| |docker_bioconductor-spatialfeatureexperiment|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-dropletutils: ``>=1.26.0,<1.27.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-lifecycle: 
   :depends r-matrix: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-sf: 
   :depends r-sfheaders: 
   :depends r-spdep: ``>=1.1-7``
   :depends r-terra: 
   :depends r-zeallot: 
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

      mamba install bioconductor-spatialfeatureexperiment

   and update with::

      mamba update bioconductor-spatialfeatureexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialfeatureexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialfeatureexperiment:<tag>

   (see `bioconductor-spatialfeatureexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialfeatureexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialfeatureexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialfeatureexperiment
   :alt:   (downloads)
.. |docker_bioconductor-spatialfeatureexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment
.. _`bioconductor-spatialfeatureexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialfeatureexperiment";
        var versions = ["1.8.0","1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialfeatureexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialfeatureexperiment/README.html