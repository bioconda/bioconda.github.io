:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amaretto'
.. highlight: bash

bioconductor-amaretto
=====================

.. conda:recipe:: bioconductor-amaretto
   :replaces_section_title:
   :noindex:

   Regulatory Network Inference and Driver Gene Evaluation using Integrative Multi\-Omics Analysis and Penalized Regression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AMARETTO.html
   :license: Apache License (== 2.0) + file LICENSE
   :recipe: /`bioconductor-amaretto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto/meta.yaml>`_

   Integrating an increasing number of available multi\-omics cancer data remains one of the main challenges to improve our understanding of cancer. One of the main challenges is using multi\-omics data for identifying novel cancer driver genes. We have developed an algorithm\, called AMARETTO\, that integrates copy number\, DNA methylation and gene expression data to identify a set of driver genes by analyzing cancer samples and connects them to clusters of co\-expressed genes\, which we define as modules. We applied AMARETTO in a pancancer setting to identify cancer driver genes and their modules on multiple cancer sites. AMARETTO captures modules enriched in angiogenesis\, cell cycle and EMT\, and modules that accurately predict survival and molecular subtypes. This allows AMARETTO to identify novel cancer driver genes directing canonical cancer pathways.


.. conda:package:: bioconductor-amaretto

   |downloads_bioconductor-amaretto| |docker_bioconductor-amaretto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.1-1``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.1,<2.11.0a0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-curatedtcgadata: ``>=1.24.0,<1.25.0``
   :depends bioconductor-curatedtcgadata: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-callr: ``>=3.0.0.9001``
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gridextra: 
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tibble: 
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

      mamba install bioconductor-amaretto

   and update with::

      mamba update bioconductor-amaretto

  To create a new environment, run::

      mamba create --name myenvname bioconductor-amaretto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amaretto:<tag>

   (see `bioconductor-amaretto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amaretto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amaretto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amaretto
   :alt:   (downloads)
.. |docker_bioconductor-amaretto| image:: https://quay.io/repository/biocontainers/bioconductor-amaretto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amaretto
.. _`bioconductor-amaretto/tags`: https://quay.io/repository/biocontainers/bioconductor-amaretto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-amaretto";
        var versions = ["1.18.0","1.16.0","1.13.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amaretto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amaretto/README.html