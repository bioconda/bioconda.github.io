:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scran'
.. highlight: bash

bioconductor-scran
==================

.. conda:recipe:: bioconductor-scran
   :replaces_section_title:

   Implements functions for low\-level analyses of single\-cell RNA\-seq data. Methods are provided for normalization of cell\-specific biases\, assignment of cell cycle phase\, detection of highly variable and significantly correlated genes\, correction of batch effects\, identification of marker genes\, and other common tasks in single\-cell analysis workflows.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/scran.html
   :license: GPL-3
   :recipe: /`bioconductor-scran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran/meta.yaml>`_
   :links: biotools: :biotools:`scran`

   


.. conda:package:: bioconductor-scran

   |downloads_bioconductor-scran| |docker_bioconductor-scran|

   :versions: 1.14.1-0, 1.14.0-0, 1.12.1-0, 1.10.1-0, 1.8.4-0, 1.6.2-0, 1.4.5-0
   
   :depends bioconductor-beachmat: >=2.2.0,<2.3.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocneighbors: >=1.4.0,<1.5.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biocsingular: >=1.2.0,<1.3.0
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends bioconductor-delayedmatrixstats: >=1.8.0,<1.9.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-scater: >=1.14.0,<1.15.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scran

   and update with::

      conda update bioconductor-scran

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scran:<tag>

   (see `bioconductor-scran/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scran| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scran.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scran
   :alt:   (downloads)
.. |docker_bioconductor-scran| image:: https://quay.io/repository/biocontainers/bioconductor-scran/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scran
.. _`bioconductor-scran/tags`: https://quay.io/repository/biocontainers/bioconductor-scran?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scran/README.html