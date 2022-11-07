:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geomxtools'
.. highlight: bash

bioconductor-geomxtools
=======================

.. conda:recipe:: bioconductor-geomxtools
   :replaces_section_title:
   :noindex:

   NanoString GeoMx Tools

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GeomxTools.html
   :license: MIT
   :recipe: /`bioconductor-geomxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geomxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geomxtools/meta.yaml>`_

   Tools for NanoString Technologies GeoMx Technology. Package provides functions for reading in DCC and PKC files based on an ExpressionSet derived object.  Normalization and QC functions are also included.


.. conda:package:: bioconductor-geomxtools

   |downloads_bioconductor-geomxtools| |docker_bioconductor-geomxtools|

   :versions:
      
      

      ``3.2.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-nanostringnctools: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-envstats: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-lmertest: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-seuratobject: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geomxtools

   and update with::

      conda update bioconductor-geomxtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geomxtools:<tag>

   (see `bioconductor-geomxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geomxtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geomxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geomxtools
   :alt:   (downloads)
.. |docker_bioconductor-geomxtools| image:: https://quay.io/repository/biocontainers/bioconductor-geomxtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geomxtools
.. _`bioconductor-geomxtools/tags`: https://quay.io/repository/biocontainers/bioconductor-geomxtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geomxtools";
        var versions = ["3.2.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geomxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geomxtools/README.html