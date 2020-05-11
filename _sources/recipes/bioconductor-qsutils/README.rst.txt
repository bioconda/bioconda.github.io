:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsutils'
.. highlight: bash

bioconductor-qsutils
====================

.. conda:recipe:: bioconductor-qsutils
   :replaces_section_title:

   Quasispecies Diversity

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/QSutils.html
   :license: file LICENSE
   :recipe: /`bioconductor-qsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils/meta.yaml>`_

   Set of utility functions for viral quasispecies analysis with NGS data. Most functions are equally useful for metagenomic studies. There are three main types\: \(1\) data manipulation and exploration—functions useful for converting reads to haplotypes and frequencies\, repairing reads\, intersecting strand haplotypes\, and visualizing haplotype alignments. \(2\) diversity indices—functions to compute diversity and entropy\, in which incidence\, abundance\, and functional indices are considered. \(3\) data simulation—functions useful for generating random viral quasispecies data.


.. conda:package:: bioconductor-qsutils

   |downloads_bioconductor-qsutils| |docker_bioconductor-qsutils|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-psych: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qsutils

   and update with::

      conda update bioconductor-qsutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsutils:<tag>

   (see `bioconductor-qsutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsutils
   :alt:   (downloads)
.. |docker_bioconductor-qsutils| image:: https://quay.io/repository/biocontainers/bioconductor-qsutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsutils
.. _`bioconductor-qsutils/tags`: https://quay.io/repository/biocontainers/bioconductor-qsutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsutils/README.html