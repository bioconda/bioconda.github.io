.. title:: Package Recipe 'bioconductor-msstatsqcgui'
.. highlight: bash


bioconductor-msstatsqcgui
=========================

.. conda:recipe:: bioconductor-msstatsqcgui
   :replaces_section_title:

   MSstatsQCgui is a Shiny app which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSstatsQCgui.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqcgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui/meta.yaml>`_

   


.. conda:package:: bioconductor-msstatsqcgui

   |downloads_bioconductor-msstatsqcgui| |docker_bioconductor-msstatsqcgui|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-msstatsqc` >=2.0.0,<2.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggextra`  :conda:package:`r-gridextra`  :conda:package:`r-plotly`  :conda:package:`r-recordlinkage`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-msstatsqcgui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsqcgui

   and update with::

      conda update bioconductor-msstatsqcgui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msstatsqcgui


.. |required_by_bioconductor-msstatsqcgui| conda:required_by:: bioconductor-msstatsqcgui
.. |downloads_bioconductor-msstatsqcgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqcgui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqcgui| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html

