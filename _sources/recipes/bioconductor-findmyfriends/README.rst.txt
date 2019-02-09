.. title:: Package Recipe 'bioconductor-findmyfriends'
.. highlight: bash


bioconductor-findmyfriends
==========================

.. conda:recipe:: bioconductor-findmyfriends
   :replaces_section_title:

   A framework for doing microbial comparative genomics in R. The main purpose of the package is assisting in the creation of pangenome matrices where genes from related organisms are grouped by similarity\, as well as the analysis of these data. FindMyFriends provides many novel approaches to doing pangenome analysis and supports a gene grouping algorithm that scales linearly\, thus making the creation of huge pangenomes feasible.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FindMyFriends.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-findmyfriends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findmyfriends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findmyfriends/meta.yaml>`_
   :links: biotools: :biotools:`findmyfriends`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-findmyfriends

   |downloads_bioconductor-findmyfriends| |docker_bioconductor-findmyfriends|

   :versions: 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-kebabs` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-digest`  :conda:package:`r-dplyr`  :conda:package:`r-filehash`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-gtable`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-rcpp`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-findmyfriends|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-findmyfriends

   and update with::

      conda update bioconductor-findmyfriends

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-findmyfriends


.. |required_by_bioconductor-findmyfriends| conda:required_by:: bioconductor-findmyfriends
.. |downloads_bioconductor-findmyfriends| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-findmyfriends.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-findmyfriends| image:: https://quay.io/repository/biocontainers/bioconductor-findmyfriends/status
   :target: https://quay.io/repository/biocontainers/bioconductor-findmyfriends







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-findmyfriends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-findmyfriends/README.html

