:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tsar'
.. highlight: bash

bioconductor-tsar
=================

.. conda:recipe:: bioconductor-tsar
   :replaces_section_title:
   :noindex:

   Thermal Shift Analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TSAR.html
   :license: AGPL-3
   :recipe: /`bioconductor-tsar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tsar/meta.yaml>`_

   This package automates analysis workflow for Thermal Shift Analysis \(TSA\) data. Processing\, analyzing\, and visualizing data through both shiny applications and command lines. Package aims to simplify data analysis and offer front to end workflow\, from raw data to multiple trial analysis.


.. conda:package:: bioconductor-tsar

   |downloads_bioconductor-tsar| |docker_bioconductor-tsar|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggpubr: ``>=0.4.0``
   :depends r-jsonlite: ``>=1.8.7``
   :depends r-magrittr: ``>=2.0.3``
   :depends r-mgcv: ``>=1.8.38``
   :depends r-minpack.lm: ``>=1.2.3``
   :depends r-openxlsx: ``>=4.2.5.2``
   :depends r-plotly: ``>=4.10.2``
   :depends r-readxl: ``>=1.4.0``
   :depends r-rhandsontable: ``>=0.3.8``
   :depends r-shiny: ``>=1.7.4.1``
   :depends r-shinyjs: ``>=2.1.0``
   :depends r-shinywidgets: ``>=0.7.6``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tidyr: ``>=1.1.4``
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

      mamba install bioconductor-tsar

   and update with::

      mamba update bioconductor-tsar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tsar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tsar:<tag>

   (see `bioconductor-tsar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tsar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tsar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tsar
   :alt:   (downloads)
.. |docker_bioconductor-tsar| image:: https://quay.io/repository/biocontainers/bioconductor-tsar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tsar
.. _`bioconductor-tsar/tags`: https://quay.io/repository/biocontainers/bioconductor-tsar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tsar";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tsar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tsar/README.html