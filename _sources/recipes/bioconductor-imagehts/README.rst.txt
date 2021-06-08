:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imagehts'
.. highlight: bash

bioconductor-imagehts
=====================

.. conda:recipe:: bioconductor-imagehts
   :replaces_section_title:
   :noindex:

   Analysis of high\-throughput microscopy\-based screens

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/imageHTS.html
   :license: LGPL-2.1
   :recipe: /`bioconductor-imagehts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imagehts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imagehts/meta.yaml>`_

   imageHTS is an R package dedicated to the analysis of high\-throughput microscopy\-based screens. The package provides a modular and extensible framework to segment cells\, extract quantitative cell features\, predict cell types and browse screen data through web interfaces. Designed to operate in distributed environments\, imageHTS provides a standardized access to remote data and facilitates the dissemination of high\-throughput microscopy\-based datasets.


.. conda:package:: bioconductor-imagehts

   |downloads_bioconductor-imagehts| |docker_bioconductor-imagehts|

   :versions:
      
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-cellhts2: ``>=2.56.0,<2.57.0``
   :depends bioconductor-ebimage: ``>=4.34.0,<4.35.0``
   :depends bioconductor-vsn: ``>=3.60.0,<3.61.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-hwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imagehts

   and update with::

      conda update bioconductor-imagehts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imagehts:<tag>

   (see `bioconductor-imagehts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imagehts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imagehts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imagehts
   :alt:   (downloads)
.. |docker_bioconductor-imagehts| image:: https://quay.io/repository/biocontainers/bioconductor-imagehts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imagehts
.. _`bioconductor-imagehts/tags`: https://quay.io/repository/biocontainers/bioconductor-imagehts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imagehts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imagehts/README.html