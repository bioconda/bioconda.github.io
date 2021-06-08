:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vplotr'
.. highlight: bash

bioconductor-vplotr
===================

.. conda:recipe:: bioconductor-vplotr
   :replaces_section_title:
   :noindex:

   Set of tools to make V\-plots and compute footprint profiles

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/VplotR.html
   :license: GPL-3
   :recipe: /`bioconductor-vplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr/meta.yaml>`_

   The pattern of digestion and protection from DNA nucleases such as DNAse I\, micrococcal nuclease\, and Tn5 transposase can be used to infer the location of associated proteins. This package contains useful functions to analyze patterns of paired\-end sequencing fragment density. VplotR facilitates the generation of V\-plots and footprint profiles over single or aggregated genomic loci of interest.


.. conda:package:: bioconductor-vplotr

   |downloads_bioconductor-vplotr| |docker_bioconductor-vplotr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vplotr

   and update with::

      conda update bioconductor-vplotr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vplotr:<tag>

   (see `bioconductor-vplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vplotr
   :alt:   (downloads)
.. |docker_bioconductor-vplotr| image:: https://quay.io/repository/biocontainers/bioconductor-vplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vplotr
.. _`bioconductor-vplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-vplotr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vplotr/README.html