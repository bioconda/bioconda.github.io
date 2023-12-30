:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofpower'
.. highlight: bash

bioconductor-cytofpower
=======================

.. conda:recipe:: bioconductor-cytofpower
   :replaces_section_title:
   :noindex:

   Power analysis for CyTOF experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CyTOFpower.html
   :license: LGPL-3
   :recipe: /`bioconductor-cytofpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower/meta.yaml>`_

   This package is a tool to predict the power of CyTOF experiments in the context of differential state analyses. The package provides a shiny app with two options to predict the power of an experiment\: i. generation of in\-sicilico CyTOF data\, using users input ii. browsing in a grid of parameters for which the power was already precomputed.


.. conda:package:: bioconductor-cytofpower

   |downloads_bioconductor-cytofpower| |docker_bioconductor-cytofpower|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cytoglmm: ``>=1.10.0,<1.11.0``
   :depends bioconductor-diffcyt: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-shinyfeedback: 
   :depends r-shinyjs: 
   :depends r-shinymatrix: 
   :depends r-tibble: 
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

      mamba install bioconductor-cytofpower

   and update with::

      mamba update bioconductor-cytofpower

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytofpower

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytofpower:<tag>

   (see `bioconductor-cytofpower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytofpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytofpower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytofpower
   :alt:   (downloads)
.. |docker_bioconductor-cytofpower| image:: https://quay.io/repository/biocontainers/bioconductor-cytofpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytofpower
.. _`bioconductor-cytofpower/tags`: https://quay.io/repository/biocontainers/bioconductor-cytofpower?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytofpower";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytofpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytofpower/README.html