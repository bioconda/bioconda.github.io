:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-findmyfriends'
.. highlight: bash

bioconductor-findmyfriends
==========================

.. conda:recipe:: bioconductor-findmyfriends
   :replaces_section_title:
   :noindex:

   Microbial Comparative Genomics in R

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/FindMyFriends.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-findmyfriends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findmyfriends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findmyfriends/meta.yaml>`_
   :links: biotools: :biotools:`findmyfriends`, doi: :doi:`10.1038/nmeth.3252`

   A framework for doing microbial comparative genomics in R. The main purpose of the package is assisting in the creation of pangenome matrices where genes from related organisms are grouped by similarity\, as well as the analysis of these data. FindMyFriends provides many novel approaches to doing pangenome analysis and supports a gene grouping algorithm that scales linearly\, thus making the creation of huge pangenomes feasible.


.. conda:package:: bioconductor-findmyfriends

   |downloads_bioconductor-findmyfriends| |docker_bioconductor-findmyfriends|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-kebabs: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-filehash: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gtable: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-findmyfriends

   and update with::

      conda update bioconductor-findmyfriends

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-findmyfriends:<tag>

   (see `bioconductor-findmyfriends/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-findmyfriends| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-findmyfriends.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-findmyfriends
   :alt:   (downloads)
.. |docker_bioconductor-findmyfriends| image:: https://quay.io/repository/biocontainers/bioconductor-findmyfriends/status
   :target: https://quay.io/repository/biocontainers/bioconductor-findmyfriends
.. _`bioconductor-findmyfriends/tags`: https://quay.io/repository/biocontainers/bioconductor-findmyfriends?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-findmyfriends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-findmyfriends/README.html