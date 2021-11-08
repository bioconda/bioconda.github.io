:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialexperiment'
.. highlight: bash

bioconductor-spatialexperiment
==============================

.. conda:recipe:: bioconductor-spatialexperiment
   :replaces_section_title:
   :noindex:

   S4 Class for Spatial Experiments handling

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SpatialExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperiment/meta.yaml>`_

   Defines S4 classes for storing data for spatial experiments. Main examples are reported by using seqFISH and 10x\-Visium Spatial Gene Expression data. This includes specialized methods for storing\, retrieving spatial coordinates\, 10x dedicated parameters and their handling.


.. conda:package:: bioconductor-spatialexperiment

   |downloads_bioconductor-spatialexperiment| |docker_bioconductor-spatialexperiment|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-dropletutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-magick: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialexperiment

   and update with::

      conda update bioconductor-spatialexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialexperiment:<tag>

   (see `bioconductor-spatialexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialexperiment
   :alt:   (downloads)
.. |docker_bioconductor-spatialexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment
.. _`bioconductor-spatialexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialexperiment";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialexperiment/README.html