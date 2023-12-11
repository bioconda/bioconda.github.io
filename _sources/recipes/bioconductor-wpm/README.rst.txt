:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wpm'
.. highlight: bash

bioconductor-wpm
================

.. conda:recipe:: bioconductor-wpm
   :replaces_section_title:
   :noindex:

   Well Plate Maker

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/wpm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wpm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm/meta.yaml>`_

   The Well\-Plate Maker \(WPM\) is a shiny application deployed as an R package. Functions for a command\-line\/script use are also available. The WPM allows users to generate well plate maps to carry out their experiments while improving the handling of batch effects. In particular\, it helps controlling the \"plate effect\" thanks to its ability to randomize samples over multiple well plates. The algorithm for placing the samples is inspired by the backtracking algorithm\: the samples are placed at random while respecting specific spatial constraints.


.. conda:package:: bioconductor-wpm

   |downloads_bioconductor-wpm| |docker_bioconductor-wpm|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-config: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-logging: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-shinycustomloader: 
   :depends r-shinydashboard: 
   :depends r-shinywidgets: 
   :depends r-stringr: 
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

      mamba install bioconductor-wpm

   and update with::

      mamba update bioconductor-wpm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wpm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wpm:<tag>

   (see `bioconductor-wpm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wpm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wpm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wpm
   :alt:   (downloads)
.. |docker_bioconductor-wpm| image:: https://quay.io/repository/biocontainers/bioconductor-wpm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wpm
.. _`bioconductor-wpm/tags`: https://quay.io/repository/biocontainers/bioconductor-wpm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wpm";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wpm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wpm/README.html