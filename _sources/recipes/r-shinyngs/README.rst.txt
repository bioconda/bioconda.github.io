:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-shinyngs'
.. highlight: bash

r-shinyngs
==========

.. conda:recipe:: r-shinyngs
   :replaces_section_title:
   :noindex:

   Provides Shiny applications for various array and NGS applications. Currently very RNA\-seq centric\, with plans for expansion.

   :homepage: https://github.com/pinin4fjords/shinyngs
   :license: AGPL / AGPL-3.0
   :recipe: /`r-shinyngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shinyngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shinyngs/meta.yaml>`_

   


.. conda:package:: r-shinyngs

   |downloads_r-shinyngs| |docker_r-shinyngs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.8.8-0</code>,  <code>1.8.7-0</code>,  <code>1.8.6-0</code>,  <code>1.8.5-0</code>,  <code>1.8.4-0</code>,  <code>1.8.3-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-2``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gseabase: 
   :depends bioconductor-limma: 
   :depends bioconductor-summarizedexperiment: 
   :depends pandoc: ``<2.19``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-biocmanager: 
   :depends r-cluster: 
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-dendextend: ``>=0.18.0``
   :depends r-dplyr: 
   :depends r-dt: ``>=0.2``
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-markdown: 
   :depends r-optparse: 
   :depends r-pheatmap: 
   :depends r-plotly: ``>=4.3.4``
   :depends r-plyr: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-rsconnect: 
   :depends r-scales: ``>=0.2.5``
   :depends r-scatterplot3d: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-stringi: ``>=1.7.12``
   :depends r-yaml: 
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

      mamba install r-shinyngs

   and update with::

      mamba update r-shinyngs

  To create a new environment, run::

      mamba create --name myenvname r-shinyngs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-shinyngs:<tag>

   (see `r-shinyngs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-shinyngs| image:: https://img.shields.io/conda/dn/bioconda/r-shinyngs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-shinyngs
   :alt:   (downloads)
.. |docker_r-shinyngs| image:: https://quay.io/repository/biocontainers/r-shinyngs/status
   :target: https://quay.io/repository/biocontainers/r-shinyngs
.. _`r-shinyngs/tags`: https://quay.io/repository/biocontainers/r-shinyngs?tab=tags


.. raw:: html

    <script>
        var package = "r-shinyngs";
        var versions = ["2.1.0","2.0.0","2.0.0","1.8.8","1.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shinyngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shinyngs/README.html