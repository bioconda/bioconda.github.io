:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38'
.. highlight: bash

bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38
=================================================

.. conda:recipe:: bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38
   :replaces_section_title:
   :noindex:

   Extra SNP locations for Homo sapiens \(dbSNP Build 141\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/XtraSNPlocs.Hsapiens.dbSNP141.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/meta.yaml>`_

   Extra SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 141. The source data files used for this package were created by NCBI on May 1st\, 2014\, and contain SNPs mapped to reference genome GRCh38. While the SNPlocs.Hsapiens.dbSNP141.GRCh38 package contains only molecular variations of class \"snp\"\, this package contains molecular variations of other classes \(in\-del\, heterozygous\, microsatellite\, named\-locus\, no\-variation\, mixed\, and multinucleotide\-polymorphism\).


.. conda:package:: bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38

   |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38| |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38|

   :versions:
      
      

      ``0.99.12-7``,  ``0.99.12-6``,  ``0.99.12-5``,  ``0.99.12-4``,  ``0.99.12-3``,  ``0.99.12-2``,  ``0.99.12-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38

   and update with::

      conda update bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38:<tag>

   (see `bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38
   :alt:   (downloads)
.. |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38
.. _`bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp141.grch38/README.html