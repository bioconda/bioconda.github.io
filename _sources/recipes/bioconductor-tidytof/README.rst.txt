:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidytof'
.. highlight: bash

bioconductor-tidytof
====================

.. conda:recipe:: bioconductor-tidytof
   :replaces_section_title:
   :noindex:

   Analyze High\-dimensional Cytometry Data Using Tidy Data Principles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidytof.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tidytof <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidytof>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidytof/meta.yaml>`_

   This package implements an interactive\, scientific analysis pipeline for high\-dimensional cytometry data built using tidy data principles. It is specifically designed to play well with both the tidyverse and Bioconductor software ecosystems\, with functionality for reading\/writing data files\, data cleaning\, preprocessing\, clustering\, visualization\, modeling\, and other quality\-of\-life functions. tidytof implements a \"grammar\" of high\-dimensional cytometry data analysis.


.. conda:package:: bioconductor-tidytof

   |downloads_bioconductor-tidytof| |docker_bioconductor-tidytof|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glmnet: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rcpphnsw: 
   :depends r-readr: 
   :depends r-recipes: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-yardstick: 
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

      mamba install bioconductor-tidytof

   and update with::

      mamba update bioconductor-tidytof

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidytof

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidytof:<tag>

   (see `bioconductor-tidytof/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidytof| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidytof.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidytof
   :alt:   (downloads)
.. |docker_bioconductor-tidytof| image:: https://quay.io/repository/biocontainers/bioconductor-tidytof/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidytof
.. _`bioconductor-tidytof/tags`: https://quay.io/repository/biocontainers/bioconductor-tidytof?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidytof";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidytof/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidytof/README.html