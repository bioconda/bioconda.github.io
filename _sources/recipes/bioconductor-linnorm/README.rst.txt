:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linnorm'
.. highlight: bash

bioconductor-linnorm
====================

.. conda:recipe:: bioconductor-linnorm
   :replaces_section_title:
   :noindex:

   Linear model and normality based normalization and transformation method \(Linnorm\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Linnorm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-linnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linnorm/meta.yaml>`_
   :links: biotools: :biotools:`linnorm`

   Linnorm is an algorithm for normalizing and transforming RNA\-seq\, single cell RNA\-seq\, ChIP\-seq count data or any large scale count data. It has been independently reviewed by Tian et al. on Nature Methods \(https\:\/\/doi.org\/10.1038\/s41592\-019\-0425\-8\). Linnorm can work with raw count\, CPM\, RPKM\, FPKM and TPM.


.. conda:package:: bioconductor-linnorm

   |downloads_bioconductor-linnorm| |docker_bioconductor-linnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.1-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.18.0-2</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-2``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-amap: 
   :depends r-apcluster: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ellipse: 
   :depends r-fastcluster: 
   :depends r-fpc: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gmodels: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-rcpp: ``>=0.12.2``
   :depends r-rcpparmadillo: ``>=0.8.100.1.0``
   :depends r-rtsne: 
   :depends r-statmod: 
   :depends r-vegan: 
   :depends r-zoo: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-linnorm

   and update with::

      mamba update bioconductor-linnorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-linnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-linnorm:<tag>

   (see `bioconductor-linnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-linnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linnorm
   :alt:   (downloads)
.. |docker_bioconductor-linnorm| image:: https://quay.io/repository/biocontainers/bioconductor-linnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linnorm
.. _`bioconductor-linnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-linnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-linnorm";
        var versions = ["2.26.0","2.26.0","2.24.1","2.22.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linnorm/README.html