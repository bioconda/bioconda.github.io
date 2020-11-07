:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linkhd'
.. highlight: bash

bioconductor-linkhd
===================

.. conda:recipe:: bioconductor-linkhd
   :replaces_section_title:
   :noindex:

   LinkHD\: a versatile framework to explore and integrate heterogeneous data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/LinkHD.html
   :license: GPL-3
   :recipe: /`bioconductor-linkhd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linkhd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linkhd/meta.yaml>`_

   Here we present Link\-HD\, an approach to integrate heterogeneous datasets\, as a generalization of STATIS\-ACT \(“Structuration des Tableaux A Trois Indices de la Statistique–Analyse Conjointe de Tableaux”\)\, a family of methods to join and compare information from multiple subspaces. However\, STATIS\-ACT has some drawbacks since it only allows continuous data and it is unable to establish relationships between samples and features. In order to tackle these constraints\, we incorporate multiple distance options and a linear regression based Biplot model in order to stablish relationships between observations and variable and perform variable selection.


.. conda:package:: bioconductor-linkhd

   |downloads_bioconductor-linkhd| |docker_bioconductor-linkhd|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-emmeans: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-reshape2: 
   :depends r-rio: 
   :depends r-scales: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linkhd

   and update with::

      conda update bioconductor-linkhd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-linkhd:<tag>

   (see `bioconductor-linkhd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-linkhd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linkhd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linkhd
   :alt:   (downloads)
.. |docker_bioconductor-linkhd| image:: https://quay.io/repository/biocontainers/bioconductor-linkhd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linkhd
.. _`bioconductor-linkhd/tags`: https://quay.io/repository/biocontainers/bioconductor-linkhd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linkhd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linkhd/README.html