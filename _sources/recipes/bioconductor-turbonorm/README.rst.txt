.. title:: Package Recipe 'bioconductor-turbonorm'
.. highlight: bash


bioconductor-turbonorm
======================

.. conda:recipe:: bioconductor-turbonorm
   :replaces_section_title:

   A fast scatterplot smoother based on B\-splines with second\-order difference penalty. Functions for microarray normalization of single\-colour data i.e. Affymetrix\/Illumina and two\-colour data supplied as marray MarrayRaw\-objects or limma RGList\-objects are available.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TurboNorm.html
   :license: LGPL
   :recipe: /`bioconductor-turbonorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm/meta.yaml>`_
   :links: biotools: :biotools:`turbonorm`

   


.. conda:package:: bioconductor-turbonorm

   |downloads_bioconductor-turbonorm| |docker_bioconductor-turbonorm|

   :versions: 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-convert` >=1.58.0,<1.59.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  

   :required~by: |required_by_bioconductor-turbonorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-turbonorm

   and update with::

      conda update bioconductor-turbonorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-turbonorm


.. |required_by_bioconductor-turbonorm| conda:required_by:: bioconductor-turbonorm
.. |downloads_bioconductor-turbonorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-turbonorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-turbonorm| image:: https://quay.io/repository/biocontainers/bioconductor-turbonorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-turbonorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html

