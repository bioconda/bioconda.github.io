:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp150.grch38'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp150.grch38
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp150.grch38
   :replaces_section_title:
   :noindex:

   SNP locations for Homo sapiens \(dbSNP Build 150\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/SNPlocs.Hsapiens.dbSNP150.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp150.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp150.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp150.grch38/meta.yaml>`_

   SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 150. The source data files used for this package were created by NCBI between March 12\-14\, 2017\, and contain SNPs mapped to reference genome GRCh38.p7 \(a patched version of GRCh38 that doesn\'t alter chromosomes 1\-22\, X\, Y\, MT\). Note that these SNPs can be \"injected\" in BSgenome.Hsapiens.NCBI.GRCh38 or in BSgenome.Hsapiens.UCSC.hg38.


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp150.grch38

   |downloads_bioconductor-snplocs.hsapiens.dbsnp150.grch38| |docker_bioconductor-snplocs.hsapiens.dbsnp150.grch38|

   :versions:
      
      

      ``0.99.20-5``,  ``0.99.20-3``,  ``0.99.20-2``,  ``0.99.20-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snplocs.hsapiens.dbsnp150.grch38

   and update with::

      conda update bioconductor-snplocs.hsapiens.dbsnp150.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp150.grch38:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp150.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp150.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp150.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp150.grch38
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp150.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp150.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp150.grch38
.. _`bioconductor-snplocs.hsapiens.dbsnp150.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp150.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp150.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp150.grch38/README.html