:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lola'
.. highlight: bash

bioconductor-lola
=================

.. conda:recipe:: bioconductor-lola
   :replaces_section_title:

   Provides functions for testing overlap of sets of genomic regions with public and custom region set \(genomic ranges\) databases. This makes it possible to do automated enrichment analysis for genomic region sets\, thus facilitating interpretation of functional genomics and epigenomics data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LOLA.html
   :license: GPL-3
   :recipe: /`bioconductor-lola <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lola>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lola/meta.yaml>`_
   :links: biotools: :biotools:`lola`, doi: :doi:`10.1093/bioinformatics/btv612`

   


.. conda:package:: bioconductor-lola

   |downloads_bioconductor-lola| |docker_bioconductor-lola|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-reshape2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lola

   and update with::

      conda update bioconductor-lola

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lola:<tag>

   (see `bioconductor-lola/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lola| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lola.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lola| image:: https://quay.io/repository/biocontainers/bioconductor-lola/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lola
.. _`bioconductor-lola/tags`: https://quay.io/repository/biocontainers/bioconductor-lola?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lola/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lola/README.html