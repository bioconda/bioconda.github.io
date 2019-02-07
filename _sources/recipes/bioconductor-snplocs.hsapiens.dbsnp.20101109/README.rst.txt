.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp.20101109'
.. highlight: bash


bioconductor-snplocs.hsapiens.dbsnp.20101109
============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp.20101109
   :replaces_section_title:

   SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 132. The source data files used for this package were created by NCBI on 9 November 2010 and contain SNPs mapped to reference genome GRCh37. WARNING\: Note that the GRCh37 genome is the same as the hg19 genome from UCSC except for the mitochondrion chromosome. Therefore\, the SNPs in this package can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19 but this injection will exclude chrM \(i.e. nothing will be injected in that sequence\).

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/SNPlocs.Hsapiens.dbSNP.20101109.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp.20101109 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109/meta.yaml>`_

   


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp.20101109

   |downloads_bioconductor-snplocs.hsapiens.dbsnp.20101109| |docker_bioconductor-snplocs.hsapiens.dbsnp.20101109|

   :versions: 0.99.7

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-snplocs.hsapiens.dbsnp.20101109|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snplocs.hsapiens.dbsnp.20101109

   and update with::

      conda update bioconductor-snplocs.hsapiens.dbsnp.20101109

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109


.. |required_by_bioconductor-snplocs.hsapiens.dbsnp.20101109| conda:required_by:: bioconductor-snplocs.hsapiens.dbsnp.20101109
.. |downloads_bioconductor-snplocs.hsapiens.dbsnp.20101109| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp.20101109.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp.20101109| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp.20101109







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp.20101109/README.html

