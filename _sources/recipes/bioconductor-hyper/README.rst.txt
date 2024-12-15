:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hyper'
.. highlight: bash

bioconductor-hyper
==================

.. conda:recipe:: bioconductor-hyper
   :replaces_section_title:
   :noindex:

   An R Package For Geneset Enrichment Workflows

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hypeR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyper/meta.yaml>`_

   An R Package for Geneset Enrichment Workflows.


.. conda:package:: bioconductor-hyper

   |downloads_bioconductor-hyper| |docker_bioconductor-hyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-htmltools: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-kableextra: 
   :depends r-magrittr: 
   :depends r-msigdbr: 
   :depends r-openxlsx: 
   :depends r-purrr: 
   :depends r-r6: 
   :depends r-reactable: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-stringr: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-hyper

   and update with::

      mamba update bioconductor-hyper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hyper:<tag>

   (see `bioconductor-hyper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hyper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hyper
   :alt:   (downloads)
.. |docker_bioconductor-hyper| image:: https://quay.io/repository/biocontainers/bioconductor-hyper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hyper
.. _`bioconductor-hyper/tags`: https://quay.io/repository/biocontainers/bioconductor-hyper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hyper";
        var versions = ["2.4.0","2.0.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hyper/README.html