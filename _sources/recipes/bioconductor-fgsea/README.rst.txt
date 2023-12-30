:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgsea'
.. highlight: bash

bioconductor-fgsea
==================

.. conda:recipe:: bioconductor-fgsea
   :replaces_section_title:
   :noindex:

   Fast Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fgsea.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-fgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgsea/meta.yaml>`_
   :links: biotools: :biotools:`fgsea`, doi: :doi:`10.1101/060012`

   The package implements an algorithm for fast gene set enrichment analysis. Using the fast algorithm allows to make more permutations and get more fine grained p\-values\, which allows to use accurate stantard approaches to multiple hypothesis correction.


.. conda:package:: bioconductor-fgsea

   |downloads_bioconductor-fgsea| |docker_bioconductor-fgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-fastmatch: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-scales: 
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

      mamba install bioconductor-fgsea

   and update with::

      mamba update bioconductor-fgsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fgsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgsea:<tag>

   (see `bioconductor-fgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgsea
   :alt:   (downloads)
.. |docker_bioconductor-fgsea| image:: https://quay.io/repository/biocontainers/bioconductor-fgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgsea
.. _`bioconductor-fgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-fgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fgsea";
        var versions = ["1.28.0","1.26.0","1.24.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgsea/README.html