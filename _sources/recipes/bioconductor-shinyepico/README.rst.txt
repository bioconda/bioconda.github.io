:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinyepico'
.. highlight: bash

bioconductor-shinyepico
=======================

.. conda:recipe:: bioconductor-shinyepico
   :replaces_section_title:
   :noindex:

   ShinyÉPICo

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/shinyepico.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-shinyepico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinyepico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinyepico/meta.yaml>`_

   ShinyÉPICo is a graphical pipeline to analyze Illumina DNA methylation arrays \(450k or EPIC\). It allows to calculate differentially methylated positions and differentially methylated regions in a user\-friendly interface. Moreover\, it includes several options to export the results and obtain files to perform downstream analysis.


.. conda:package:: bioconductor-shinyepico

   |downloads_bioconductor-shinyepico| |docker_bioconductor-shinyepico|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.13.0``
   :depends r-doparallel: ``>=1.0.0``
   :depends r-dplyr: ``>=1.0.9``
   :depends r-dt: ``>=0.15.0``
   :depends r-foreach: ``>=1.5.0``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gplots: ``>=3.0.0``
   :depends r-heatmaply: ``>=1.1.0``
   :depends r-plotly: ``>=4.9.2``
   :depends r-reshape2: ``>=1.4.0``
   :depends r-rlang: ``>=1.0.2``
   :depends r-rmarkdown: ``>=2.3.0``
   :depends r-shiny: ``>=1.5.0``
   :depends r-shinycssloaders: ``>=0.3.0``
   :depends r-shinyjs: ``>=1.1.0``
   :depends r-shinythemes: ``>=1.1.0``
   :depends r-shinywidgets: ``>=0.5.0``
   :depends r-statmod: ``>=1.4.0``
   :depends r-tidyr: ``>=1.2.0``
   :depends r-zip: ``>=2.1.0``
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

      mamba install bioconductor-shinyepico

   and update with::

      mamba update bioconductor-shinyepico

  To create a new environment, run::

      mamba create --name myenvname bioconductor-shinyepico

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinyepico:<tag>

   (see `bioconductor-shinyepico/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinyepico| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinyepico.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shinyepico
   :alt:   (downloads)
.. |docker_bioconductor-shinyepico| image:: https://quay.io/repository/biocontainers/bioconductor-shinyepico/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinyepico
.. _`bioconductor-shinyepico/tags`: https://quay.io/repository/biocontainers/bioconductor-shinyepico?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-shinyepico";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinyepico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinyepico/README.html