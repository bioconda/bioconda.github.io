:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvpanelizer'
.. highlight: bash

bioconductor-cnvpanelizer
=========================

.. conda:recipe:: bioconductor-cnvpanelizer
   :replaces_section_title:

   A method that allows for the use of a collection of non\-matched normal tissue samples. Our approach uses a non\-parametric bootstrap subsampling of the available reference samples to estimate the distribution of read counts from targeted sequencing. As inspired by random forest\, this is combined with a procedure that subsamples the amplicons associated with each of the targeted genes. The obtained information allows us to reliably classify the copy number aberrations on the gene level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNVPanelizer.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvpanelizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer/meta.yaml>`_
   :links: biotools: :biotools:`cnvpanelizer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cnvpanelizer

   |downloads_bioconductor-cnvpanelizer| |docker_bioconductor-cnvpanelizer|

   :versions: 1.14.0-0, 1.12.0-0, 1.8.0-0
   
   :depends bioconductor-exomecopy: >=1.28.0,<1.29.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-noiseq: >=2.26.0,<2.27.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-gplots: 
   
   :depends r-openxlsx: 
   
   :depends r-plyr: 
   
   :depends r-reshape2: 
   
   :depends r-shiny: 
   
   :depends r-shinyfiles: 
   
   :depends r-shinyjs: 
   
   :depends r-stringr: 
   
   :depends r-testthat: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvpanelizer

   and update with::

      conda update bioconductor-cnvpanelizer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnvpanelizer:<tag>

   (see `bioconductor-cnvpanelizer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvpanelizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvpanelizer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnvpanelizer| image:: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer
.. _`bioconductor-cnvpanelizer/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html