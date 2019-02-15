:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-universalmotif'
.. highlight: bash

bioconductor-universalmotif
===========================

.. conda:recipe:: bioconductor-universalmotif
   :replaces_section_title:

   Allows for importing most common motif types into R for use by functions provided by other Bioconductor motif\-related packages. Motifs can be exported into most major motif formats from various classes as defined by other Bioconductor packages. A suite of motif and sequence manipulation and analysis functions are included\, including enrichment\, comparison\, P\-value calculation\, shuffling\, trimming\, higher\-order motifs\, and others.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/universalmotif.html
   :license: GPL-3
   :recipe: /`bioconductor-universalmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif/meta.yaml>`_

   


.. conda:package:: bioconductor-universalmotif

   |downloads_bioconductor-universalmotif| |docker_bioconductor-universalmotif|

   :versions: 1.0.12-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-ggtree: >=1.14.0,<1.15.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-ggseqlogo: 
   
   :depends r-gtools: 
   
   :depends r-processx: 
   
   :depends r-rcpp: 
   
   :depends r-rdpack: >=0.7
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-universalmotif

   and update with::

      conda update bioconductor-universalmotif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-universalmotif:<tag>

   (see `bioconductor-universalmotif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-universalmotif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-universalmotif.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-universalmotif| image:: https://quay.io/repository/biocontainers/bioconductor-universalmotif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-universalmotif
.. _`bioconductor-universalmotif/tags`: https://quay.io/repository/biocontainers/bioconductor-universalmotif?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html