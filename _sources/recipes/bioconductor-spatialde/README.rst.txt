:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialde'
.. highlight: bash

bioconductor-spatialde
======================

.. conda:recipe:: bioconductor-spatialde
   :replaces_section_title:
   :noindex:

   R wrapper for SpatialDE

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/spatialDE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialde/meta.yaml>`_

   SpatialDE is a method to find spatially variable genes \(SVG\) from spatial transcriptomics data. This package provides wrappers to use the Python SpatialDE library in R\, using reticulate and basilisk.


.. conda:package:: bioconductor-spatialde

   |downloads_bioconductor-spatialde| |docker_bioconductor-spatialde|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-reticulate: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialde

   and update with::

      conda update bioconductor-spatialde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialde:<tag>

   (see `bioconductor-spatialde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialde
   :alt:   (downloads)
.. |docker_bioconductor-spatialde| image:: https://quay.io/repository/biocontainers/bioconductor-spatialde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialde
.. _`bioconductor-spatialde/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialde";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialde/README.html