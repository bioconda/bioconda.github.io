:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wpm'
.. highlight: bash

bioconductor-wpm
================

.. conda:recipe:: bioconductor-wpm
   :replaces_section_title:
   :noindex:

   Well Plate Maker

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/wpm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wpm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm/meta.yaml>`_

   The Well\-Plate Maker \(WPM\) is a shiny application deployed as an R package. Functions for a command\-line\/script use are also available. The WPM allows users to generate well plate maps to carry out their experiments while improving the handling of batch effects. In particular\, it helps controlling the \"plate effect\" thanks to its ability to randomize samples over multiple well plates. The algorithm for placing the samples is inspired by the backtracking algorithm\: the samples are placed at random while respecting specific spatial constraints.


.. conda:package:: bioconductor-wpm

   |downloads_bioconductor-wpm| |docker_bioconductor-wpm|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wpm

   and update with::

      conda update bioconductor-wpm

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0","1.0.0"];
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