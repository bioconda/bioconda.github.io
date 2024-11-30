:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-monocle'
.. highlight: bash

bioconductor-monocle
====================

.. conda:recipe:: bioconductor-monocle
   :replaces_section_title:
   :noindex:

   Clustering\, differential expression\, and trajectory analysis for single\- cell RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/monocle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-monocle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monocle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monocle/meta.yaml>`_
   :links: biotools: :biotools:`monocle`

   Monocle performs differential expression and time\-series analysis for single\-cell expression experiments. It orders individual cells according to progress through a biological process\, without knowing ahead of time which genes define progress through that process. Monocle also performs differential expression analysis\, clustering\, visualization\, and other useful tasks on single cell expression data.  It is designed to work with RNA\-Seq and qPCR data\, but could be used with other types as well.


.. conda:package:: bioconductor-monocle

   |downloads_bioconductor-monocle| |docker_bioconductor-monocle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.22.0-2</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.22.0-2``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-2``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocviews: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biocviews: ``>=1.70.0,<1.71.0a0``
   :depends bioconductor-hsmmsinglecell: ``>=1.22.0,<1.23.0``
   :depends bioconductor-hsmmsinglecell: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-combinat: 
   :depends r-ddrtree: ``>=0.1.4``
   :depends r-dplyr: 
   :depends r-fastica: 
   :depends r-ggplot2: ``>=1.0.0``
   :depends r-igraph: ``>=1.0.1``
   :depends r-irlba: ``>=2.0.0``
   :depends r-leidenbase: ``>=0.1.9``
   :depends r-mass: 
   :depends r-matrix: ``>=1.2-6``
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-proxy: 
   :depends r-qlcmatrix: 
   :depends r-rann: ``>=2.5``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-slam: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-vgam: ``>=1.0-6``
   :depends r-viridis: 
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

      mamba install bioconductor-monocle

   and update with::

      mamba update bioconductor-monocle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-monocle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-monocle:<tag>

   (see `bioconductor-monocle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-monocle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-monocle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-monocle
   :alt:   (downloads)
.. |docker_bioconductor-monocle| image:: https://quay.io/repository/biocontainers/bioconductor-monocle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-monocle
.. _`bioconductor-monocle/tags`: https://quay.io/repository/biocontainers/bioconductor-monocle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-monocle";
        var versions = ["2.30.0","2.30.0","2.28.0","2.26.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-monocle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-monocle/README.html