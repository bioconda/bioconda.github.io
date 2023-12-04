:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compran'
.. highlight: bash

bioconductor-compran
====================

.. conda:recipe:: bioconductor-compran
   :replaces_section_title:
   :noindex:

   Complexome Profiling Analysis package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ComPrAn.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-compran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compran/meta.yaml>`_

   This package is for analysis of SILAC labeled complexome profiling data. It uses peptide table in tab\-delimited format as an input and produces ready\-to\-use tables and plots.


.. conda:package:: bioconductor-compran

   |downloads_bioconductor-compran| |docker_bioconductor-compran|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rio: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-compran

   and update with::

      mamba update bioconductor-compran

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compran

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compran:<tag>

   (see `bioconductor-compran/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compran| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compran.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compran
   :alt:   (downloads)
.. |docker_bioconductor-compran| image:: https://quay.io/repository/biocontainers/bioconductor-compran/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compran
.. _`bioconductor-compran/tags`: https://quay.io/repository/biocontainers/bioconductor-compran?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compran";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compran/README.html