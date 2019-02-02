.. _`bioconductor-snplocs.hsapiens.dbsnp.20101109`:

bioconductor-snplocs.hsapiens.dbsnp.20101109
============================================

|downloads|

SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 132. The source data files used for this package were created by NCBI on 9 November 2010 and contain SNPs mapped to reference genome GRCh37. WARNING\: Note that the GRCh37 genome is the same as the hg19 genome from UCSC except for the mitochondrion chromosome. Therefore\, the SNPs in this package can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19 but this injection will exclude chrM \(i.e. nothing will be injected in that sequence\).

============= ===========
Home          https://bioconductor.org/packages/3.8/data/annotation/html/SNPlocs.Hsapiens.dbSNP.20101109.html
Versions      0.99.7
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-snplocs.hsapiens.dbsnp.20101109/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-snplocs.hsapiens.dbsnp.20101109

and update with::

   conda update bioconductor-snplocs.hsapiens.dbsnp.20101109



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp.20101109/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp.20101109
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109/status
                :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109

