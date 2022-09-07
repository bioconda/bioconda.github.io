:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38'
.. highlight: bash

bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38
=================================================

.. conda:recipe:: bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38
   :replaces_section_title:
   :noindex:

   Extra SNP locations for Homo sapiens \(dbSNP Build 144\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/XtraSNPlocs.Hsapiens.dbSNP144.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/meta.yaml>`_

   Extra SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 144. The source data files used for this package were created by NCBI on May 30\, 2015\, and contain SNPs mapped to reference genome GRCh38.p2 \(a patched version of GRCh38 that doesn\'t alter chromosomes 1\-22\, X\, Y\, MT\). While the SNPlocs.Hsapiens.dbSNP144.GRCh38 package contains only molecular variations of class \"snp\"\, this package contains molecular variations of other classes \(in\-del\, heterozygous\, microsatellite\, named\-locus\, no\-variation\, mixed\, and multinucleotide\-polymorphism\).


.. conda:package:: bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38

   |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38| |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38|

   :versions:
      
      

      ``0.99.12-10``,  ``0.99.12-9``,  ``0.99.12-8``,  ``0.99.12-7``,  ``0.99.12-6``,  ``0.99.12-5``,  ``0.99.12-4``,  ``0.99.12-3``,  ``0.99.12-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38

   and update with::

      conda update bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38:<tag>

   (see `bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38
   :alt:   (downloads)
.. |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38
.. _`bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38";
        var versions = ["0.99.12","0.99.12","0.99.12","0.99.12","0.99.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch38/README.html