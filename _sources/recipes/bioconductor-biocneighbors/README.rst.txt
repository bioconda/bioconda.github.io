:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocneighbors'
.. highlight: bash

bioconductor-biocneighbors
==========================

.. conda:recipe:: bioconductor-biocneighbors
   :replaces_section_title:
   :noindex:

   Nearest Neighbor Detection for Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocNeighbors.html
   :license: GPL-3
   :recipe: /`bioconductor-biocneighbors <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocneighbors>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocneighbors/meta.yaml>`_

   Implements exact and approximate methods for nearest neighbor detection\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. Exact searches can be performed using the k\-means for k\-nearest neighbors algorithm or with vantage point trees. Approximate searches can be performed using the Annoy or HNSW libraries. Searching on either Euclidean or Manhattan distances is supported. Parallelization is achieved for all methods by using BiocParallel. Functions are also provided to search for all neighbors within a given distance.


.. conda:package:: bioconductor-biocneighbors

   |downloads_bioconductor-biocneighbors| |docker_bioconductor-biocneighbors|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.2-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpphnsw: 
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
   :target: https://anaconda.org/bioconda/bioconductor-biocneighbors
   :alt:   (downloads)
.. |docker_bioconductor-biocneighbors| image:: https://quay.io/repository/biocontainers/bioconductor-biocneighbors/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocneighbors
.. _`bioconductor-biocneighbors/tags`: https://quay.io/repository/biocontainers/bioconductor-biocneighbors?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocneighbors";
        var versions = ["1.18.0","1.16.0","1.16.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html