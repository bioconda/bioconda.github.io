:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsqcgui'
.. highlight: bash

bioconductor-msstatsqcgui
=========================

.. conda:recipe:: bioconductor-msstatsqcgui
   :replaces_section_title:

   MSstatsQCgui is a Shiny app which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MSstatsQCgui.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqcgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui/meta.yaml>`_

   


.. conda:package:: bioconductor-msstatsqcgui

   |downloads_bioconductor-msstatsqcgui| |docker_bioconductor-msstatsqcgui|

   :versions: 1.2.1-0
   
   :depends bioconductor-msstatsqc: >=2.0.0,<2.1.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggextra: 
   :depends r-gridextra: 
   :depends r-plotly: 
   :depends r-recordlinkage: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsqcgui

   and update with::

      conda update bioconductor-msstatsqcgui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsqcgui:<tag>

   (see `bioconductor-msstatsqcgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsqcgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqcgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsqcgui
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqcgui| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui
.. _`bioconductor-msstatsqcgui/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html