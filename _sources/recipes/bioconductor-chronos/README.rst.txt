:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chronos'
.. highlight: bash

bioconductor-chronos
====================

.. conda:recipe:: bioconductor-chronos
   :replaces_section_title:

   CHRONOS\: A time\-varying method for microRNA\-mediated sub\-pathway enrichment analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CHRONOS.html
   :license: GPL-2
   :recipe: /`bioconductor-chronos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chronos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chronos/meta.yaml>`_
   :links: biotools: :biotools:`CHRONOS`

   A package used for efficient unraveling of the inherent dynamic properties of pathways. MicroRNA\-mediated subpathway topologies are extracted and evaluated by exploiting the temporal transition and the fold change activity of the linked genes\/microRNAs.


.. conda:package:: bioconductor-chronos

   |downloads_bioconductor-chronos| |docker_bioconductor-chronos|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.10.0-0, 1.8.1-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-rbgl: >=1.64.0,<1.65.0
   :depends openjdk: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-openxlsx: 
   :depends r-rcurl: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chronos

   and update with::

      conda update bioconductor-chronos

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chronos:<tag>

   (see `bioconductor-chronos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chronos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chronos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chronos
   :alt:   (downloads)
.. |docker_bioconductor-chronos| image:: https://quay.io/repository/biocontainers/bioconductor-chronos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chronos
.. _`bioconductor-chronos/tags`: https://quay.io/repository/biocontainers/bioconductor-chronos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chronos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chronos/README.html