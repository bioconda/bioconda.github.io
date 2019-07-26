:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmpalatemirna'
.. highlight: bash

bioconductor-mmpalatemirna
==========================

.. conda:recipe:: bioconductor-mmpalatemirna
   :replaces_section_title:

   R package compendium for the analysis of murine palate miRNA two\-color expression data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MmPalateMiRNA.html
   :license: GPL-3
   :recipe: /`bioconductor-mmpalatemirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmpalatemirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmpalatemirna/meta.yaml>`_

   


.. conda:package:: bioconductor-mmpalatemirna

   |downloads_bioconductor-mmpalatemirna| |docker_bioconductor-mmpalatemirna|

   :versions: 1.34.0-1, 1.32.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-vsn: >=3.52.0,<3.53.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :depends r-statmod: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmpalatemirna

   and update with::

      conda update bioconductor-mmpalatemirna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmpalatemirna:<tag>

   (see `bioconductor-mmpalatemirna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmpalatemirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmpalatemirna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmpalatemirna
   :alt:   (downloads)
.. |docker_bioconductor-mmpalatemirna| image:: https://quay.io/repository/biocontainers/bioconductor-mmpalatemirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmpalatemirna
.. _`bioconductor-mmpalatemirna/tags`: https://quay.io/repository/biocontainers/bioconductor-mmpalatemirna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmpalatemirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmpalatemirna/README.html