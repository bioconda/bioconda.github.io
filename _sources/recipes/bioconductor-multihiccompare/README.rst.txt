.. _`bioconductor-multihiccompare`:

bioconductor-multihiccompare
============================

|downloads|

multiHiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. This extension of the original HiCcompare package now allows for Hi\-C experiments with more than 2 groups and multiple samples per group. multiHiCcompare operates on processed Hi\-C data in the form of sparse upper triangular matrices. It accepts four column \(chromosome\, region1\, region2\, IF\) tab\-separated text files storing chromatin interaction matrices. multiHiCcompare provides cyclic loess and fast loess \(fastlo\) methods adapted to jointly normalizing Hi\-C data. Additionally\, it provides a general linear model \(GLM\) framework adapting the edgeR package to detect differences in Hi\-C data in a distance dependent manner.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/multiHiCcompare.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multihiccompare



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-multihiccompare

and update with::

   conda update bioconductor-multihiccompare



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-multihiccompare.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-multihiccompare/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-multihiccompare/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-multihiccompare
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-multihiccompare/status
                :target: https://quay.io/repository/biocontainers/bioconductor-multihiccompare

