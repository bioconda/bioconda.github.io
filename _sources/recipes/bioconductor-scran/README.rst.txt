:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scran'
.. highlight: bash

bioconductor-scran
==================

.. conda:recipe:: bioconductor-scran
   :replaces_section_title:
   :noindex:

   Methods for Single\-Cell RNA\-Seq Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scran.html
   :license: GPL-3
   :recipe: /`bioconductor-scran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran/meta.yaml>`_
   :links: biotools: :biotools:`scran`

   Implements miscellaneous functions for interpretation of single\-cell RNA\-seq data. Methods are provided for assignment of cell cycle phase\, detection of highly variable and significantly correlated genes\, identification of marker genes\, and other common tasks in routine single\-cell analysis workflows.


.. conda:package:: bioconductor-scran

   |downloads_bioconductor-scran| |docker_bioconductor-scran|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.1-1</code>,  <code>1.22.1-0</code>,  </span></summary>
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.1-1``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.5-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.4-0``,  ``1.6.2-0``,  ``1.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-limma: ``>=3.62.1,<3.63.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-metapod: ``>=1.14.0,<1.15.0``
   :depends bioconductor-metapod: ``>=1.14.0,<1.15.0a0``
   :depends bioconductor-s4arrays: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4arrays: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-statmod: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scran

   and update with::

      mamba update bioconductor-scran

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scran

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scran:<tag>

   (see `bioconductor-scran/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scran| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scran.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scran
   :alt:   (downloads)
.. |docker_bioconductor-scran| image:: https://quay.io/repository/biocontainers/bioconductor-scran/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scran
.. _`bioconductor-scran/tags`: https://quay.io/repository/biocontainers/bioconductor-scran?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scran";
        var versions = ["1.34.0","1.34.0","1.30.0","1.30.0","1.28.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scran/README.html