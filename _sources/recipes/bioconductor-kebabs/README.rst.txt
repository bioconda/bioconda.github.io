:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kebabs'
.. highlight: bash

bioconductor-kebabs
===================

.. conda:recipe:: bioconductor-kebabs
   :replaces_section_title:
   :noindex:

   Kernel\-Based Analysis Of Biological Sequences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/kebabs.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-kebabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kebabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kebabs/meta.yaml>`_
   :links: biotools: :biotools:`kebabs`

   The package provides functionality for kernel\-based analysis of DNA\, RNA\, and amino acid sequences via SVM\-based methods. As core functionality\, kebabs implements following sequence kernels\: spectrum kernel\, mismatch kernel\, gappy pair kernel\, and motif kernel. Apart from an efficient implementation of standard position\-independent functionality\, the kernels are extended in a novel way to take the position of patterns into account for the similarity measure. Because of the flexibility of the kernel formulation\, other kernels like the weighted degree kernel or the shifted weighted degree kernel with constant weighting of positions are included as special cases. An annotation\-specific variant of the kernels uses annotation information placed along the sequence together with the patterns in the sequence. The package allows for the generation of a kernel matrix or an explicit feature representation in dense or sparse format for all available kernels which can be used with methods implemented in other R packages. With focus on SVM\-based methods\, kebabs provides a framework which simplifies the usage of existing SVM implementations in kernlab\, e1071\, and LiblineaR. Binary and multi\-class classification as well as regression tasks can be used in a unified way without having to deal with the different functions\, parameters\, and formats of the selected SVM. As support for choosing hyperparameters\, the package provides cross validation \- including grouped cross validation\, grid search and model selection functions. For easier biological interpretation of the results\, the package computes feature weights for all SVMs and prediction profiles which show the contribution of individual sequence positions to the prediction result and indicate the relevance of sequence sections for the learning result and the underlying biological functions.


.. conda:package:: bioconductor-kebabs

   |downloads_bioconductor-kebabs| |docker_bioconductor-kebabs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.1-1</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.1-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-apcluster: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-kernlab: 
   :depends r-liblinear: 
   :depends r-matrix: ``>=1.5-0``
   :depends r-rcpp: ``>=0.11.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-kebabs

   and update with::

      mamba update bioconductor-kebabs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kebabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kebabs:<tag>

   (see `bioconductor-kebabs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kebabs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kebabs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kebabs
   :alt:   (downloads)
.. |docker_bioconductor-kebabs| image:: https://quay.io/repository/biocontainers/bioconductor-kebabs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kebabs
.. _`bioconductor-kebabs/tags`: https://quay.io/repository/biocontainers/bioconductor-kebabs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kebabs";
        var versions = ["1.36.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kebabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kebabs/README.html