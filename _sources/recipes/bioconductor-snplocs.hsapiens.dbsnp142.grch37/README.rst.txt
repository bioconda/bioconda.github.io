:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp142.grch37'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp142.grch37
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp142.grch37
   :replaces_section_title:

   SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 142. The source data files used for this package were created by NCBI on October 14\, 2014\, and contain SNPs mapped to reference genome GRCh37.p13. WARNING\: Note that the GRCh37.p13 genome is a patched version of GRCh37 but the patch doesn\'t alter chromosomes 1\-22\, X\, Y\, MT. GRCh37 itself is the same as the hg19 genome from UCSC \*except\* for the mitochondrion chromosome. Therefore\, the SNPs in this package can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19 and they will land at the correct location but this injection will exclude chrM \(i.e. nothing will be injected in that sequence\).

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/SNPlocs.Hsapiens.dbSNP142.GRCh37.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp142.grch37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp142.grch37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp142.grch37/meta.yaml>`_

   


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp142.grch37

   |downloads_bioconductor-snplocs.hsapiens.dbsnp142.grch37| |docker_bioconductor-snplocs.hsapiens.dbsnp142.grch37|

   :versions: 0.99.5-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snplocs.hsapiens.dbsnp142.grch37

   and update with::

      conda update bioconductor-snplocs.hsapiens.dbsnp142.grch37

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp142.grch37:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp142.grch37/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp142.grch37| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp142.grch37.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp142.grch37| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp142.grch37/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp142.grch37
.. _`bioconductor-snplocs.hsapiens.dbsnp142.grch37/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp142.grch37?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp142.grch37/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp142.grch37/README.html