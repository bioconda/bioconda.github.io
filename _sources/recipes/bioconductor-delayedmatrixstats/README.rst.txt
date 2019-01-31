.. _`bioconductor-delayedmatrixstats`:

bioconductor-delayedmatrixstats
===============================

|downloads|

A port of the \'matrixStats\' API for use with DelayedMatrix objects from the \'DelayedArray\' package. High\-performing functions operating on rows and columns of DelayedMatrix objects\, e.g. col \/ rowMedians\(\)\, col \/ rowRanks\(\)\, and col \/ rowSds\(\). Functions optimized per data type and for subsetted calculations such that both memory usage and processing time is minimized.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DelayedMatrixStats.html
Versions      1.2.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-delayedmatrixstats/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-delayedmatrixstats

and update with::

   conda update bioconductor-delayedmatrixstats



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-delayedmatrixstats/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-delayedmatrixstats/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-delayedmatrixstats/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-delayedmatrixstats
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats/status
                :target: https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats

