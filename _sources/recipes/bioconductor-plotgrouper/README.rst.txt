:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgrouper'
.. highlight: bash

bioconductor-plotgrouper
========================

.. conda:recipe:: bioconductor-plotgrouper
   :replaces_section_title:

   A shiny app\-based GUI wrapper for ggplot with built\-in statistical analysis. Import data from file and use dropdown menus and checkboxes to specify the plotting variables\, graph type\, and look of your plots. Once created\, plots can be saved independently or stored in a report that can be saved as a pdf. If new data are added to the file\, the report can be refreshed to include new data. Statistical tests can be selected and added to the graphs. Analysis of flow cytometry data is especially integrated with plotGrouper. Count data can be transformed to return the absolute number of cells in a sample \(this feature requires inclusion of the number of beads per sample and information about any dilution performed\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/plotGrouper.html
   :license: GPL-3
   :recipe: /`bioconductor-plotgrouper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgrouper/meta.yaml>`_

   


.. conda:package:: bioconductor-plotgrouper

   |downloads_bioconductor-plotgrouper| |docker_bioconductor-plotgrouper|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plotgrouper

   and update with::

      conda update bioconductor-plotgrouper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plotgrouper:<tag>

   (see `bioconductor-plotgrouper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plotgrouper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgrouper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plotgrouper| image:: https://quay.io/repository/biocontainers/bioconductor-plotgrouper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgrouper
.. _`bioconductor-plotgrouper/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgrouper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html