:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mimosa'
.. highlight: bash

bioconductor-mimosa
===================

.. conda:recipe:: bioconductor-mimosa
   :replaces_section_title:
   :noindex:

   Mixture Models for Single\-Cell Assays

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MIMOSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mimosa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mimosa/meta.yaml>`_

   Modeling count data using Dirichlet\-multinomial and beta\-binomial mixtures with applications to single\-cell assays.


.. conda:package:: bioconductor-mimosa

   |downloads_bioconductor-mimosa| |docker_bioconductor-mimosa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.37.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.37.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coda: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-formula: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-mcmcpack: 
   :depends r-modeest: 
   :depends r-plyr: 
   :depends r-pracma: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-testthat: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mimosa

   and update with::

      mamba update bioconductor-mimosa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mimosa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mimosa:<tag>

   (see `bioconductor-mimosa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mimosa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mimosa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mimosa
   :alt:   (downloads)
.. |docker_bioconductor-mimosa| image:: https://quay.io/repository/biocontainers/bioconductor-mimosa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mimosa
.. _`bioconductor-mimosa/tags`: https://quay.io/repository/biocontainers/bioconductor-mimosa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mimosa";
        var versions = ["1.37.0","1.36.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mimosa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mimosa/README.html