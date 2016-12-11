.. _`bioconductor-genomation`:

bioconductor-genomation
=======================

|downloads|

A package for summary and annotation of genomic intervals. Users can visualize and quantify genomic intervals over pre-defined functional regions, such as promoters, exons, introns, etc. The genomic intervals represent regions with a defined chromosome position, which may be associated with a score, such as aligned reads from HT-seq experiments, TF binding sites, methylation scores, etc. The package can use any tabular genomic feature data as long as it has minimal information on the locations of genomic intervals. In addition, It can use BAM or BigWig files as input.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/genomation.html
Versions 1.2.2, 1.4.2, 1.6.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomation
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-genomation

and update with::

   conda update bioconductor-genomation



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-genomation.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-genomation/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-genomation/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-genomation/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-genomation
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-genomation/status
                :target: https://quay.io/repository/biocontainers/bioconductor-genomation


