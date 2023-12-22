:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celda'
.. highlight: bash

bioconductor-celda
==================

.. conda:recipe:: bioconductor-celda
   :replaces_section_title:
   :noindex:

   CEllular Latent Dirichlet Allocation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/celda.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-celda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celda/meta.yaml>`_

   Celda is a suite of Bayesian hierarchical models for clustering single\-cell RNA\-sequencing \(scRNA\-seq\) data. It is able to perform \"bi\-clustering\" and simultaneously cluster genes into gene modules and cells into cell subpopulations. It also contains DecontX\, a novel Bayesian method to computationally estimate and remove RNA contamination in individual cells without empty droplet information. A variety of scRNA\-seq data visualization functions is also included.


.. conda:package:: bioconductor-celda

   |downloads_bioconductor-celda| |docker_bioconductor-celda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.6.1-1</code>,  </span></summary>
      

      ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.4.5-0``,  ``1.2.0-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scater: ``>=1.30.1,<1.31.0a0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-dbscan: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-enrichr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mcmcprecision: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-uwot: 
   :depends r-withr: 
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

      mamba install bioconductor-celda

   and update with::

      mamba update bioconductor-celda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-celda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celda:<tag>

   (see `bioconductor-celda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celda
   :alt:   (downloads)
.. |docker_bioconductor-celda| image:: https://quay.io/repository/biocontainers/bioconductor-celda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celda
.. _`bioconductor-celda/tags`: https://quay.io/repository/biocontainers/bioconductor-celda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celda";
        var versions = ["1.18.1","1.16.1","1.14.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celda/README.html