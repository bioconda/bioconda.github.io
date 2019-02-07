.. title:: Package Recipe 'bioconductor-synapter'
.. highlight: bash


bioconductor-synapter
=====================

.. conda:recipe:: bioconductor-synapter
   :replaces_section_title:

   The synapter package provides functionality to reanalyse label\-free proteomics data acquired on a Synapt G2 mass spectrometer. One or several runs\, possibly processed with additional ion mobility separation to increase identification accuracy can be combined to other quantitation files to maximise identification and quantitation accuracy.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/synapter.html
   :license: GPL-2
   :recipe: /`bioconductor-synapter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapter/meta.yaml>`_
   :links: biotools: :biotools:`synapter`

   


.. conda:package:: bioconductor-synapter

   |downloads_bioconductor-synapter| |docker_bioconductor-synapter|

   :versions: 2.6.1, 2.2.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-cleaver` >=1.20.0,<1.21.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-knitr`  :conda:package:`r-lattice`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-readr` >=0.2 :conda:package:`r-rmarkdown` >=1.0 

   :required~by: |required_by_bioconductor-synapter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synapter

   and update with::

      conda update bioconductor-synapter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-synapter


.. |required_by_bioconductor-synapter| conda:required_by:: bioconductor-synapter
.. |downloads_bioconductor-synapter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-synapter| image:: https://quay.io/repository/biocontainers/bioconductor-synapter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapter/README.html

