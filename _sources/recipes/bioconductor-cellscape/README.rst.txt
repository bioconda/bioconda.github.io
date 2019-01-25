.. _`bioconductor-cellscape`:

bioconductor-cellscape
======================

|downloads|

CellScape facilitates interactive browsing of single cell clonal evolution datasets. The tool requires two main inputs\: \(i\) the genomic content of each single cell in the form of either copy number segments or targeted mutation values\, and \(ii\) a single cell phylogeny. Phylogenetic formats can vary from dendrogram\-like phylogenies with leaf nodes to evolutionary model\-derived phylogenies with observed or latent internal nodes. The CellScape phylogeny is flexibly input as a table of source\-target edges to support arbitrary representations\, where each node may or may not have associated genomic data. The output of CellScape is an interactive interface displaying a single cell phylogeny and a cell\-by\-locus genomic heatmap representing the mutation status in each cell for each locus.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/cellscape.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-cellscape/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cellscape

and update with::

   conda update bioconductor-cellscape



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cellscape.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cellscape/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cellscape/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cellscape/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cellscape
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cellscape/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cellscape

