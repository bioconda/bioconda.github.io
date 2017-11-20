.. _`bioconductor-tspair`:

bioconductor-tspair
===================

|downloads|

These functions calculate the pair of genes that show the maximum difference in ranking between two user specified groups. This "top scoring pair" maximizes the average of sensitivity and specificity over all rank based classifiers using a pair of genes in the data set. The advantage of classifying samples based on only the relative rank of a pair of genes is (a) the classifiers are much simpler and often more interpretable than more complicated classification schemes and (b) if arrays can be classified using only a pair of genes, PCR based tests could be used for classification of samples. See the references for the tspcalc() function for references regarding TSP classifiers.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/tspair.html
Versions 1.34.0, 1.36.0
License  GPL-2
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tspair
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-tspair

and update with::

   conda update bioconductor-tspair



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-tspair.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-tspair/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-tspair/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-tspair/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-tspair
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-tspair/status
                :target: https://quay.io/repository/biocontainers/bioconductor-tspair


