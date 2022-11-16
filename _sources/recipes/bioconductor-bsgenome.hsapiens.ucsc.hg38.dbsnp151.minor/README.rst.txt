:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor
=======================================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(UCSC version hg38\, based on GRCh38.p12\) with injected minor alleles \(dbSNP151\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.dbSNP151.minor.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, based on GRCh38.p12\) with minor alleles injected from dbSNP151\, and stored in Biostrings objects. Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, based on GRCh38.p12\) with minor alleles injected from dbSNP151\, and stored in Biostrings objects. Only common single nucleotide variants \(SNVs\) with at least one alternate allele with frequency greater than 0.01 were considered. For SNVs with more than 1 alternate allele\, the most frequent allele was chosen as the minor allele to be injected into the reference genome.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor|

   :versions:
      
      

      ``0.0.9999-2``,  ``0.0.9999-1``,  ``0.0.9999-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor";
        var versions = ["0.0.9999","0.0.9999","0.0.9999"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.minor/README.html