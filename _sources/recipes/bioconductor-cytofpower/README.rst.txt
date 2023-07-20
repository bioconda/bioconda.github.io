:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytofpower'
.. highlight: bash

bioconductor-cytofpower
=======================

.. conda:recipe:: bioconductor-cytofpower
   :replaces_section_title:
   :noindex:

   Power analysis for CyTOF experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CyTOFpower.html
   :license: LGPL-3
   :recipe: /`bioconductor-cytofpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytofpower/meta.yaml>`_

   This package is a tool to predict the power of CyTOF experiments in the context of differential state analyses. The package provides a shiny app with two options to predict the power of an experiment\: i. generation of in\-sicilico CyTOF data\, using users input ii. browsing in a grid of parameters for which the power was already precomputed.


.. conda:package:: bioconductor-cytofpower

   |downloads_bioconductor-cytofpower| |docker_bioconductor-cytofpower|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cytoglmm: ``>=1.8.0,<1.9.0``
   :depends bioconductor-diffcyt: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytofpower

   and update with::

      conda update bioconductor-cytofpower

   or use the docker container::

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
        var versions = ["1.6.0","1.4.0","1.0.0"];
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