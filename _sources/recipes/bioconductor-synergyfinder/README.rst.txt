:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synergyfinder'
.. highlight: bash

bioconductor-synergyfinder
==========================

.. conda:recipe:: bioconductor-synergyfinder
   :replaces_section_title:

   Calculate and Visualize Synergy Scores for Drug Combinations

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/synergyfinder.html
   :license: Mozilla Public License 2.0
   :recipe: /`bioconductor-synergyfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synergyfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synergyfinder/meta.yaml>`_
   :links: biotools: :biotools:`synergyfinder`, doi: :doi:`10.1093/bioinformatics/btx162`

   Efficient implementations for all the popular synergy scoring models for drug combinations\, including HSA\, Loewe\, Bliss and ZIP and visualization of the synergy scores as either a two\-dimensional or a three\-dimensional interaction surface over the dose matrix.


.. conda:package:: bioconductor-synergyfinder

   |downloads_bioconductor-synergyfinder| |docker_bioconductor-synergyfinder|

   :versions: 2.2.0-0, 2.0.1-0, 1.10.2-0, 1.10.0-0, 1.8.0-0, 1.6.1-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-drc: >=2.5-12
   :depends r-ggplot2: >=2.1.0
   :depends r-lattice: >=0.20-33
   :depends r-nleqslv: >=3.0
   :depends r-reshape2: >=1.4.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synergyfinder

   and update with::

      conda update bioconductor-synergyfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synergyfinder:<tag>

   (see `bioconductor-synergyfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synergyfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synergyfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synergyfinder
   :alt:   (downloads)
.. |docker_bioconductor-synergyfinder| image:: https://quay.io/repository/biocontainers/bioconductor-synergyfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synergyfinder
.. _`bioconductor-synergyfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-synergyfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synergyfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synergyfinder/README.html