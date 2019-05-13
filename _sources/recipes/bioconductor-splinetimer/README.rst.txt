:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinetimer'
.. highlight: bash

bioconductor-splinetimer
========================

.. conda:recipe:: bioconductor-splinetimer
   :replaces_section_title:

   This package provides functions for differential gene expression analysis of gene expression time\-course data. Natural cubic spline regression models are used. Identified genes may further be used for pathway enrichment analysis and\/or the reconstruction of time dependent gene regulatory association networks.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/splineTimeR.html
   :license: GPL-3
   :recipe: /`bioconductor-splinetimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinetimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinetimer/meta.yaml>`_
   :links: biotools: :biotools:`splinetimer`, doi: :doi:`10.1371/journal.pone.0160791`

   


.. conda:package:: bioconductor-splinetimer

   |downloads_bioconductor-splinetimer| |docker_bioconductor-splinetimer|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-fis: >=1.10.0,<1.11.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-genenet: >=1.2.13
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-longitudinal: >=1.1.12
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splinetimer

   and update with::

      conda update bioconductor-splinetimer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splinetimer:<tag>

   (see `bioconductor-splinetimer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splinetimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinetimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splinetimer
   :alt:   (downloads)
.. |docker_bioconductor-splinetimer| image:: https://quay.io/repository/biocontainers/bioconductor-splinetimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinetimer
.. _`bioconductor-splinetimer/tags`: https://quay.io/repository/biocontainers/bioconductor-splinetimer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinetimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinetimer/README.html