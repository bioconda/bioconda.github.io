.. _`bioconductor-seqplots`:

bioconductor-seqplots
=====================

|downloads|

SeqPlots is a tool for plotting next generation sequencing \(NGS\) based experiments\' signal tracks\, e.g. reads coverage from ChIP\-seq\, RNA\-seq and DNA accessibility assays like DNase\-seq and MNase\-seq\, over user specified genomic features\, e.g. promoters\, gene bodies\, etc. It can also calculate sequence motif density profiles from reference genome. The data are visualized as average signal profile plot\, with error estimates \(standard error and 95\% confidence interval\) shown as fields\, or as series of heatmaps that can be sorted and clustered using hierarchical clustering\, k\-means algorithm and self organising maps. Plots can be prepared using R programming language or web browser based graphical user interface \(GUI\) implemented using Shiny framework. The dual\-purpose implementation allows running the software locally on desktop or deploying it on server. SeqPlots is useful for both for exploratory data analyses and preparing replicable\, publication quality plots. Other features of the software include collaboration and data sharing capabilities\, as well as ability to store pre\-calculated result matrixes\, that combine many sequencing experiments and in\-silico generated tracks with multiple different features. These binaries can be further used to generate new combination plots on fly\, run automated batch operations or share with colleagues\, who can adjust their plotting parameters without loading actual tracks and recalculating numeric values. SeqPlots relays on Bioconductor packages\, mainly on rtracklayer for data input and BSgenome packages for reference genome sequence and annotations.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/seqplots.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-seqplots/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-seqplots

and update with::

   conda update bioconductor-seqplots



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-seqplots.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-seqplots/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-seqplots/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-seqplots/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-seqplots
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-seqplots/status
                :target: https://quay.io/repository/biocontainers/bioconductor-seqplots

