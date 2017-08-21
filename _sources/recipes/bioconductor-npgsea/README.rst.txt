.. _`bioconductor-npgsea`:

bioconductor-npgsea
===================

|downloads|

Current gene set enrichment methods rely upon permutations for inference.  These approaches are computationally expensive and have minimum achievable p-values based on the number of permutations, not on the actual observed statistics.  We have derived three parametric approximations to the permutation distributions of two gene set enrichment test statistics.  We are able to reduce the computational burden and granularity issues of permutation testing with our method, which is implemented in this package. npGSEA calculates gene set enrichment statistics and p-values without the computational cost of permutations.  It is applicable in settings where one or many gene sets are of interest.  There are also built-in plotting functions to help users visualize results.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/npGSEA.html
Versions 1.12.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-npgsea
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-npgsea

and update with::

   conda update bioconductor-npgsea



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-npgsea.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-npgsea/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-npgsea/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-npgsea/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-npgsea
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-npgsea/status
                :target: https://quay.io/repository/biocontainers/bioconductor-npgsea


