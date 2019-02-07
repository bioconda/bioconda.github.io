.. title:: Package Recipe 'bioconductor-easyrnaseq'
.. highlight: bash


bioconductor-easyrnaseq
=======================

.. conda:recipe:: bioconductor-easyrnaseq
   :replaces_section_title:

   Calculates the coverage of high\-throughput short\-reads against a genome of reference and summarizes it per feature of interest \(e.g. exon\, gene\, transcript\). The data can be normalized as \'RPKM\' or by the \'DESeq\' or \'edgeR\' package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/easyRNASeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easyrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyrnaseq/meta.yaml>`_
   :links: biotools: :biotools:`easyrnaseq`

   


.. conda:package:: bioconductor-easyrnaseq

   |downloads_bioconductor-easyrnaseq| |docker_bioconductor-easyrnaseq|

   :versions: 2.18.2, 2.16.0, 2.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomeintervals` >=1.38.0,<1.39.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-locfit`  :conda:package:`r-lsd` >=3.0 

   :required~by: |required_by_bioconductor-easyrnaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easyrnaseq

   and update with::

      conda update bioconductor-easyrnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-easyrnaseq


.. |required_by_bioconductor-easyrnaseq| conda:required_by:: bioconductor-easyrnaseq
.. |downloads_bioconductor-easyrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easyrnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-easyrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-easyrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easyrnaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easyrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easyrnaseq/README.html

