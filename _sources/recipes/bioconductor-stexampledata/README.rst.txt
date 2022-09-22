:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stexampledata'
.. highlight: bash

bioconductor-stexampledata
==========================

.. conda:recipe:: bioconductor-stexampledata
   :replaces_section_title:
   :noindex:

   Collection of spatially resolved transcriptomics datasets in SpatialExperiment Bioconductor format

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/STexampleData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-stexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stexampledata/meta.yaml>`_

   Collection of spatially resolved transcriptomics datasets in SpatialExperiment Bioconductor format\, for use in examples\, demonstrations\, tutorials\, and other purposes. The datasets have been sourced from various publicly available sources\, and cover several technological platforms.


.. conda:package:: bioconductor-stexampledata

   |downloads_bioconductor-stexampledata| |docker_bioconductor-stexampledata|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-spatialexperiment: ``>=1.4.0,<1.5.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stexampledata

   and update with::

      conda update bioconductor-stexampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stexampledata:<tag>

   (see `bioconductor-stexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stexampledata
   :alt:   (downloads)
.. |docker_bioconductor-stexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-stexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stexampledata
.. _`bioconductor-stexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-stexampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stexampledata";
        var versions = ["1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stexampledata/README.html