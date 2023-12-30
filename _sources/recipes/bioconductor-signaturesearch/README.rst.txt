:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearch'
.. highlight: bash

bioconductor-signaturesearch
============================

.. conda:recipe:: bioconductor-signaturesearch
   :replaces_section_title:
   :noindex:

   Environment for Gene Expression Searching Combined with Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/signatureSearch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearch/meta.yaml>`_

   This package implements algorithms and data structures for performing gene expression signature \(GES\) searches\, and subsequently interpreting the results functionally with specialized enrichment methods.


.. conda:package:: bioconductor-signaturesearch

   |downloads_bioconductor-signaturesearch| |docker_bioconductor-signaturesearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.3-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-dose: ``>=3.28.1,<3.29.0a0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0a0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0a0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-reactome.db: ``>=1.86.0,<1.87.0``
   :depends bioconductor-reactome.db: ``>=1.86.2,<1.87.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-signaturesearch

   and update with::

      mamba update bioconductor-signaturesearch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-signaturesearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signaturesearch:<tag>

   (see `bioconductor-signaturesearch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signaturesearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signaturesearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signaturesearch
   :alt:   (downloads)
.. |docker_bioconductor-signaturesearch| image:: https://quay.io/repository/biocontainers/bioconductor-signaturesearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signaturesearch
.. _`bioconductor-signaturesearch/tags`: https://quay.io/repository/biocontainers/bioconductor-signaturesearch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signaturesearch";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearch/README.html