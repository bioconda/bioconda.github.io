.. _`bioconductor-qvalue`:

bioconductor-qvalue
===================

|downloads|

This package takes a list of p-values resulting from the simultaneous testing of many hypotheses and estimates their q-values and local FDR values. The q-value of a test measures the proportion of false positives incurred (called the false discovery rate) when that particular test is called significant. The local FDR measures the posterior probability the null hypothesis is true given the test's p-value. Various plots are automatically generated, allowing one to make sensible significance cut-offs. Several mathematical results have recently been shown on the conservative accuracy of the estimated q-values from this software. The software can be applied to problems in genomics, brain imaging, astrophysics, and data mining.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/qvalue.html
Versions 2.2.2, 2.4.2
License  LGPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qvalue
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-qvalue

and update with::

   conda update bioconductor-qvalue



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-qvalue.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-qvalue/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-qvalue/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-qvalue/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-qvalue
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-qvalue/status
                :target: https://quay.io/repository/biocontainers/bioconductor-qvalue


