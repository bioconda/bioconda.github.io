:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lace'
.. highlight: bash

bioconductor-lace
=================

.. conda:recipe:: bioconductor-lace
   :replaces_section_title:
   :noindex:

   Longitudinal Analysis of Cancer Evolution \(LACE\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/LACE.html
   :license: file LICENSE
   :recipe: /`bioconductor-lace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lace/meta.yaml>`_

   LACE is an algorithmic framework that processes single\-cell somatic mutation profiles from cancer samples collected at different time points and in distinct experimental settings\, to produce longitudinal models of cancer evolution. The approach solves a Boolean Matrix Factorization problem with phylogenetic constraints\, by maximizing a weighed likelihood function computed on multiple time points.


.. conda:package:: bioconductor-lace

   |downloads_bioconductor-lace| |docker_bioconductor-lace|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bsplus: 
   :depends r-callr: 
   :depends r-configr: 
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-data.tree: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-forcats: 
   :depends r-foreach: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-logr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-rfast: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinyvalidate: 
   :depends r-sortable: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-svglite: 
   :depends r-tidyr: 
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

      mamba install bioconductor-lace

   and update with::

      mamba update bioconductor-lace

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lace:<tag>

   (see `bioconductor-lace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lace
   :alt:   (downloads)
.. |docker_bioconductor-lace| image:: https://quay.io/repository/biocontainers/bioconductor-lace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lace
.. _`bioconductor-lace/tags`: https://quay.io/repository/biocontainers/bioconductor-lace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lace";
        var versions = ["2.4.0","2.2.0","1.6.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lace/README.html