:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccfindr'
.. highlight: bash

bioconductor-ccfindr
====================

.. conda:recipe:: bioconductor-ccfindr
   :replaces_section_title:
   :noindex:

   Cancer Clone Finder

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ccfindR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ccfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccfindr/meta.yaml>`_

   A collection of tools for cancer genomic data clustering analyses\, including those for single cell RNA\-seq. Cell clustering and feature gene selection analysis employ Bayesian \(and maximum likelihood\) non\-negative matrix factorization \(NMF\) algorithm. Input data set consists of RNA count matrix\, gene\, and cell bar code annotations.  Analysis outputs are factor matrices for multiple ranks and marginal likelihood values for each rank. The package includes utilities for downstream analyses\, including meta\-gene identification\, visualization\, and construction of rank\-based trees for clusters.


.. conda:package:: bioconductor-ccfindr

   |downloads_bioconductor-ccfindr| |docker_bioconductor-ccfindr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gtools: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-rdpack: ``>=0.7``
   :depends r-rmpi: 
   :depends r-rtsne: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccfindr

   and update with::

      conda update bioconductor-ccfindr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccfindr:<tag>

   (see `bioconductor-ccfindr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccfindr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccfindr
   :alt:   (downloads)
.. |docker_bioconductor-ccfindr| image:: https://quay.io/repository/biocontainers/bioconductor-ccfindr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccfindr
.. _`bioconductor-ccfindr/tags`: https://quay.io/repository/biocontainers/bioconductor-ccfindr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccfindr";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html