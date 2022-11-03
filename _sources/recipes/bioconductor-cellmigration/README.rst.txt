:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmigration'
.. highlight: bash

bioconductor-cellmigration
==========================

.. conda:recipe:: bioconductor-cellmigration
   :replaces_section_title:
   :noindex:

   Track Cells\, Analyze Cell Trajectories and Compute Migration Statistics

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cellmigRation.html
   :license: GPL-2
   :recipe: /`bioconductor-cellmigration <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration/meta.yaml>`_

   Import TIFF images of fluorescently labeled cells\, and track cell movements over time. Parallelization is supported for image processing and for fast computation of cell trajectories. In\-depth analysis of cell trajectories is enabled by 15 trajectory analysis functions.


.. conda:package:: bioconductor-cellmigration

   |downloads_bioconductor-cellmigration| |docker_bioconductor-cellmigration|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: 
   :depends r-factominer: 
   :depends r-fme: 
   :depends r-foreach: 
   :depends r-hmisc: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :depends r-sp: 
   :depends r-spatialtools: 
   :depends r-tiff: 
   :depends r-vioplot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellmigration

   and update with::

      conda update bioconductor-cellmigration

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellmigration:<tag>

   (see `bioconductor-cellmigration/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellmigration| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmigration.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmigration
   :alt:   (downloads)
.. |docker_bioconductor-cellmigration| image:: https://quay.io/repository/biocontainers/bioconductor-cellmigration/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmigration
.. _`bioconductor-cellmigration/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmigration?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmigration";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html