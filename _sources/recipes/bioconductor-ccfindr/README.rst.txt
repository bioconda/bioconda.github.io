.. title:: Package Recipe 'bioconductor-ccfindr'
.. highlight: bash


bioconductor-ccfindr
====================

.. conda:recipe:: bioconductor-ccfindr
   :replaces_section_title:

   A collection of tools for cancer genomic data clustering analyses\, including those for single cell RNA\-seq. Cell clustering and feature gene selection analysis employ Bayesian \(and maximum likelihood\) non\-negative matrix factorization \(NMF\) algorithm. Input data set consists of RNA count matrix\, gene\, and cell bar code annotations.  Analysis outputs are factor matrices for multiple ranks and marginal likelihood values for each rank. The package includes utilities for downstream analyses\, including meta\-gene identification\, visualization\, and construction of rank\-based trees for clusters.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ccfindR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ccfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccfindr/meta.yaml>`_

   


.. conda:package:: bioconductor-ccfindr

   |downloads_bioconductor-ccfindr| |docker_bioconductor-ccfindr|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`gsl` >=2.4,<2.5.0a0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`openblas` >=0.3.3,<0.3.4.0a0 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gtools`  :conda:package:`r-irlba`  :conda:package:`r-matrix`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  :conda:package:`r-rcppeigen`  :conda:package:`r-rmpi`  :conda:package:`r-rtsne`  

   :required~by: |required_by_bioconductor-ccfindr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccfindr

   and update with::

      conda update bioconductor-ccfindr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ccfindr


.. |required_by_bioconductor-ccfindr| conda:required_by:: bioconductor-ccfindr
.. |downloads_bioconductor-ccfindr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccfindr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ccfindr| image:: https://quay.io/repository/biocontainers/bioconductor-ccfindr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccfindr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccfindr/README.html

