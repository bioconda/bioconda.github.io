.. _`bioconductor-snprelate`:

bioconductor-snprelate
======================

|downloads|

Genome\-wide association studies \(GWAS\) are widely used to investigate the genetic basis of diseases and traits\, but they pose many computational challenges. We developed an R package SNPRelate to provide a binary format for single\-nucleotide polymorphism \(SNP\) data in GWAS utilizing CoreArray Genomic Data Structure \(GDS\) data files. The GDS format offers the efficient operations specifically designed for integers with two bits\, since a SNP could occupy only two bits. SNPRelate is also designed to accelerate two key computations on SNP data using parallel computing for multi\-core symmetric multiprocessing computer architectures\: Principal Component Analysis \(PCA\) and relatedness analysis using Identity\-By\-Descent measures. The SNP GDS format is also used by the GWASTools package with the support of S4 classes and generic functions. The extended GDS format is implemented in the SeqArray package to support the storage of single nucleotide variations \(SNVs\)\, insertion\/deletion polymorphism \(indel\) and structural variation calls.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/SNPRelate.html
Versions      1.12.2, 1.14.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snprelate



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-snprelate

and update with::

   conda update bioconductor-snprelate



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-snprelate.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-snprelate/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-snprelate/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-snprelate/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-snprelate
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-snprelate/status
                :target: https://quay.io/repository/biocontainers/bioconductor-snprelate

