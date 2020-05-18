:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-attract'
.. highlight: bash

bioconductor-attract
====================

.. conda:recipe:: bioconductor-attract
   :replaces_section_title:

   Methods to Find the Gene Expression Modules that Represent the Drivers of Kauffman\'s Attractor Landscape

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/attract.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-attract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract/meta.yaml>`_

   This package contains the functions to find the gene expression modules that represent the drivers of Kauffman\'s attractor landscape. The modules are the core attractor pathways that discriminate between different cell types of groups of interest. Each pathway has a set of synexpression groups\, which show transcriptionally\-coordinated changes in gene expression.


.. conda:package:: bioconductor-attract

   |downloads_bioconductor-attract| |docker_bioconductor-attract|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-1, 1.34.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-gostats: >=2.54.0,<2.55.0
   :depends bioconductor-keggrest: >=1.28.0,<1.29.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends bioconductor-reactome.db: >=1.70.0,<1.71.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-attract

   and update with::

      conda update bioconductor-attract

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-attract:<tag>

   (see `bioconductor-attract/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-attract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-attract.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-attract
   :alt:   (downloads)
.. |docker_bioconductor-attract| image:: https://quay.io/repository/biocontainers/bioconductor-attract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-attract
.. _`bioconductor-attract/tags`: https://quay.io/repository/biocontainers/bioconductor-attract?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-attract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-attract/README.html