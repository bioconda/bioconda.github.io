.. _`bioconductor-mvgst`:

bioconductor-mvgst
==================

|downloads|

mvGST provides platform\-independent tools to identify GO terms \(gene sets\) that are differentially active \(up or down\) in multiple contrasts of interest.  Given a matrix of one\-sided p\-values \(rows for genes\, columns for contrasts\)\, mvGST uses meta\-analytic methods to combine p\-values for all genes annotated to each gene set\, and then classify each gene set as being significantly more active \(1\)\, less active \(\-1\)\, or not significantly differentially active \(0\) in each contrast of interest.  With multiple contrasts of interest\, each gene set is assigned to a profile \(across contrasts\) of differential activity.  Tools are also provided for visualizing \(in a GO graph\) the gene sets classified to a given profile.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/mvGST.html
Versions      1.12.0, 1.10.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-mvgst/meta.yaml



Links         biotools: :biotools:`mvgst`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mvgst

and update with::

   conda update bioconductor-mvgst



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mvgst.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mvgst/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mvgst/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mvgst/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mvgst
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mvgst/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mvgst

