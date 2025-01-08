:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsm'
.. highlight: bash

bioconductor-mirsm
==================

.. conda:recipe:: bioconductor-mirsm
   :replaces_section_title:
   :noindex:

   Inferring miRNA sponge modules in heterogeneous data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miRSM.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm/meta.yaml>`_

   The package aims to identify miRNA sponge or ceRNA modules in heterogeneous data. It provides several functions to study miRNA sponge modules at single\-sample and multi\-sample levels\, including popular methods for inferring gene modules \(candidate miRNA sponge or ceRNA modules\)\, and two functions to identify miRNA sponge modules at single\-sample and multi\-sample levels\, as well as several functions to conduct modular analysis of miRNA sponge modules.


.. conda:package:: bioconductor-mirsm

   |downloads_bioconductor-mirsm| |docker_bioconductor-mirsm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.3-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bicare: ``>=1.58.0,<1.59.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-fabia: ``>=2.46.0,<2.47.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-ibbig: ``>=1.44.0,<1.45.0``
   :depends bioconductor-mirsponger: ``>=2.4.0,<2.5.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-rqubic: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bibitr: 
   :depends r-biclust: 
   :depends r-dbscan: 
   :depends r-dynamictreecut: 
   :depends r-energy: 
   :depends r-flashclust: 
   :depends r-gfa: 
   :depends r-igraph: 
   :depends r-isa2: 
   :depends r-linkcomm: 
   :depends r-matrixcorrelation: 
   :depends r-mcl: 
   :depends r-mclust: 
   :depends r-nmf: 
   :depends r-pma: 
   :depends r-ppclust: 
   :depends r-rcpp: 
   :depends r-s4vd: 
   :depends r-sombrero: 
   :depends r-subspace: 
   :depends r-wgcna: 
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

      mamba install bioconductor-mirsm

   and update with::

      mamba update bioconductor-mirsm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirsm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsm:<tag>

   (see `bioconductor-mirsm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsm
   :alt:   (downloads)
.. |docker_bioconductor-mirsm| image:: https://quay.io/repository/biocontainers/bioconductor-mirsm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsm
.. _`bioconductor-mirsm/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirsm";
        var versions = ["1.18.0","1.16.0","1.16.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsm/README.html