:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-umianalyzer'
.. highlight: bash

r-umianalyzer
=============

.. conda:recipe:: r-umianalyzer
   :replaces_section_title:
   :noindex:

   Tools for analyzing sequencing data containing unique molecular identifiers generated by \'UMIErrorCorrect\' \(\<https\:\/\/github.com\/stahlberggroup\/umierrorcorrect\>\).

   :homepage: https://github.com/sfilges/umiAnalyzer
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-umianalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umianalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umianalyzer/meta.yaml>`_

   


.. conda:package:: r-umianalyzer

   |downloads_r-umianalyzer| |docker_r-umianalyzer|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-rsamtools: ``>=1.32.3``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: ``>=0.7.5``
   :depends r-dt: ``>=0.19``
   :depends r-forcats: ``>=0.5.0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-magrittr: ``>=1.5``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-plotly: ``>=4.9.2.1``
   :depends r-readr: ``>=1.1.1``
   :depends r-scales: ``>=1.1.0``
   :depends r-shiny: ``>=1.7.1``
   :depends r-shinydashboard: ``>=0.7.2``
   :depends r-shinyfiles: ``>=0.9.0``
   :depends r-shinywidgets: ``>=0.6.2``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: ``>=0.8.1``
   :depends r-viridis: ``>=0.5.1``
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

      mamba install r-umianalyzer

   and update with::

      mamba update r-umianalyzer

  To create a new environment, run::

      mamba create --name myenvname r-umianalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-umianalyzer:<tag>

   (see `r-umianalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-umianalyzer| image:: https://img.shields.io/conda/dn/bioconda/r-umianalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-umianalyzer
   :alt:   (downloads)
.. |docker_r-umianalyzer| image:: https://quay.io/repository/biocontainers/r-umianalyzer/status
   :target: https://quay.io/repository/biocontainers/r-umianalyzer
.. _`r-umianalyzer/tags`: https://quay.io/repository/biocontainers/r-umianalyzer?tab=tags


.. raw:: html

    <script>
        var package = "r-umianalyzer";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-umianalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-umianalyzer/README.html