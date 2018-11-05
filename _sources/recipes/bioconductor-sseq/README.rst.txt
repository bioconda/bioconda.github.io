.. _`bioconductor-sseq`:

bioconductor-sseq
=================

|downloads|

The purpose of this package is to discover the genes that are differentially expressed between two conditions in RNA\-seq experiments. Gene expression is measured in counts of transcripts and modeled with the Negative Binomial \(NB\) distribution using a shrinkage approach for dispersion estimation. The method of moment \(MM\) estimates for dispersion are shrunk towards an estimated target\, which minimizes the average squared difference between the shrinkage estimates and the initial estimates. The exact per\-gene probability under the NB model is calculated\, and used to test the hypothesis that the expected expression of a gene in two conditions identically follow a NB distribution.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/sSeq.html
Versions      1.14.0, 1.16.0, 1.18.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sseq



Links         biotools: :biotools:`sseq`, doi: :doi:`10.1093/bioinformatics/btt143`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sseq

and update with::

   conda update bioconductor-sseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sseq

