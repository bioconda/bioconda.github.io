:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
=======================================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(UCSC version hg38\, based on GRCh38.p12\) with injected major alleles \(dbSNP151\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.dbSNP151.major.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, based on GRCh38.p12\) with major allele injected from dbSNP151\, and stored in Biostrings objects. Only single nucleotide variants \(SNVs\) were considered. At each SNV\, the most frequent allele was chosen at the major allele to be injected into the reference genome.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major|

   :versions:
      
      

      ``0.0.9999-2``,  ``0.0.9999-1``,  ``0.0.9999-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major";
        var versions = ["0.0.9999","0.0.9999","0.0.9999"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/README.html