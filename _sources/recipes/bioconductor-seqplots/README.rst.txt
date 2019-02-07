.. title:: Package Recipe 'bioconductor-seqplots'
.. highlight: bash


bioconductor-seqplots
=====================

.. conda:recipe:: bioconductor-seqplots
   :replaces_section_title:

   SeqPlots is a tool for plotting next generation sequencing \(NGS\) based experiments\' signal tracks\, e.g. reads coverage from ChIP\-seq\, RNA\-seq and DNA accessibility assays like DNase\-seq and MNase\-seq\, over user specified genomic features\, e.g. promoters\, gene bodies\, etc. It can also calculate sequence motif density profiles from reference genome. The data are visualized as average signal profile plot\, with error estimates \(standard error and 95\% confidence interval\) shown as fields\, or as series of heatmaps that can be sorted and clustered using hierarchical clustering\, k\-means algorithm and self organising maps. Plots can be prepared using R programming language or web browser based graphical user interface \(GUI\) implemented using Shiny framework. The dual\-purpose implementation allows running the software locally on desktop or deploying it on server. SeqPlots is useful for both for exploratory data analyses and preparing replicable\, publication quality plots. Other features of the software include collaboration and data sharing capabilities\, as well as ability to store pre\-calculated result matrixes\, that combine many sequencing experiments and in\-silico generated tracks with multiple different features. These binaries can be further used to generate new combination plots on fly\, run automated batch operations or share with colleagues\, who can adjust their plotting parameters without loading actual tracks and recalculating numeric values. SeqPlots relays on Bioconductor packages\, mainly on rtracklayer for data input and BSgenome packages for reference genome sequence and annotations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqplots.html
   :license: GPL-3
   :recipe: /`bioconductor-seqplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqplots/meta.yaml>`_

   


.. conda:package:: bioconductor-seqplots

   |downloads_bioconductor-seqplots| |docker_bioconductor-seqplots|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-class`  :conda:package:`r-dbi`  :conda:package:`r-digest`  :conda:package:`r-dt` >=0.1.0 :conda:package:`r-fields`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-jsonlite`  :conda:package:`r-kohonen`  :conda:package:`r-plotrix`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rsqlite`  :conda:package:`r-shiny` >=0.13.0 

   :required~by: |required_by_bioconductor-seqplots|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqplots

   and update with::

      conda update bioconductor-seqplots

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqplots


.. |required_by_bioconductor-seqplots| conda:required_by:: bioconductor-seqplots
.. |downloads_bioconductor-seqplots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqplots.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqplots| image:: https://quay.io/repository/biocontainers/bioconductor-seqplots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqplots







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqplots/README.html

