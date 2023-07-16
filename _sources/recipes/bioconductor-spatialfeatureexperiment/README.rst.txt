:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialfeatureexperiment'
.. highlight: bash

bioconductor-spatialfeatureexperiment
=====================================

.. conda:recipe:: bioconductor-spatialfeatureexperiment
   :replaces_section_title:
   :noindex:

   Integrating SpatialExperiment with Simple Features in sf

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SpatialFeatureExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialfeatureexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment/meta.yaml>`_

   A new S4 class integrating Simple Features with the R package sf to bring geospatial data analysis methods based on vector data to spatial transcriptomics. Also implements management of spatial neighborhood graphs and geometric operations. This pakage builds upon SpatialExperiment and SingleCellExperiment\, hence methods for these parent classes can still be used.


.. conda:package:: bioconductor-spatialfeatureexperiment

   |downloads_bioconductor-spatialfeatureexperiment| |docker_bioconductor-spatialfeatureexperiment|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocneighbors: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-sf: 
   :depends r-spdep: ``>=1.1-7``
   :depends r-terra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialfeatureexperiment

   and update with::

      conda update bioconductor-spatialfeatureexperiment

   or use the docker container::

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
        var versions = ["1.2.1","1.0.0"];
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