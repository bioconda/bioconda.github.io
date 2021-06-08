:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granulator'
.. highlight: bash

bioconductor-granulator
=======================

.. conda:recipe:: bioconductor-granulator
   :replaces_section_title:
   :noindex:

   Rapid benchmarking of methods for \*in silico\* deconvolution of bulk RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/granulator.html
   :license: GPL-3
   :recipe: /`bioconductor-granulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator/meta.yaml>`_

   granulator is an R package for the cell type deconvolution of heterogeneous tissues based on bulk RNA\-seq data or single cell RNA\-seq expression profiles. The package provides a unified testing interface to rapidly run and benchmark multiple state\-of\-the\-art deconvolution methods. Data for the deconvolution of peripheral blood mononuclear cells \(PBMCs\) into individual immune cell types is provided as well.


.. conda:package:: bioconductor-granulator

   |downloads_bioconductor-granulator| |docker_bioconductor-granulator|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dtangle: 
   :depends r-e1071: 
   :depends r-epir: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-limsolve: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-nnls: 
   :depends r-pheatmap: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-granulator

   and update with::

      conda update bioconductor-granulator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-granulator:<tag>

   (see `bioconductor-granulator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-granulator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-granulator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-granulator
   :alt:   (downloads)
.. |docker_bioconductor-granulator| image:: https://quay.io/repository/biocontainers/bioconductor-granulator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-granulator
.. _`bioconductor-granulator/tags`: https://quay.io/repository/biocontainers/bioconductor-granulator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-granulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-granulator/README.html