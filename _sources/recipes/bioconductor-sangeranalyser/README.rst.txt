:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sangeranalyser'
.. highlight: bash

bioconductor-sangeranalyser
===========================

.. conda:recipe:: bioconductor-sangeranalyser
   :replaces_section_title:
   :noindex:

   sangeranalyseR\: a suite of functions for the analysis of Sanger sequence data in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sangeranalyseR.html
   :license: GPL-2
   :recipe: /`bioconductor-sangeranalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser/meta.yaml>`_

   This package builds on sangerseqR to allow users to create contigs from collections of Sanger sequencing reads. It provides a wide range of options for a number of commonly\-performed actions including read trimming\, detecting secondary peaks\, and detecting indels using a reference sequence. All parameters can be adjusted interactively either in R or in the associated Shiny applications. There is extensive online documentation\, and the package can outputs detailed HTML reports\, including chromatograms.


.. conda:package:: bioconductor-sangeranalyser

   |downloads_bioconductor-sangeranalyser| |docker_bioconductor-sangeranalyser|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-decipher: ``>=2.28.0,<2.29.0``
   :depends bioconductor-sangerseqr: ``>=1.36.0,<1.37.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-excelr: 
   :depends r-ggdendro: 
   :depends r-gridextra: 
   :depends r-knitr: ``>=1.33``
   :depends r-logger: 
   :depends r-openxlsx: 
   :depends r-phangorn: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: ``>=2.9``
   :depends r-seqinr: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
   :depends r-zeallot: 
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

      mamba install bioconductor-sangeranalyser

   and update with::

      mamba update bioconductor-sangeranalyser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sangeranalyser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sangeranalyser:<tag>

   (see `bioconductor-sangeranalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sangeranalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sangeranalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sangeranalyser
   :alt:   (downloads)
.. |docker_bioconductor-sangeranalyser| image:: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser
.. _`bioconductor-sangeranalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sangeranalyser";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html