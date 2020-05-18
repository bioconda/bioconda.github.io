:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scpca'
.. highlight: bash

bioconductor-scpca
==================

.. conda:recipe:: bioconductor-scpca
   :replaces_section_title:

   Sparse Contrastive Principal Component Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/scPCA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scpca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpca/meta.yaml>`_

   A toolbox for sparse contrastive principal component analysis \(scPCA\) of high\-dimensional biological data. scPCA combines the stability and interpretability of sparse PCA with contrastive PCA\'s ability to disentangle biological signal from techical noise through the use of control data. Also implements and extends cPCA.


.. conda:package:: bioconductor-scpca

   |downloads_bioconductor-scpca| |docker_bioconductor-scpca|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends r-assertthat: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-elasticnet: 
   :depends r-kernlab: 
   :depends r-matrixstats: 
   :depends r-origami: 
   :depends r-purrr: 
   :depends r-rdpack: 
   :depends r-sparsepca: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scpca

   and update with::

      conda update bioconductor-scpca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scpca:<tag>

   (see `bioconductor-scpca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scpca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scpca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scpca
   :alt:   (downloads)
.. |docker_bioconductor-scpca| image:: https://quay.io/repository/biocontainers/bioconductor-scpca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scpca
.. _`bioconductor-scpca/tags`: https://quay.io/repository/biocontainers/bioconductor-scpca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scpca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scpca/README.html