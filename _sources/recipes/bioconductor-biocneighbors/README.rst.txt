.. _`bioconductor-biocneighbors`:

bioconductor-biocneighbors
==========================

|downloads|

Implements exact and approximate methods for nearest neighbor detection\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. The exact algorithm is implemented using pre\-clustering with the k\-means algorithm\, as described by Wang \(2012\). This is faster than conventional kd\-trees for neighbor searching in higher \(\> 20\) dimensional data. The approximate method uses the Annoy algorithm. Functions are also provided to search for all neighbors within a given distance. Parallelization is achieved for all methods using the BiocParallel framework.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/BiocNeighbors.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocneighbors



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-biocneighbors

and update with::

   conda update bioconductor-biocneighbors



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-biocneighbors.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-biocneighbors/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-biocneighbors/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-biocneighbors
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-biocneighbors/status
                :target: https://quay.io/repository/biocontainers/bioconductor-biocneighbors

