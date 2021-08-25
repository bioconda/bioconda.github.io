:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lisaclust'
.. highlight: bash

bioconductor-lisaclust
======================

.. conda:recipe:: bioconductor-lisaclust
   :replaces_section_title:
   :noindex:

   lisaClust\: Clustering of Local Indicators of Spatial Association

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/lisaClust.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-lisaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lisaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lisaclust/meta.yaml>`_

   lisaClust provides a series of functions to identify and visualise regions of tissue where spatial associations between cell\-types is similar. This package can be used to provide a high\-level summary of cell\-type colocalization in multiplexed imaging data that has been segmented at a single\-cell resolution.


.. conda:package:: bioconductor-lisaclust

   |downloads_bioconductor-lisaclust| |docker_bioconductor-lisaclust|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-spicyr: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-class: 
   :depends r-concaveman: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-spatstat.core: 
   :depends r-spatstat.geom: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lisaclust

   and update with::

      conda update bioconductor-lisaclust

   or use the docker container::

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
        var versions = ["1.0.0"];
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