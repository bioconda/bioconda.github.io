.. _`bioconductor-aucell`:

bioconductor-aucell
===================

|downloads|

AUCell allows to identify cells with active gene sets \(e.g. signatures\, gene modules...\) in single\-cell RNA\-seq data. AUCell uses the \"Area Under the Curve\" \(AUC\) to calculate whether a critical subset of the input gene set is enriched within the expressed genes for each cell. The distribution of AUC scores across all the cells allows exploring the relative expression of the signature. Since the scoring method is ranking\-based\, AUCell is independent of the gene expression units and the normalization procedure. In addition\, since the cells are evaluated individually\, it can easily be applied to bigger datasets\, subsetting the expression matrix if needed.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/AUCell.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aucell



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-aucell

and update with::

   conda update bioconductor-aucell



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-aucell.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-aucell/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-aucell/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-aucell/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-aucell
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-aucell/status
                :target: https://quay.io/repository/biocontainers/bioconductor-aucell

