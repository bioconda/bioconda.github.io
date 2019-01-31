.. _`bioconductor-timescape`:

bioconductor-timescape
======================

|downloads|

TimeScape is an automated tool for navigating temporal clonal evolution data. The key attributes of this implementation involve the enumeration of clones\, their evolutionary relationships and their shifting dynamics over time. TimeScape requires two inputs\: \(i\) the clonal phylogeny and \(ii\) the clonal prevalences. Optionally\, TimeScape accepts a data table of targeted mutations observed in each clone and their allele prevalences over time. The output is the TimeScape plot showing clonal prevalence vertically\, time horizontally\, and the plot height optionally encoding tumour volume during tumour\-shrinking events. At each sampling time point \(denoted by a faint white line\)\, the height of each clone accurately reflects its proportionate prevalence. These prevalences form the anchors for bezier curves that visually represent the dynamic transitions between time points.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/timescape.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-timescape/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-timescape

and update with::

   conda update bioconductor-timescape



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-timescape.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-timescape/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-timescape/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-timescape/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-timescape
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-timescape/status
                :target: https://quay.io/repository/biocontainers/bioconductor-timescape

