.. _`bioconductor-cexor`:

bioconductor-cexor
==================

|downloads|

Strand specific peak-pair calling in ChIP-exo replicates. The cumulative Skellam distribution function (package 'skellam') is used to detect significant normalised count differences of opposed sign at each DNA strand (peak-pairs). Irreproducible discovery rate for overlapping peak-pairs across biological replicates is estimated using the package 'idr'.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/CexoR.html
Versions 1.8.0
License  Artistic-2.0 | GPL-2 + file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cexor
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cexor

and update with::

   conda update bioconductor-cexor



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cexor.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cexor/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cexor/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cexor/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cexor
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cexor/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cexor


