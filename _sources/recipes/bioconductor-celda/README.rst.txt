:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celda'
.. highlight: bash

bioconductor-celda
==================

.. conda:recipe:: bioconductor-celda
   :replaces_section_title:

   celda leverages Bayesian hierarchical modeling to cluster genes\, cells\, or both simultaneously from single cell sequencing data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/celda.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-celda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda/meta.yaml>`_

   


.. conda:package:: bioconductor-celda

   |downloads_bioconductor-celda| |docker_bioconductor-celda|

   :versions: 1.2.0-0, 1.0.4-0
   
   :depends bioconductor-mast: >=1.12.0,<1.13.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-enrichr: 
   :depends r-foreach: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-mcmcprecision: 
   :depends r-plyr: 
   :depends r-proc: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-stringi: 
   :depends r-uwot: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celda

   and update with::

      conda update bioconductor-celda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celda:<tag>

   (see `bioconductor-celda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celda
   :alt:   (downloads)
.. |docker_bioconductor-celda| image:: https://quay.io/repository/biocontainers/bioconductor-celda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celda
.. _`bioconductor-celda/tags`: https://quay.io/repository/biocontainers/bioconductor-celda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celda/README.html