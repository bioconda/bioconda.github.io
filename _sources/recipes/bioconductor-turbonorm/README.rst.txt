:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-turbonorm'
.. highlight: bash

bioconductor-turbonorm
======================

.. conda:recipe:: bioconductor-turbonorm
   :replaces_section_title:
   :noindex:

   A fast scatterplot smoother suitable for microarray normalization

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TurboNorm.html
   :license: LGPL
   :recipe: /`bioconductor-turbonorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm/meta.yaml>`_
   :links: biotools: :biotools:`turbonorm`

   A fast scatterplot smoother based on B\-splines with second\-order difference penalty. Functions for microarray normalization of single\-colour data i.e. Affymetrix\/Illumina and two\-colour data supplied as marray MarrayRaw\-objects or limma RGList\-objects are available.


.. conda:package:: bioconductor-turbonorm

   |downloads_bioconductor-turbonorm| |docker_bioconductor-turbonorm|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-convert: ``>=1.66.0,<1.67.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-marray: ``>=1.68.0,<1.69.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-turbonorm

   and update with::

      conda update bioconductor-turbonorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-turbonorm:<tag>

   (see `bioconductor-turbonorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-turbonorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-turbonorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-turbonorm
   :alt:   (downloads)
.. |docker_bioconductor-turbonorm| image:: https://quay.io/repository/biocontainers/bioconductor-turbonorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-turbonorm
.. _`bioconductor-turbonorm/tags`: https://quay.io/repository/biocontainers/bioconductor-turbonorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html