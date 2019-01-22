.. _`bioconductor-qubic`:

bioconductor-qubic
==================

|downloads|

The core function of this R package is to provide the implementation of the well\-cited and well\-reviewed QUBIC algorithm\, aiming to deliver an effective and efficient biclustering capability. This package also includes the following related functions\: \(i\) a qualitative representation of the input gene expression data\, through a well\-designed discretization way considering the underlying data property\, which can be directly used in other biclustering programs\; \(ii\) visualization of identified biclusters using heatmap in support of overall expression pattern analysis\; \(iii\) bicluster\-based co\-expression network elucidation and visualization\, where different correlation coefficient scores between a pair of genes are provided\; and \(iv\) a generalize output format of biclusters and corresponding network can be freely downloaded so that a user can easily do following comprehensive functional enrichment analysis \(e.g. DAVID\) and advanced network visualization \(e.g. Cytoscape\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/QUBIC.html
Versions      
License       CC BY-NC-ND 4.0 + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qubic



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-qubic

and update with::

   conda update bioconductor-qubic



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-qubic.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-qubic/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-qubic/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-qubic/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-qubic
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-qubic/status
                :target: https://quay.io/repository/biocontainers/bioconductor-qubic

