.. title:: Package Recipe 'bioconductor-mmpalatemirna'
.. highlight: bash


bioconductor-mmpalatemirna
==========================

.. conda:recipe:: bioconductor-mmpalatemirna
   :replaces_section_title:

   R package compendium for the analysis of murine palate miRNA two\-color expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MmPalateMiRNA.html
   :license: GPL-3
   :recipe: /`bioconductor-mmpalatemirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmpalatemirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmpalatemirna/meta.yaml>`_

   


.. conda:package:: bioconductor-mmpalatemirna

   |downloads_bioconductor-mmpalatemirna| |docker_bioconductor-mmpalatemirna|

   :versions: 1.32.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-vsn` >=3.50.0,<3.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-statmod`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-mmpalatemirna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmpalatemirna

   and update with::

      conda update bioconductor-mmpalatemirna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mmpalatemirna


.. |required_by_bioconductor-mmpalatemirna| conda:required_by:: bioconductor-mmpalatemirna
.. |downloads_bioconductor-mmpalatemirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmpalatemirna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mmpalatemirna| image:: https://quay.io/repository/biocontainers/bioconductor-mmpalatemirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmpalatemirna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmpalatemirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmpalatemirna/README.html

