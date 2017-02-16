.. _`bioconductor-cn.mops`:

bioconductor-cn.mops
====================

|downloads|

cn.mops (Copy Number estimation by a Mixture Of PoissonS) is a data processing pipeline for copy number variations and aberrations (CNVs and CNAs) from next generation sequencing (NGS) data. The package supplies functions to convert BAM files into read count matrices or genomic ranges objects, which are the input objects for cn.mops. cn.mops models the depths of coverage across samples at each genomic position. Therefore, it does not suffer from read count biases along chromosomes. Using a Bayesian approach, cn.mops decomposes read variations across samples into integer copy numbers and noise by its mixture components and Poisson distributions, respectively. cn.mops guarantees a low FDR because wrong detections are indicated by high noise and filtered out. cn.mops is very fast and written in C++.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/cn.mops.html
Versions 1.16.2, 1.18.0
License  LGPL (>= 2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cn.mops

and update with::

   conda update bioconductor-cn.mops



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cn.mops.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cn.mops/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cn.mops
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cn.mops/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cn.mops


