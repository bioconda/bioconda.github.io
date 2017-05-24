.. _`bioconductor-doppelgangr`:

bioconductor-doppelgangr
========================

|downloads|

The main function is doppelgangR(), which takes as minimal input a list of ExpressionSet object, and searches all list pairs for duplicated samples.  The search is based on the genomic data (exprs(eset)), phenotype/clinical data (pData(eset)), and "smoking guns" - supposedly unique identifiers found in pData(eset).

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/doppelgangR.html
Versions 1.4.1
License  GPL (>=2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doppelgangr
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-doppelgangr

and update with::

   conda update bioconductor-doppelgangr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-doppelgangr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-doppelgangr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-doppelgangr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-doppelgangr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-doppelgangr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-doppelgangr


