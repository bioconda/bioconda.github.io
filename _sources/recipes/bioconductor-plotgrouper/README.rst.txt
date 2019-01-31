.. _`bioconductor-plotgrouper`:

bioconductor-plotgrouper
========================

|downloads|

A shiny app\-based GUI wrapper for ggplot with built\-in statistical analysis. Import data from file and use dropdown menus and checkboxes to specify the plotting variables\, graph type\, and look of your plots. Once created\, plots can be saved independently or stored in a report that can be saved as a pdf. If new data are added to the file\, the report can be refreshed to include new data. Statistical tests can be selected and added to the graphs. Analysis of flow cytometry data is especially integrated with plotGrouper. Count data can be transformed to return the absolute number of cells in a sample \(this feature requires inclusion of the number of beads per sample and information about any dilution performed\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/plotGrouper.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-plotgrouper/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-plotgrouper

and update with::

   conda update bioconductor-plotgrouper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-plotgrouper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-plotgrouper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-plotgrouper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-plotgrouper
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-plotgrouper/status
                :target: https://quay.io/repository/biocontainers/bioconductor-plotgrouper

