.. _`bioconductor-dmrseq`:

bioconductor-dmrseq
===================

|downloads|

This package implements an approach for scanning the genome to detect and perform accurate inference on differentially methylated regions from Whole Genome Bisulfite Sequencing data. The method is based on comparing detected regions to a pooled null distribution\, that can be implemented even when as few as two samples per population are available. Region\-level statistics are obtained by fitting a generalized least squares \(GLS\) regression model with a nested autoregressive correlated error structure for the effect of interest on transformed methylation proportions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/dmrseq.html
Versions      1.2.1
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-dmrseq/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dmrseq

and update with::

   conda update bioconductor-dmrseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dmrseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dmrseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dmrseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dmrseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dmrseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dmrseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dmrseq

