.. _`bioconductor-mbamethyl`:

bioconductor-mbamethyl
======================

|downloads|

This package provides a function for reconstructing DNA methylation values from raw measurements. It iteratively implements the group fused lars to smooth related-by-location methylation values and the constrained least squares to remove probe affinity effect across multiple sequences.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/MBAmethyl.html
Versions 1.10.0, 1.12.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbamethyl
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mbamethyl

and update with::

   conda update bioconductor-mbamethyl



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mbamethyl.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mbamethyl/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mbamethyl/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mbamethyl/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mbamethyl
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mbamethyl/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mbamethyl


