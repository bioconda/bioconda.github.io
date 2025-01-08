:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shiny.gosling'
.. highlight: bash

bioconductor-shiny.gosling
==========================

.. conda:recipe:: bioconductor-shiny.gosling
   :replaces_section_title:
   :noindex:

   A Grammar\-based Toolkit for Scalable and Interactive Genomics Data Visualization for R and Shiny

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/shiny.gosling.html
   :license: LGPL-3
   :recipe: /`bioconductor-shiny.gosling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shiny.gosling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shiny.gosling/meta.yaml>`_

   A Grammar\-based Toolkit for Scalable and Interactive Genomics Data Visualization. http\:\/\/gosling\-lang.org\/. This R package is based on gosling.js. It uses R functions to create gosling plots that could be embedded onto R Shiny apps.


.. conda:package:: bioconductor-shiny.gosling

   |downloads_bioconductor-shiny.gosling| |docker_bioconductor-shiny.gosling|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-digest: 
   :depends r-fs: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-shiny.react: 
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

      mamba install bioconductor-shiny.gosling

   and update with::

      mamba update bioconductor-shiny.gosling

  To create a new environment, run::

      mamba create --name myenvname bioconductor-shiny.gosling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shiny.gosling:<tag>

   (see `bioconductor-shiny.gosling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shiny.gosling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shiny.gosling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shiny.gosling
   :alt:   (downloads)
.. |docker_bioconductor-shiny.gosling| image:: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling
.. _`bioconductor-shiny.gosling/tags`: https://quay.io/repository/biocontainers/bioconductor-shiny.gosling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-shiny.gosling";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shiny.gosling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shiny.gosling/README.html