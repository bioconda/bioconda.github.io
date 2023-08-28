:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scpca'
.. highlight: bash

bioconductor-scpca
==================

.. conda:recipe:: bioconductor-scpca
   :replaces_section_title:
   :noindex:

   Sparse Contrastive Principal Component Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scPCA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scpca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scpca/meta.yaml>`_

   A toolbox for sparse contrastive principal component analysis \(scPCA\) of high\-dimensional biological data. scPCA combines the stability and interpretability of sparse PCA with contrastive PCA\'s ability to disentangle biological signal from unwanted variation through the use of control data. Also implements and extends cPCA.


.. conda:package:: bioconductor-scpca

   |downloads_bioconductor-scpca| |docker_bioconductor-scpca|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-scaledmatrix: ``>=1.8.0,<1.9.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-coop: 
   :depends r-dplyr: 
   :depends r-elasticnet: 
   :depends r-kernlab: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-origami: 
   :depends r-purrr: 
   :depends r-rdpack: 
   :depends r-rspectra: 
   :depends r-sparsepca: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scpca

   and update with::

      mamba update bioconductor-scpca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scpca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scpca:<tag>

   (see `bioconductor-scpca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scpca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scpca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scpca
   :alt:   (downloads)
.. |docker_bioconductor-scpca| image:: https://quay.io/repository/biocontainers/bioconductor-scpca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scpca
.. _`bioconductor-scpca/tags`: https://quay.io/repository/biocontainers/bioconductor-scpca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scpca";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.2","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scpca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scpca/README.html