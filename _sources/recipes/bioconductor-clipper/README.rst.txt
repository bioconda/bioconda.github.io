:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clipper'
.. highlight: bash

bioconductor-clipper
====================

.. conda:recipe:: bioconductor-clipper
   :replaces_section_title:
   :noindex:

   Gene Set Analysis Exploiting Pathway Topology

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/clipper.html
   :license: AGPL-3
   :recipe: /`bioconductor-clipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clipper/meta.yaml>`_

   Implements topological gene set analysis using a two\-step empirical approach. It exploits graph decomposition theory to create a junction tree and reconstruct the most relevant signal path. In the first step clipper selects significant pathways according to statistical tests on the means and the concentration matrices of the graphs derived from pathway topologies. Then\, it \"clips\" the whole pathway identifying the signal paths having the greatest association with a specific phenotype.


.. conda:package:: bioconductor-clipper

   |downloads_bioconductor-clipper| |docker_bioconductor-clipper|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-kegggraph: ``>=1.52.0,<1.53.0``
   :depends bioconductor-qpgraph: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rbgl: ``>=1.68.0,<1.69.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corpcor: 
   :depends r-grbase: ``>=1.6.6``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clipper

   and update with::

      conda update bioconductor-clipper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clipper:<tag>

   (see `bioconductor-clipper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clipper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clipper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clipper
   :alt:   (downloads)
.. |docker_bioconductor-clipper| image:: https://quay.io/repository/biocontainers/bioconductor-clipper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clipper
.. _`bioconductor-clipper/tags`: https://quay.io/repository/biocontainers/bioconductor-clipper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clipper/README.html