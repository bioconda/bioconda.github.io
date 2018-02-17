.. _`bioconductor-missmethyl`:

bioconductor-missmethyl
=======================

|downloads|

Normalisation and testing for differential variability and differential methylation for data from Illumina's Infinium HumanMethylation450 array. The normalisation procedure is subset-quantile within-array normalisation (SWAN), which allows Infinium I and II type probes on a single array to be normalised together. The test for differential variability is based on an empirical Bayes version of Levene's test. Differential methylation testing is performed using RUV, which can adjust for systematic errors of unknown origin in high-dimensional data by using negative control probes. Gene ontology analysis is performed by taking into account the number of probes per gene on the array.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/missMethyl.html
Versions 1.12.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-missmethyl
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-missmethyl

and update with::

   conda update bioconductor-missmethyl



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-missmethyl.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-missmethyl/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-missmethyl/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-missmethyl/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-missmethyl
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-missmethyl/status
                :target: https://quay.io/repository/biocontainers/bioconductor-missmethyl


