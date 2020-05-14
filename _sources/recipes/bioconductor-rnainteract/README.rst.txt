:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnainteract'
.. highlight: bash

bioconductor-rnainteract
========================

.. conda:recipe:: bioconductor-rnainteract
   :replaces_section_title:

   Estimate Pairwise Interactions from multidimensional features

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RNAinteract.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract/meta.yaml>`_
   :links: biotools: :biotools:`rnainteract`

   RNAinteract estimates genetic interactions from multi\-dimensional read\-outs like features extracted from images. The screen is assumed to be performed in multi\-well plates or similar designs. Starting from a list of features \(e.g. cell number\, area\, fluorescence intensity\) per well\, genetic interactions are estimated. The packages provides functions for reporting interacting gene pairs\, plotting heatmaps and double RNAi plots. An HTML report can be written for quality control and analysis.


.. conda:package:: bioconductor-rnainteract

   |downloads_bioconductor-rnainteract| |docker_bioconductor-rnainteract|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-1, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-cellhts2: >=2.52.0,<2.53.0
   :depends bioconductor-geneplotter: >=1.66.0,<1.67.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-splots: >=1.54.0,<1.55.0
   :depends r-abind: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-gplots: 
   :depends r-hwriter: 
   :depends r-ics: 
   :depends r-icsnp: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnainteract

   and update with::

      conda update bioconductor-rnainteract

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnainteract:<tag>

   (see `bioconductor-rnainteract/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnainteract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteract.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnainteract
   :alt:   (downloads)
.. |docker_bioconductor-rnainteract| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteract
.. _`bioconductor-rnainteract/tags`: https://quay.io/repository/biocontainers/bioconductor-rnainteract?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html