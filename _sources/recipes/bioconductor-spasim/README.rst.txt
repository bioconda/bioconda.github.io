:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spasim'
.. highlight: bash

bioconductor-spasim
===================

.. conda:recipe:: bioconductor-spasim
   :replaces_section_title:
   :noindex:

   Spatial point data simulator for tissue images

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/spaSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim/meta.yaml>`_

   A suite of functions for simulating spatial patterns of cells in tissue images. Output images are multitype point data in SingleCellExperiment format. Each point represents a cell\, with its 2D locations and cell type. Potential cell patterns include background cells\, tumour\/immune cell clusters\, immune rings\, and blood\/lymphatic vessels.


.. conda:package:: bioconductor-spasim

   |downloads_bioconductor-spasim| |docker_bioconductor-spasim|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-spatstat.geom: 
   :depends r-spatstat.random: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spasim

   and update with::

      conda update bioconductor-spasim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spasim:<tag>

   (see `bioconductor-spasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spasim
   :alt:   (downloads)
.. |docker_bioconductor-spasim| image:: https://quay.io/repository/biocontainers/bioconductor-spasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spasim
.. _`bioconductor-spasim/tags`: https://quay.io/repository/biocontainers/bioconductor-spasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spasim";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spasim/README.html