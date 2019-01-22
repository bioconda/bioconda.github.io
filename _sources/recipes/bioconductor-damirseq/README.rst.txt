.. _`bioconductor-damirseq`:

bioconductor-damirseq
=====================

|downloads|

The DaMiRseq package offers a tidy pipeline of data mining procedures to identify transcriptional biomarkers and exploit them for both binary and multi\-class classification purposes. The package accepts any kind of data presented as a table of raw counts and allows including both continous and factorial variables that occur with the experimental setting. A series of functions enable the user to clean up the data by filtering genomic features and samples\, to adjust data by identifying and removing the unwanted source of variation \(i.e. batches and confounding factors\) and to select the best predictors for modeling. Finally\, a \"stacking\" ensemble learning technique is applied to build a robust classification model. Every step includes a checkpoint that the user may exploit to assess the effects of data management by looking at diagnostic plots\, such as clustering and heatmaps\, RLE boxplots\, MDS or correlation plot.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DaMiRseq.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damirseq



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-damirseq

and update with::

   conda update bioconductor-damirseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-damirseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-damirseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-damirseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-damirseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-damirseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-damirseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-damirseq

