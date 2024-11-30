:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intercellar'
.. highlight: bash

bioconductor-intercellar
========================

.. conda:recipe:: bioconductor-intercellar
   :replaces_section_title:
   :noindex:

   InterCellar\: an R\-Shiny app for interactive analysis and exploration of cell\-cell communication in single\-cell transcriptomics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/InterCellar.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-intercellar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intercellar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intercellar/meta.yaml>`_

   InterCellar is implemented as an R\/Bioconductor Package containing a Shiny app that allows users to interactively analyze cell\-cell communication from scRNA\-seq data. Starting from precomputed ligand\-receptor interactions\, InterCellar provides filtering options\, annotations and multiple visualizations to explore clusters\, genes and functions. Finally\, based on functional annotation from Gene Ontology and pathway databases\, InterCellar implements data\-driven analyses to investigate cell\-cell communication in one or multiple conditions.


.. conda:package:: bioconductor-intercellar

   |downloads_bioconductor-intercellar| |docker_bioconductor-intercellar|

   :versions:
      
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-colorspace: 
   :depends r-colourpicker: 
   :depends r-config: 
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-factoextra: 
   :depends r-fmsb: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-readxl: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyalert: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyfeedback: 
   :depends r-shinyfiles: 
   :depends r-signal: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-umap: 
   :depends r-visnetwork: 
   :depends r-wordcloud2: 
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

      mamba install bioconductor-intercellar

   and update with::

      mamba update bioconductor-intercellar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-intercellar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intercellar:<tag>

   (see `bioconductor-intercellar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intercellar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intercellar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intercellar
   :alt:   (downloads)
.. |docker_bioconductor-intercellar| image:: https://quay.io/repository/biocontainers/bioconductor-intercellar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intercellar
.. _`bioconductor-intercellar/tags`: https://quay.io/repository/biocontainers/bioconductor-intercellar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intercellar";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intercellar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intercellar/README.html