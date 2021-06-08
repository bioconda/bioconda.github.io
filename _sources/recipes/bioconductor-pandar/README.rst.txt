:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pandar'
.. highlight: bash

bioconductor-pandar
===================

.. conda:recipe:: bioconductor-pandar
   :replaces_section_title:
   :noindex:

   PANDA Algorithm

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/pandaR.html
   :license: GPL-2
   :recipe: /`bioconductor-pandar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar/meta.yaml>`_
   :links: biotools: :biotools:`pandar`

   Runs PANDA\, an algorithm for discovering novel network structure by combining information from multiple complementary data sources.


.. conda:package:: bioconductor-pandar

   |downloads_bioconductor-pandar| |docker_bioconductor-pandar|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-reshape: 
   :depends r-runit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pandar

   and update with::

      conda update bioconductor-pandar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pandar:<tag>

   (see `bioconductor-pandar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pandar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pandar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pandar
   :alt:   (downloads)
.. |docker_bioconductor-pandar| image:: https://quay.io/repository/biocontainers/bioconductor-pandar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pandar
.. _`bioconductor-pandar/tags`: https://quay.io/repository/biocontainers/bioconductor-pandar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pandar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pandar/README.html