:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scuttle'
.. highlight: bash

bioconductor-scuttle
====================

.. conda:recipe:: bioconductor-scuttle
   :replaces_section_title:
   :noindex:

   Single\-Cell RNA\-Seq Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scuttle.html
   :license: GPL-3
   :recipe: /`bioconductor-scuttle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle/meta.yaml>`_

   Provides basic utility functions for performing single\-cell analyses\, focusing on simple normalization\, quality control and data transformations. Also provides some helper functions to assist development of other packages.


.. conda:package:: bioconductor-scuttle

   |downloads_bioconductor-scuttle| |docker_bioconductor-scuttle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.4-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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
        var versions = ["1.12.0","1.10.1","1.8.0","1.8.0","1.4.0"];
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