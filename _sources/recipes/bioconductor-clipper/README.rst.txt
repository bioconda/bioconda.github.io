:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clipper'
.. highlight: bash

bioconductor-clipper
====================

.. conda:recipe:: bioconductor-clipper
   :replaces_section_title:
   :noindex:

   Gene Set Analysis Exploiting Pathway Topology

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/clipper.html
   :license: AGPL-3
   :recipe: /`bioconductor-clipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clipper/meta.yaml>`_

   Implements topological gene set analysis using a two\-step empirical approach. It exploits graph decomposition theory to create a junction tree and reconstruct the most relevant signal path. In the first step clipper selects significant pathways according to statistical tests on the means and the concentration matrices of the graphs derived from pathway topologies. Then\, it \"clips\" the whole pathway identifying the signal paths having the greatest association with a specific phenotype.


.. conda:package:: bioconductor-clipper

   |downloads_bioconductor-clipper| |docker_bioconductor-clipper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0``
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-qpgraph: ``>=2.36.0,<2.37.0``
   :depends bioconductor-qpgraph: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-grbase: ``>=1.6.6``
   :depends r-grbase: ``>=2.0.1,<3.0a0``
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

      mamba install bioconductor-clipper

   and update with::

      mamba update bioconductor-clipper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clipper:<tag>

   (see `bioconductor-clipper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clipper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clipper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clipper
   :alt:   (downloads)
.. |docker_bioconductor-clipper| image:: https://quay.io/repository/biocontainers/bioconductor-clipper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clipper
.. _`bioconductor-clipper/tags`: https://quay.io/repository/biocontainers/bioconductor-clipper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clipper";
        var versions = ["1.42.0","1.40.0","1.38.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clipper/README.html