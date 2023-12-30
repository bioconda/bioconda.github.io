:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bluster'
.. highlight: bash

bioconductor-bluster
====================

.. conda:recipe:: bioconductor-bluster
   :replaces_section_title:
   :noindex:

   Clustering Algorithms for Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/bluster.html
   :license: GPL-3
   :recipe: /`bioconductor-bluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bluster/meta.yaml>`_

   Wraps common clustering algorithms in an easily extended S4 framework. Backends are implemented for hierarchical\, k\-means and graph\-based clustering. Several utilities are also provided to compare and evaluate clustering results.


.. conda:package:: bioconductor-bluster

   |downloads_bioconductor-bluster| |docker_bioconductor-bluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-igraph: 
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

      mamba install bioconductor-bluster

   and update with::

      mamba update bioconductor-bluster

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bluster:<tag>

   (see `bioconductor-bluster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bluster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bluster
   :alt:   (downloads)
.. |docker_bioconductor-bluster| image:: https://quay.io/repository/biocontainers/bioconductor-bluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bluster
.. _`bioconductor-bluster/tags`: https://quay.io/repository/biocontainers/bioconductor-bluster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bluster";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bluster/README.html