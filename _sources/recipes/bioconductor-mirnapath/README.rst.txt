.. _`bioconductor-mirnapath`:

bioconductor-mirnapath
======================

|downloads|

This package provides pathway enrichment techniques for miRNA expression data. Specifically, the set of methods handles the many-to-many relationship between miRNAs and the multiple genes they are predicted to target (and thus affect.)  It also handles the gene-to-pathway relationships separately. Both steps are designed to preserve the additive effects of miRNAs on genes, many miRNAs affecting one gene, one miRNA affecting multiple genes, or many miRNAs affecting many genes.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/miRNApath.html
Versions 1.36.0
License  LGPL-2.1
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnapath
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mirnapath

and update with::

   conda update bioconductor-mirnapath



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mirnapath.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mirnapath/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mirnapath
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mirnapath/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mirnapath


