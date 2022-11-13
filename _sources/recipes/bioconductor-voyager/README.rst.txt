:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-voyager'
.. highlight: bash

bioconductor-voyager
====================

.. conda:recipe:: bioconductor-voyager
   :replaces_section_title:
   :noindex:

   From geospatial to spatial omics

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Voyager.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-voyager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-voyager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-voyager/meta.yaml>`_

   SpatialFeatureExperiment \(SFE\) is a new S4 class for working with spatial single\-cell genomics data. The voyager package implements basic exploratory spatial data analysis \(ESDA\) methods for SFE. This first version supports univariate global spatial ESDA methods such as Moran\'s I\, permutation testing for Moran\'s I\, and correlograms. The Voyager package also implements plotting functions to plot SFE data and ESDA results. Multivariate ESDA and univariate local metrics will be added in later versions.


.. conda:package:: bioconductor-voyager

   |downloads_bioconductor-voyager| |docker_bioconductor-voyager|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-bluster: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends bioconductor-spatialfeatureexperiment: ``>=1.0.0,<1.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-scico: 
   :depends r-sf: 
   :depends r-spdep: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-voyager

   and update with::

      conda update bioconductor-voyager

   or use the docker container::

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
        var versions = ["1.0.3"];
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