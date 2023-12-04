:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sitepath'
.. highlight: bash

bioconductor-sitepath
=====================

.. conda:recipe:: bioconductor-sitepath
   :replaces_section_title:
   :noindex:

   Phylogeny\-based sequence clustering with site polymorphism

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sitePath.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sitepath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitepath/meta.yaml>`_

   Using site polymorphism is one of the ways to cluster DNA\/protein sequences but it is possible for the sequences with the same polymorphism on a single site to be genetically distant. This package is aimed at clustering sequences using site polymorphism and their corresponding phylogenetic trees. By considering their location on the tree\, only the structurally adjacent sequences will be clustered. However\, the adjacent sequences may not necessarily have the same polymorphism. So a branch\-and\-bound like algorithm is used to minimize the entropy representing the purity of site polymorphism of each cluster.


.. conda:package:: bioconductor-sitepath

   |downloads_bioconductor-sitepath| |docker_bioconductor-sitepath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.2-1</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.3-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ape: 
   :depends r-aplot: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-seqinr: 
   :depends r-tidytree: 
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

      mamba install bioconductor-sitepath

   and update with::

      mamba update bioconductor-sitepath

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sitepath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sitepath:<tag>

   (see `bioconductor-sitepath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sitepath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sitepath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sitepath
   :alt:   (downloads)
.. |docker_bioconductor-sitepath| image:: https://quay.io/repository/biocontainers/bioconductor-sitepath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sitepath
.. _`bioconductor-sitepath/tags`: https://quay.io/repository/biocontainers/bioconductor-sitepath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sitepath";
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sitepath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sitepath/README.html