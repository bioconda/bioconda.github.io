:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ifaa'
.. highlight: bash

bioconductor-ifaa
=================

.. conda:recipe:: bioconductor-ifaa
   :replaces_section_title:
   :noindex:

   Robust Inference for Absolute Abundance in Microbiome Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IFAA.html
   :license: GPL-2
   :recipe: /`bioconductor-ifaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ifaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ifaa/meta.yaml>`_

   This package offers a robust approach to make inference on the association of covariates with the absolute abundance \(AA\) of microbiome in an ecosystem. It can be also directly applied to relative abundance \(RA\) data to make inference on AA because the ratio of two RA is equal to the ratio of their AA. This algorithm can estimate and test the associations of interest while adjusting for potential confounders. The estimates of this method have easy interpretation like a typical regression analysis. High\-dimensional covariates are handled with regularization and it is implemented by parallel computing. False discovery rate is automatically controlled by this approach. Zeros do not need to be imputed by a positive value for the analysis. The IFAA package also offers the \'MZILN\' function for estimating and testing associations of abundance ratios with covariates.


.. conda:package:: bioconductor-ifaa

   |downloads_bioconductor-ifaa| |docker_bioconductor-ifaa|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-desctools: 
   :depends r-doparallel: ``>=1.0.11``
   :depends r-dorng: 
   :depends r-foreach: ``>=1.4.3``
   :depends r-glmnet: 
   :depends r-hdci: ``>=1.0-2``
   :depends r-mathjaxr: 
   :depends r-matrix: ``>=1.4-0``
   :depends r-matrixextra: 
   :depends r-parallelly: 
   :depends r-stringr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ifaa

   and update with::

      mamba update bioconductor-ifaa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ifaa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ifaa:<tag>

   (see `bioconductor-ifaa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ifaa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ifaa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ifaa
   :alt:   (downloads)
.. |docker_bioconductor-ifaa| image:: https://quay.io/repository/biocontainers/bioconductor-ifaa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ifaa
.. _`bioconductor-ifaa/tags`: https://quay.io/repository/biocontainers/bioconductor-ifaa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ifaa";
        var versions = ["1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ifaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ifaa/README.html