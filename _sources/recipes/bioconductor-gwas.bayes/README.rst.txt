:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwas.bayes'
.. highlight: bash

bioconductor-gwas.bayes
=======================

.. conda:recipe:: bioconductor-gwas.bayes
   :replaces_section_title:
   :noindex:

   GWAS for Selfing Species

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GWAS.BAYES.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-gwas.bayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwas.bayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwas.bayes/meta.yaml>`_

   This package is built to perform GWAS analysis for selfing species. The research related to this package was supported in part by National Science Foundation Award 1853549.


.. conda:package:: bioconductor-gwas.bayes

   |downloads_bioconductor-gwas.bayes| |docker_bioconductor-gwas.bayes|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: ``>=6.0-86``
   :depends r-doparallel: ``>=1.0.15``
   :depends r-ga: ``>=3.2``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-matrix: ``>=1.2-18``
   :depends r-memoise: ``>=1.1.0``
   :depends r-rcpp: ``>=1.0.3``
   :depends r-rcppeigen: ``>=0.3.3.7.0``
   :depends r-reshape2: ``>=1.4.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gwas.bayes

   and update with::

      conda update bioconductor-gwas.bayes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwas.bayes:<tag>

   (see `bioconductor-gwas.bayes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwas.bayes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwas.bayes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwas.bayes
   :alt:   (downloads)
.. |docker_bioconductor-gwas.bayes| image:: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes
.. _`bioconductor-gwas.bayes/tags`: https://quay.io/repository/biocontainers/bioconductor-gwas.bayes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwas.bayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwas.bayes/README.html