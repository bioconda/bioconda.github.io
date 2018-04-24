.. _`bioconductor-biosvd`:

bioconductor-biosvd
===================

|downloads|

The biosvd package contains functions to reduce the input data set from the feature x assay space to the reduced diagonalized eigenfeature x eigenassay space\, with the eigenfeatures and eigenassays unique orthonormal superpositions of the features and assays\, respectively. Results of SVD applied to the data can subsequently be inspected based on generated graphs\, such as a heatmap of the eigenfeature x assay matrix and a bar plot with the eigenexpression fractions of all eigenfeatures. These graphs aid in deciding which eigenfeatures and eigenassays to filter out \(i.e.\, eigenfeatures representing steady state\, noise\, or experimental artifacts\; or when applied to the variance in the data\, eigenfeatures representing steady\-scale variance\). After possible removal of steady state expression\, steady\-scale variance\, noise and experimental artifacts\, and after re\-applying SVD to the normalized data\, a summary html report of the eigensystem is generated\, containing among others polar plots of the assays and features\, a table with the list of features sortable according to their coordinates\, radius and phase in the polar plot\, and a visualization of the data sorted according to the two selected eigenfeatures and eigenassays with colored feature\/assay annotation information when provided. This gives a global picture of the dynamics of expression\/intensity levels\, in which individual features and assays are classified in groups of similar regulation and function or similar cellular state and biological phenotype.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/biosvd.html
Versions      2.14.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosvd



Links         biotools: :biotools:`biosvd`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-biosvd

and update with::

   conda update bioconductor-biosvd



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-biosvd.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-biosvd/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-biosvd/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-biosvd/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-biosvd
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-biosvd/status
                :target: https://quay.io/repository/biocontainers/bioconductor-biosvd

