.. _`bioconductor-annotationhub`:

bioconductor-annotationhub
==========================

|downloads|

This package provides a client for the Bioconductor AnnotationHub web resource. The AnnotationHub web resource provides a central location where genomic files (e.g., VCF, bed, wig) and other resources from standard locations (e.g., UCSC, Ensembl) can be discovered. The resource includes metadata about each resource, e.g., a textual description, tags, and date of modification. The client creates and manages a local cache of files retrieved by the user, helping with quick and reproducible access.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/AnnotationHub.html
Versions 2.6.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-annotationhub

and update with::

   conda update bioconductor-annotationhub



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-annotationhub.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-annotationhub/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-annotationhub
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-annotationhub/status
                :target: https://quay.io/repository/biocontainers/bioconductor-annotationhub


