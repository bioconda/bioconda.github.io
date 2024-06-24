:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsematrixstats'
.. highlight: bash

bioconductor-sparsematrixstats
==============================

.. conda:recipe:: bioconductor-sparsematrixstats
   :replaces_section_title:
   :noindex:

   Summary Statistics for Rows and Columns of Sparse Matrices

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/sparseMatrixStats.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparsematrixstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats/meta.yaml>`_
   :links: biotools: :biotools:`sparseMatrixStats`

   High performance functions for row and column operations on sparse matrices. For example\: col \/ rowMeans2\, col \/ rowMedians\, col \/ rowVars etc. Currently\, the optimizations are limited to data in the column sparse format. This package is inspired by the matrixStats package by Henrik Bengtsson.


.. conda:package:: bioconductor-sparsematrixstats

   |downloads_bioconductor-sparsematrixstats| |docker_bioconductor-sparsematrixstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: ``>=0.60.0``
   :depends r-rcpp: 
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

      mamba install bioconductor-sparsematrixstats

   and update with::

      mamba update bioconductor-sparsematrixstats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sparsematrixstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsematrixstats:<tag>

   (see `bioconductor-sparsematrixstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsematrixstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsematrixstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsematrixstats
   :alt:   (downloads)
.. |docker_bioconductor-sparsematrixstats| image:: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats
.. _`bioconductor-sparsematrixstats/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsematrixstats";
        var versions = ["1.14.0","1.14.0","1.12.2","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html