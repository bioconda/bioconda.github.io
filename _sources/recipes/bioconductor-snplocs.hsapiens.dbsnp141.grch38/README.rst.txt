:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp141.grch38'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp141.grch38
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp141.grch38
   :replaces_section_title:

   SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 141. The source data files used for this package were created by NCBI on May 1st\, 2014\, and contain SNPs mapped to reference genome GRCh38. Note that these SNPs can be \"injected\" in BSgenome.Hsapiens.NCBI.GRCh38 or in BSgenome.Hsapiens.UCSC.hg38. IMPORTANT NOTE\: This package is deprecated. Please use a SNPlocs data package based on a more recent dbSNP BUILD instead \(e.g. BUILD 144 or BUILD 149\). You can call BSgenome\:\:available.SNPs\(\) from R to get the list of available SNPlocs data packages.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/SNPlocs.Hsapiens.dbSNP141.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp141.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp141.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp141.grch38/meta.yaml>`_

   


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp141.grch38

   |downloads_bioconductor-snplocs.hsapiens.dbsnp141.grch38| |docker_bioconductor-snplocs.hsapiens.dbsnp141.grch38|

   :versions: 0.99.11-2, 0.99.11-0
   
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snplocs.hsapiens.dbsnp141.grch38

   and update with::

      conda update bioconductor-snplocs.hsapiens.dbsnp141.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp141.grch38:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp141.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp141.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp141.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp141.grch38
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp141.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp141.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp141.grch38
.. _`bioconductor-snplocs.hsapiens.dbsnp141.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp141.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp141.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp141.grch38/README.html