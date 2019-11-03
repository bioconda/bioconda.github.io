:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opencyto'
.. highlight: bash

bioconductor-opencyto
=====================

.. conda:recipe:: bioconductor-opencyto
   :replaces_section_title:

   This package is designed to facilitate the automated gating methods in sequential way to mimic the manual gating strategy.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/openCyto.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-opencyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opencyto/meta.yaml>`_

   


.. conda:package:: bioconductor-opencyto

   |downloads_bioconductor-opencyto| |docker_bioconductor-opencyto|

   :versions: 1.24.0-0, 1.22.2-0, 1.20.1-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-flowclust: >=3.24.0,<3.25.0
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends bioconductor-flowstats: >=3.44.0,<3.45.0
   :depends bioconductor-flowviz: >=1.50.0,<1.51.0
   :depends bioconductor-flowworkspace: >=3.34.0,<3.35.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-ncdfflow: >=2.32.0,<2.33.0
   :depends bioconductor-rbgl: >=1.62.0,<1.63.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-clue: 
   :depends r-data.table: 
   :depends r-gtools: 
   :depends r-ks: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-opencyto

   and update with::

      conda update bioconductor-opencyto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opencyto:<tag>

   (see `bioconductor-opencyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opencyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opencyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opencyto
   :alt:   (downloads)
.. |docker_bioconductor-opencyto| image:: https://quay.io/repository/biocontainers/bioconductor-opencyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opencyto
.. _`bioconductor-opencyto/tags`: https://quay.io/repository/biocontainers/bioconductor-opencyto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opencyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opencyto/README.html