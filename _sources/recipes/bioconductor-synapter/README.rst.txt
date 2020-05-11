:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synapter'
.. highlight: bash

bioconductor-synapter
=====================

.. conda:recipe:: bioconductor-synapter
   :replaces_section_title:

   Label\-free data analysis pipeline for optimal identification and quantitation

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/synapter.html
   :license: GPL-2
   :recipe: /`bioconductor-synapter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter/meta.yaml>`_
   :links: biotools: :biotools:`synapter`

   The synapter package provides functionality to reanalyse label\-free proteomics data acquired on a Synapt G2 mass spectrometer. One or several runs\, possibly processed with additional ion mobility separation to increase identification accuracy can be combined to other quantitation files to maximise identification and quantitation accuracy.


.. conda:package:: bioconductor-synapter

   |downloads_bioconductor-synapter| |docker_bioconductor-synapter|

   :versions: 2.12.0-0, 2.10.0-0, 2.8.0-1, 2.6.1-0, 2.2.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-cleaver: >=1.26.0,<1.27.0
   :depends bioconductor-msnbase: >=2.14.0,<2.15.0
   :depends bioconductor-multtest: >=2.44.0,<2.45.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-knitr: 
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :depends r-readr: >=0.2
   :depends r-rmarkdown: >=1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synapter

   and update with::

      conda update bioconductor-synapter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synapter:<tag>

   (see `bioconductor-synapter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synapter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synapter
   :alt:   (downloads)
.. |docker_bioconductor-synapter| image:: https://quay.io/repository/biocontainers/bioconductor-synapter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapter
.. _`bioconductor-synapter/tags`: https://quay.io/repository/biocontainers/bioconductor-synapter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapter/README.html