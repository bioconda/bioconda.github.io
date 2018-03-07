.. _`bioconductor-epivizr`:

bioconductor-epivizr
====================

|downloads|

This package provides connections to the epiviz web app \(http\:\/\/epiviz.cbcb.umd.edu\) for interactive visualization of genomic data. Objects in R\/bioc interactive sessions can be displayed in genome browser tracks or plots to be explored by navigation through genomic regions. Fundamental Bioconductor data structures are supported \(e.g.\, GenomicRanges and RangedSummarizedExperiment objects\)\, while providing an easy mechanism to support other data structures \(through package epivizrData\). Visualizations \(using d3.js\) can be easily added to the web app as well.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/epivizr.html
Versions      2.8.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizr



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-epivizr

and update with::

   conda update bioconductor-epivizr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-epivizr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-epivizr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-epivizr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-epivizr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-epivizr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-epivizr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-epivizr

