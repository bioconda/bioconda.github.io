:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scuttle'
.. highlight: bash

bioconductor-scuttle
====================

.. conda:recipe:: bioconductor-scuttle
   :replaces_section_title:
   :noindex:

   Single\-Cell RNA\-Seq Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scuttle.html
   :license: GPL-3
   :recipe: /`bioconductor-scuttle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle/meta.yaml>`_
   :links: biotools: :biotools:`scuttle`

   Provides basic utility functions for performing single\-cell analyses\, focusing on simple normalization\, quality control and data transformations. Also provides some helper functions to assist development of other packages.


.. conda:package:: bioconductor-scuttle

   |downloads_bioconductor-scuttle| |docker_bioconductor-scuttle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.4-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-s4arrays: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4arrays: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0``
   :depends bioconductor-sparsearray: ``>=1.6.0,<1.7.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
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

      mamba install bioconductor-scuttle

   and update with::

      mamba update bioconductor-scuttle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scuttle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scuttle:<tag>

   (see `bioconductor-scuttle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scuttle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scuttle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scuttle
   :alt:   (downloads)
.. |docker_bioconductor-scuttle| image:: https://quay.io/repository/biocontainers/bioconductor-scuttle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scuttle
.. _`bioconductor-scuttle/tags`: https://quay.io/repository/biocontainers/bioconductor-scuttle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scuttle";
        var versions = ["1.16.0","1.16.0","1.12.0","1.12.0","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scuttle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scuttle/README.html