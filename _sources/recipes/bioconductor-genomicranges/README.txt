.. _`bioconductor-genomicranges`:

bioconductor-genomicranges
==========================

|downloads|

The ability to efficiently represent and manipulate genomic annotations and alignments is playing a central role when it comes to analyzing high-throughput sequencing data (a.k.a. NGS data). The GenomicRanges package defines general purpose containers for storing and manipulating genomic intervals and variables defined along a genome. More specialized containers for representing and manipulating short alignments against a reference genome, or a matrix-like summarization of an experiment, are defined in the GenomicAlignments and SummarizedExperiment packages respectively. Both packages build on top of the GenomicRanges infrastructure.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/GenomicRanges.html
Versions 1.20.8, 1.22.0, 1.22.1, 1.22.2, 1.22.3, 1.22.4, 1.24.3, 1.26.1
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-genomicranges

and update with::

   conda update bioconductor-genomicranges



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-genomicranges.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-genomicranges/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-genomicranges
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-genomicranges/status
                :target: https://quay.io/repository/biocontainers/bioconductor-genomicranges


