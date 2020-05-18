:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mimosa'
.. highlight: bash

bioconductor-mimosa
===================

.. conda:recipe:: bioconductor-mimosa
   :replaces_section_title:

   Mixture Models for Single\-Cell Assays

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MIMOSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mimosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa/meta.yaml>`_

   Modeling count data using Dirichlet\-multinomial and beta\-binomial mixtures with applications to single\-cell assays.


.. conda:package:: bioconductor-mimosa

   |downloads_bioconductor-mimosa| |docker_bioconductor-mimosa|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.1-0, 1.20.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-coda: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-formula: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-mcmcpack: 
   :depends r-modeest: 
   :depends r-plyr: 
   :depends r-pracma: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-testthat: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mimosa

   and update with::

      conda update bioconductor-mimosa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mimosa:<tag>

   (see `bioconductor-mimosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mimosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mimosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mimosa
   :alt:   (downloads)
.. |docker_bioconductor-mimosa| image:: https://quay.io/repository/biocontainers/bioconductor-mimosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mimosa
.. _`bioconductor-mimosa/tags`: https://quay.io/repository/biocontainers/bioconductor-mimosa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mimosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mimosa/README.html