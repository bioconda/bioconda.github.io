:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarray'
.. highlight: bash

bioconductor-beadarray
======================

.. conda:recipe:: bioconductor-beadarray
   :replaces_section_title:

   The package is able to read bead\-level data \(raw TIFFs and text files\) output by BeadScan as well as bead\-summary data from BeadStudio.  Methods for quality assessment and low\-level analysis are provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/beadarray.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray/meta.yaml>`_
   :links: biotools: :biotools:`beadarray`

   


.. conda:package:: bioconductor-beadarray

   |downloads_bioconductor-beadarray| |docker_bioconductor-beadarray|

   :versions: 2.32.0-0, 2.30.0-0, 2.28.0-0, 2.26.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-beaddatapackr: >=1.34.0,<1.35.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-illuminaio: >=0.24.0,<0.25.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-reshape2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarray

   and update with::

      conda update bioconductor-beadarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarray:<tag>

   (see `bioconductor-beadarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarray.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beadarray| image:: https://quay.io/repository/biocontainers/bioconductor-beadarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarray
.. _`bioconductor-beadarray/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarray/README.html