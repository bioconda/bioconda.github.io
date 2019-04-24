:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocneighbors'
.. highlight: bash

bioconductor-biocneighbors
==========================

.. conda:recipe:: bioconductor-biocneighbors
   :replaces_section_title:

   Implements exact and approximate methods for nearest neighbor detection\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. The exact algorithm is implemented using pre\-clustering with the k\-means algorithm\, as described by Wang \(2012\). This is faster than conventional kd\-trees for neighbor searching in higher \(\> 20\) dimensional data. The approximate method uses the Annoy algorithm. Functions are also provided to search for all neighbors within a given distance. Parallelization is achieved for all methods using the BiocParallel framework.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocNeighbors.html
   :license: GPL-3
   :recipe: /`bioconductor-biocneighbors <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocneighbors>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocneighbors/meta.yaml>`_

   


.. conda:package:: bioconductor-biocneighbors

   |downloads_bioconductor-biocneighbors| |docker_bioconductor-biocneighbors|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: 
   :depends r-rcppannoy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocneighbors

   and update with::

      conda update bioconductor-biocneighbors

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocneighbors:<tag>

   (see `bioconductor-biocneighbors/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocneighbors| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocneighbors.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocneighbors| image:: https://quay.io/repository/biocontainers/bioconductor-biocneighbors/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocneighbors
.. _`bioconductor-biocneighbors/tags`: https://quay.io/repository/biocontainers/bioconductor-biocneighbors?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html