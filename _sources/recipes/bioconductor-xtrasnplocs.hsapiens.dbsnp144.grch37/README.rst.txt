:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37'
.. highlight: bash

bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37
=================================================

.. conda:recipe:: bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37
   :replaces_section_title:
   :noindex:

   Extra SNP locations for Homo sapiens \(dbSNP Build 144\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/XtraSNPlocs.Hsapiens.dbSNP144.GRCh37.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/meta.yaml>`_

   Extra SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 144. The source data files used for this package were created by NCBI on May 29\-30\, 2015\, and contain SNPs mapped to reference genome GRCh37.p13 \(a patched version of GRCh37 that doesn\'t alter chromosomes 1\-22\, X\, Y\, MT\). While the SNPlocs.Hsapiens.dbSNP144.GRCh37 package contains only molecular variations of class \"snp\"\, this package contains molecular variations of other classes \(in\-del\, heterozygous\, microsatellite\, named\-locus\, no\-variation\, mixed\, and multinucleotide\-polymorphism\).


.. conda:package:: bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37

   |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37| |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.12-10</code>,  <code>0.99.12-9</code>,  <code>0.99.12-8</code>,  <code>0.99.12-7</code>,  <code>0.99.12-6</code>,  <code>0.99.12-5</code>,  <code>0.99.12-4</code>,  <code>0.99.12-3</code>,  <code>0.99.12-2</code>,  </span></summary>
      

      ``0.99.12-10``,  ``0.99.12-9``,  ``0.99.12-8``,  ``0.99.12-7``,  ``0.99.12-6``,  ``0.99.12-5``,  ``0.99.12-4``,  ``0.99.12-3``,  ``0.99.12-2``,  ``0.99.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37

   and update with::

      conda update bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37:<tag>

   (see `bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37
   :alt:   (downloads)
.. |docker_bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37| image:: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37
.. _`bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/tags`: https://quay.io/repository/biocontainers/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37";
        var versions = ["0.99.12","0.99.12","0.99.12","0.99.12","0.99.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37/README.html