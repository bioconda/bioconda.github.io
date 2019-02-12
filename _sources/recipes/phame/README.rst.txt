.. title:: Package Recipe 'phame'
.. highlight: bash


phame
=====

.. conda:recipe:: phame
   :replaces_section_title:

   A tool to derive SNP matrices and phylogenetic tree from raw reads\, contigs\, and full genomes.

   :homepage: https://github.com/LANL-Bioinformatics/PhaME
   :license: GPLV2
   :recipe: /`phame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame/meta.yaml>`_
   :links: biotools: :biotools:`phame`

   


.. conda:package:: phame

   |downloads_phame| |docker_phame|

   :versions: 1.0.3, 1.0.2, 1.0.1, 1.0, 1.0.0

   :depends: :conda:package:`bbmap` >=37.62 :conda:package:`bcftools` >=1.7 :conda:package:`bowtie2` >=2.3.4.1 :conda:package:`bwa` >=0.7.12 :conda:package:`cmake` >=3.0.1 :conda:package:`curl` >=7.60.0 :conda:package:`fasttree` >=2.1.9 :conda:package:`hyphy` >=2.3.12 :conda:package:`iqtree` >=1.6.7 :conda:package:`mafft` >=7.313 :conda:package:`mummer` >=3.23 :conda:package:`muscle` >=3.8.31 :conda:package:`openmpi` >=3.1.0 :conda:package:`paml` >=4.9 :conda:package:`perl`  :conda:package:`perl-app-cpanminus` >=1.7039 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-file-path` >=2.12 :conda:package:`perl-getopt-long` >=2.50 :conda:package:`perl-io-handle` >=1.28 :conda:package:`perl-io-handle` >=1.35 :conda:package:`perl-parallel-forkmanager` >=1.17 :conda:package:`perl-statistics-distributions` >=1.02 :conda:package:`raxml` >=8.2.10 :conda:package:`samtools` >=1.7 

   :required~by: |required_by_phame|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phame

   and update with::

      conda update phame

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phame


.. |required_by_phame| conda:required_by:: phame
.. |downloads_phame| image:: https://img.shields.io/conda/dn/bioconda/phame.svg?style=flat
   :alt:   (downloads)
.. |docker_phame| image:: https://quay.io/repository/biocontainers/phame/status
   :target: https://quay.io/repository/biocontainers/phame







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phame/README.html

