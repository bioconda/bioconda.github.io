.. _`bioconductor-bcseq`:

bioconductor-bcseq
==================

|downloads|

This Rcpp\-based package implements a highly efficient data structure and algorithm for performing alignment of short reads from CRISPR or shRNA screens to reference barcode library. Sequencing error are considered and matching qualities are evaluated based on Phred scores. A Bayes\' classifier is employed to predict the originating barcode of a read. The package supports provision of user\-defined probability models for evaluating matching qualities. The package also supports multi\-threading.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/bcSeq.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-bcseq/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bcseq

and update with::

   conda update bioconductor-bcseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bcseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bcseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bcseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bcseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bcseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bcseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bcseq

