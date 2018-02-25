.. _`bioconductor-mergemaid`:

bioconductor-mergemaid
======================

|downloads|

The functions in this R extension are intended for cross\-study comparison of gene expression array data\. Required from the user is gene expression matrices\, their corresponding gene\-id vectors and other useful information\, and they could be \'list\'\,\'matrix\'\, or \'ExpressionSet\'\. The main function is \'mergeExprs\' which transforms the input objects into data in the merged format\, such that common genes in different datasets can be easily found\. And the function \'intcor\' calculate the correlation coefficients\. Other functions use the output from \'modelOutcome\' to graphically display the results and cross\-validate associations of gene expression data with survival\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/MergeMaid.html
Versions 2.48.0, 2.50.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mergemaid

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mergemaid

and update with::

   conda update bioconductor-mergemaid



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mergemaid.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mergemaid/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mergemaid/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mergemaid/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mergemaid
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mergemaid/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mergemaid

