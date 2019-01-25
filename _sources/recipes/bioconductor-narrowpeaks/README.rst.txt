.. _`bioconductor-narrowpeaks`:

bioconductor-narrowpeaks
========================

|downloads|

The package applies a functional version of principal component analysis \(FPCA\) to\: \(1\) Postprocess data in wiggle track format\, commonly produced by generic ChIP\-seq peak callers\, by applying FPCA over a set of read\-enriched regions \(ChIP\-seq peaks\). This is done to study variability of the the peaks\, or to shorten their genomic locations accounting for a given proportion of variation among the enrichment\-score profiles. \(2\) Analyse differential variation between multiple ChIP\-seq samples with replicates. The function \'narrowpeaksDiff\' quantifies differences between the shapes\, and uses Hotelling\'s T2 tests on the functional principal component scores to identify significant differences across conditions. An application of the package for Arabidopsis datasets is described in Mateos\, Madrigal\, et al. \(2015\) Genome Biology\: 16\:31.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/NarrowPeaks.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-narrowpeaks/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-narrowpeaks

and update with::

   conda update bioconductor-narrowpeaks



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-narrowpeaks.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-narrowpeaks/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-narrowpeaks/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-narrowpeaks
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks/status
                :target: https://quay.io/repository/biocontainers/bioconductor-narrowpeaks

