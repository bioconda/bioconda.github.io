:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-levi'
.. highlight: bash

bioconductor-levi
=================

.. conda:recipe:: bioconductor-levi
   :replaces_section_title:
   :noindex:

   Landscape Expression Visualization Interface

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/levi.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-levi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-levi/meta.yaml>`_

   The tool integrates data from biological networks with transcriptomes\, displaying a heatmap with surface curves to evidence the altered regions.


.. conda:package:: bioconductor-levi

   |downloads_bioconductor-levi| |docker_bioconductor-levi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorspace: ``>=1.3-2``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-dt: ``>=0.4``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-httr: ``>=1.3.1``
   :depends r-igraph: ``>=1.2.1``
   :depends r-knitr: 
   :depends r-rcolorbrewer: ``>=1.1-2``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rmarkdown: 
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinydashboard: ``>=0.7.0``
   :depends r-shinyjs: ``>=1.0``
   :depends r-testthat: 
   :depends r-xml2: ``>=1.2.0``
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

      mamba install bioconductor-levi

   and update with::

      mamba update bioconductor-levi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-levi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-levi:<tag>

   (see `bioconductor-levi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-levi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-levi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-levi
   :alt:   (downloads)
.. |docker_bioconductor-levi| image:: https://quay.io/repository/biocontainers/bioconductor-levi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-levi
.. _`bioconductor-levi/tags`: https://quay.io/repository/biocontainers/bioconductor-levi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-levi";
        var versions = ["1.24.0","1.20.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-levi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-levi/README.html