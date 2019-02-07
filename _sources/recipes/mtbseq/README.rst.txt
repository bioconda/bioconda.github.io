.. title:: Package Recipe 'mtbseq'
.. highlight: bash


mtbseq
======

.. conda:recipe:: mtbseq
   :replaces_section_title:

   Pipeline for mapping\, variant calling and detection of resistance mediating and phylogenetic variants from illumina whole genome sequence data of Mycobacterium tuberculosis complex isolates

   :homepage: https://github.com/ngs-fzb/MTBseq_source
   :license: GPLv3
   :recipe: /`mtbseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtbseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtbseq/meta.yaml>`_

   


.. conda:package:: mtbseq

   |downloads_mtbseq| |docker_mtbseq|

   :versions: 1.0.3

   :depends: :conda:package:`bwa` 0.7.17 :conda:package:`gatk` 3.8 :conda:package:`openjdk` >=8,<9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-mce` >=1.836 :conda:package:`perl-number-format`  :conda:package:`perl-statistics-basic` >=1.6611 :conda:package:`picard` >=2.17.0 :conda:package:`samtools` 1.6 

   :required~by: |required_by_mtbseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtbseq

   and update with::

      conda update mtbseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mtbseq


.. |required_by_mtbseq| conda:required_by:: mtbseq
.. |downloads_mtbseq| image:: https://img.shields.io/conda/dn/bioconda/mtbseq.svg?style=flat
   :alt:   (downloads)
.. |docker_mtbseq| image:: https://quay.io/repository/biocontainers/mtbseq/status
   :target: https://quay.io/repository/biocontainers/mtbseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtbseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtbseq/README.html

