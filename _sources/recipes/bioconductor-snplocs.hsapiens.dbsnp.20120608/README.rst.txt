.. _`bioconductor-snplocs.hsapiens.dbsnp.20120608`:

bioconductor-snplocs.hsapiens.dbsnp.20120608
============================================

|downloads|

SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 137. The source data files used for this package were created by NCBI on June 7\-8\, 2012\, and contain SNPs mapped to reference genome GRCh37.p5. WARNING\: Note that the GRCh37.p5 genome is a patched version of GRCh37 but the patch doesn\'t alter chromosomes 1\-22\, X\, Y\, MT. GRCh37 itself is the same as the hg19 genome from UCSC \*except\* for the mitochondrion chromosome. Therefore\, the SNPs in this package can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19 and they will land at the correct location but this injection will exclude chrM \(i.e. nothing will be injected in that sequence\). IMPORTANT NOTE\: This package is deprecated. Please use a SNPlocs data package based on a more recent dbSNP BUILD instead \(e.g. BUILD 144 or BUILD 149\). You can call BSgenome\:\:available.SNPs\(\) from R to get the list of available SNPlocs data packages.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/annotation/html/SNPlocs.Hsapiens.dbSNP.20120608.html
Versions      0.99.11
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-snplocs.hsapiens.dbsnp.20120608/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-snplocs.hsapiens.dbsnp.20120608

and update with::

   conda update bioconductor-snplocs.hsapiens.dbsnp.20120608



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20120608.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20120608/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20120608/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp.20120608/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp.20120608
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20120608/status
                :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20120608

