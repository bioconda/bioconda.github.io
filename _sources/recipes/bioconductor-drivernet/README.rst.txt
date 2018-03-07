.. _`bioconductor-drivernet`:

bioconductor-drivernet
======================

|downloads|

DriverNet is a package to predict functional important driver genes in cancer by integrating genome data \(mutation and copy number variation data\) and transcriptome data \(gene expression data\). The different kinds of data are combined by an influence graph\, which is a gene\-gene interaction network deduced from pathway data. A greedy algorithm is used to find the possible driver genes\, which may mutated in a larger number of patients and these mutations will push the gene expression values of the connected genes to some extreme values.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/DriverNet.html
Versions      1.18.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drivernet



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-drivernet

and update with::

   conda update bioconductor-drivernet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-drivernet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-drivernet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-drivernet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-drivernet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-drivernet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-drivernet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-drivernet

