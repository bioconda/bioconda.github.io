.. _`bioconductor-odseq`:

bioconductor-odseq
==================

|downloads|

Performs outlier detection of sequences in a multiple sequence alignment using bootstrap of predefined distance metrics. Outlier sequences can make downstream analyses unreliable or make the alignments less accurate while they are being constructed. This package implements the OD\-seq algorithm proposed by Jehl et al \(doi 10.1186\/s12859\-015\-0702\-1\) for aligned sequences and a variant using string kernels for unaligned sequences.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/odseq.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-odseq/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-odseq

and update with::

   conda update bioconductor-odseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-odseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-odseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-odseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-odseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-odseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-odseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-odseq

