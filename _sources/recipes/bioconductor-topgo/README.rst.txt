:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topgo'
.. highlight: bash

bioconductor-topgo
==================

.. conda:recipe:: bioconductor-topgo
   :replaces_section_title:

   Enrichment Analysis for Gene Ontology

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/topGO.html
   :license: LGPL
   :recipe: /`bioconductor-topgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo/meta.yaml>`_
   :links: biotools: :biotools:`topgo`, doi: :doi:`10.1093/bioinformatics/btl140`

   topGO package provides tools for testing GO terms while accounting for the topology of the GO graph. Different test statistics and different methods for eliminating local similarities and dependencies between GO terms can be implemented and applied.


.. conda:package:: bioconductor-topgo

   |downloads_bioconductor-topgo| |docker_bioconductor-topgo|

   :versions: 2.40.0-0, 2.37.0-0, 2.36.0-1, 2.34.0-0, 2.32.0-0, 2.30.0-0, 2.28.0-0, 2.24.0-1, 2.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-go.db: >=3.11.0,<3.12.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :depends r-sparsem: >=0.73
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topgo

   and update with::

      conda update bioconductor-topgo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topgo:<tag>

   (see `bioconductor-topgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topgo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topgo
   :alt:   (downloads)
.. |docker_bioconductor-topgo| image:: https://quay.io/repository/biocontainers/bioconductor-topgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topgo
.. _`bioconductor-topgo/tags`: https://quay.io/repository/biocontainers/bioconductor-topgo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topgo/README.html