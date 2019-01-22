.. _`bioconductor-summarizedbenchmark`:

bioconductor-summarizedbenchmark
================================

|downloads|

This package defines the BenchDesign and SummarizedBenchmark classes for building\, executing\, and evaluating benchmark experiments of computational methods. The SummarizedBenchmark class extends the RangedSummarizedExperiment object\, and is designed to provide infrastructure to store and compare the results of applying different methods to a shared data set. This class provides an integrated interface to store metadata such as method parameters and software versions as well as ground truths \(when these are available\) and evaluation metrics.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SummarizedBenchmark.html
Versions      
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-summarizedbenchmark

and update with::

   conda update bioconductor-summarizedbenchmark



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-summarizedbenchmark/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-summarizedbenchmark
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark/status
                :target: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark

