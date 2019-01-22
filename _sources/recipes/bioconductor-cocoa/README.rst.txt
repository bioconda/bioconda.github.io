.. _`bioconductor-cocoa`:

bioconductor-cocoa
==================

|downloads|

COCOA is a method for understanding variation among samples and can be used with data that includes genomic coordinates such as DNA methylation. On a high level\, COCOA uses a database of \"region sets\" and principal component analysis \(PCA\) of your data to identify sources of variation among samples. A region set is a set of genomic regions that share a biological annotation\, for instance\, transcription factor binding regions\, histone modification regions\, or open chromatin regions. COCOA works in both supervised \(known groups of samples\) and unsupervised \(no groups\) situations and can be used as a complement to \"differential\" methods that find discrete differences between groups. COCOA can identify biologically meaningful sources of variation between samples and increase understanding of variation in your data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/COCOA.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cocoa

and update with::

   conda update bioconductor-cocoa



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cocoa.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cocoa/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cocoa/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cocoa/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cocoa
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cocoa/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cocoa

