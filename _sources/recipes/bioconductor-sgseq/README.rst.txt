.. _`bioconductor-sgseq`:

bioconductor-sgseq
==================

|downloads|

SGSeq is a software package for analyzing splice events from RNA-seq data. Input data are RNA-seq reads mapped to a reference genome in BAM format. Genes are represented as a splice graph, which can be obtained from existing annotation or predicted from the mapped sequence reads. Splice events are identified from the graph and are quantified locally using structurally compatible reads at the start or end of each splice variant. The software includes functions for splice event prediction, quantification, visualization and interpretation.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/SGSeq.html
Versions 1.10.0, 1.12.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgseq
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sgseq

and update with::

   conda update bioconductor-sgseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sgseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sgseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sgseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sgseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sgseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sgseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sgseq


