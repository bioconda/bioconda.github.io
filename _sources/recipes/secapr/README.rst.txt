.. title:: Package Recipe 'secapr'
.. highlight: bash


secapr
======

.. conda:recipe:: secapr
   :replaces_section_title:

   Process sequence\-capture FASTQ files into alignments for phylogenetic analyses. Integrates allele phasing\, producing haplotype alignments.

   :homepage: https://github.com/AntonelliLab/seqcap_processor
   :license: MIT
   :recipe: /`secapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr/meta.yaml>`_

   


.. conda:package:: secapr

   |downloads_secapr| |docker_secapr|

   :versions: 1.1.12, 1.1.10, 1.1.9, 1.1.8, 1.1.7, 1.1.4, 1.1.0, 1.0.2, 1.0.1

   :depends: :conda:package:`abyss`  :conda:package:`bcftools` 1.8 :conda:package:`biopython`  :conda:package:`bwa` >=0.7 :conda:package:`cogent`  :conda:package:`emboss`  :conda:package:`fastqc`  :conda:package:`lastz`  :conda:package:`mafft` >=7.2 :conda:package:`muscle`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`picard`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-tidyverse`  :conda:package:`samtools` 0.1.19.* :conda:package:`seqtk` >=1.0.82,<=1.2 :conda:package:`trimmomatic` 0.33 :conda:package:`trinity` <=2.3.2 

   :required~by: |required_by_secapr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secapr

   and update with::

      conda update secapr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/secapr


.. |required_by_secapr| conda:required_by:: secapr
.. |downloads_secapr| image:: https://img.shields.io/conda/dn/bioconda/secapr.svg?style=flat
   :alt:   (downloads)
.. |docker_secapr| image:: https://quay.io/repository/biocontainers/secapr/status
   :target: https://quay.io/repository/biocontainers/secapr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secapr/README.html

