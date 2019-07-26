:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlm4omics'
.. highlight: bash

bioconductor-mlm4omics
======================

.. conda:recipe:: bioconductor-mlm4omics
   :replaces_section_title:

   To conduct Bayesian inference regression for responses with multilevel explanatory variables and missing values\; It uses function from \'Stan\'\, a software to implement posterior sampling using Hamiltonian MC and its variation Non\-U\-Turn algorithms. It implements the posterior sampling of regression coefficients from the multilevel regression models. The package has two main functions to handle not\-missing\-at\-random missing responses and left\-censored with not\-missing\-at random responses. The purpose is to provide a similar format as the other R regression functions but using \'Stan\' models.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/mlm4omics.html
   :license: GPL-3
   :recipe: /`bioconductor-mlm4omics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlm4omics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlm4omics/meta.yaml>`_

   


.. conda:package:: bioconductor-mlm4omics

   |downloads_bioconductor-mlm4omics| |docker_bioconductor-mlm4omics|

   :versions: 1.2.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: >=1.66.0-1
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rcpp: >=0.12.17
   :depends r-rcppeigen: >=0.3.3.4.0
   :depends r-rstan: >=2.17.3
   :depends r-rstantools: >=1.5.0
   :depends r-stanheaders: >=2.17.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlm4omics

   and update with::

      conda update bioconductor-mlm4omics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlm4omics:<tag>

   (see `bioconductor-mlm4omics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlm4omics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlm4omics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlm4omics
   :alt:   (downloads)
.. |docker_bioconductor-mlm4omics| image:: https://quay.io/repository/biocontainers/bioconductor-mlm4omics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlm4omics
.. _`bioconductor-mlm4omics/tags`: https://quay.io/repository/biocontainers/bioconductor-mlm4omics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlm4omics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlm4omics/README.html