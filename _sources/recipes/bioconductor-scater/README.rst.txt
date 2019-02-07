.. title:: Package Recipe 'bioconductor-scater'
.. highlight: bash


bioconductor-scater
===================

.. conda:recipe:: bioconductor-scater
   :replaces_section_title:

   A collection of tools for doing various analyses of single\-cell RNA\-seq gene expression data\, with a focus on quality control and visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scater.html
   :license: GPL-3
   :recipe: /`bioconductor-scater <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater/meta.yaml>`_
   :links: biotools: :biotools:`scater`

   


.. conda:package:: bioconductor-scater

   |downloads_bioconductor-scater| |docker_bioconductor-scater|

   :versions: 1.10.0, 1.8.4, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-beachmat` >=1.4.0,<1.5.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-delayedmatrixstats` >=1.4.0,<1.5.0 :conda:package:`bioconductor-rhdf5lib` >=1.4.0,<1.5.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggbeeswarm`  :conda:package:`r-ggplot2`  :conda:package:`r-matrix`  :conda:package:`r-plyr`  :conda:package:`r-rcpp` >=0.12.14 :conda:package:`r-reshape2`  :conda:package:`r-viridis`  

   :required~by: |required_by_bioconductor-scater|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scater

   and update with::

      conda update bioconductor-scater

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scater


.. |required_by_bioconductor-scater| conda:required_by:: bioconductor-scater
.. |downloads_bioconductor-scater| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scater.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scater| image:: https://quay.io/repository/biocontainers/bioconductor-scater/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scater







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scater/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scater/README.html

