.. _`bioconductor-panp`:

bioconductor-panp
=================

|downloads|

A function to make gene presence/absence calls based on distance from negative strand matching probesets (NSMP) which are derived from Affymetrix annotation. PANP is applied after gene expression values are created, and therefore can be used after any preprocessing method such as MAS5 or GCRMA, or PM-only methods like RMA. NSMP sets have been established for the HGU133A and HGU133-Plus-2.0 chipsets to date.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/panp.html
Versions 1.46.0, 1.48.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panp
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-panp

and update with::

   conda update bioconductor-panp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-panp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-panp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-panp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-panp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-panp
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-panp/status
                :target: https://quay.io/repository/biocontainers/bioconductor-panp


