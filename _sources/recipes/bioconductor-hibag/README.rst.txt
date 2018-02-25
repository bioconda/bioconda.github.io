.. _`bioconductor-hibag`:

bioconductor-hibag
==================

|downloads|

It is a software package for imputing HLA types using SNP data\, and relies on a training set of HLA and SNP genotypes\. HIBAG can be used by researchers with published parameter estimates instead of requiring access to large training sample datasets\. It combines the concepts of attribute bagging\, an ensemble classifier method\, with haplotype inference for SNPs and HLA types\. Attribute bagging is a technique which improves the accuracy and stability of classifier ensembles using bootstrap aggregating and random variable selection\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/HIBAG.html
Versions 1.14.0
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hibag

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hibag

and update with::

   conda update bioconductor-hibag



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hibag.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hibag/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hibag/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hibag/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hibag
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hibag/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hibag

