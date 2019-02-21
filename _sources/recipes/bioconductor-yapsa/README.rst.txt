:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yapsa'
.. highlight: bash

bioconductor-yapsa
==================

.. conda:recipe:: bioconductor-yapsa
   :replaces_section_title:

   This package provides functions and routines useful in the analysis of somatic signatures \(cf. L. Alexandrov et al.\, Nature 2013\). In particular\, functions to perform a signature analysis with known signatures \(LCD \= linear combination decomposition\) and a signature analysis on stratified mutational catalogue \(SMC \= stratify mutational catalogue\) are provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/YAPSA.html
   :license: GPL-3
   :recipe: /`bioconductor-yapsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa/meta.yaml>`_
   :links: biotools: :biotools:`yapsa`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-yapsa

   |downloads_bioconductor-yapsa| |docker_bioconductor-yapsa|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-complexheatmap: >=1.20.0,<1.21.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-gtrellis: >=1.14.0,<1.15.0
   
   :depends bioconductor-keggrest: >=1.22.0,<1.23.0
   
   :depends bioconductor-somaticsignatures: >=2.18.0,<2.19.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-circlize: 
   
   :depends r-corrplot: 
   
   :depends r-dendextend: 
   
   :depends r-getoptlong: 
   
   :depends r-ggplot2: 
   
   :depends r-gridextra: 
   
   :depends r-lsei: 
   
   :depends r-pmcmr: 
   
   :depends r-reshape2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yapsa

   and update with::

      conda update bioconductor-yapsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yapsa:<tag>

   (see `bioconductor-yapsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yapsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yapsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-yapsa| image:: https://quay.io/repository/biocontainers/bioconductor-yapsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yapsa
.. _`bioconductor-yapsa/tags`: https://quay.io/repository/biocontainers/bioconductor-yapsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yapsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yapsa/README.html