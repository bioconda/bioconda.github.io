:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.3-0, 1.0.2-0, 1.0.1-0, 1.0.0-1, 1.0-0
   
   :depends bbmap: >=37.62
   
   :depends bcftools: >=1.7
   
   :depends bowtie2: >=2.3.4.1
   
   :depends bwa: >=0.7.12
   
   :depends cmake: >=3.0.1
   
   :depends curl: >=7.60.0
   
   :depends fasttree: >=2.1.9
   
   :depends hyphy: >=2.3.12
   
   :depends iqtree: >=1.6.7
   
   :depends mafft: >=7.313
   
   :depends mummer: >=3.23
   
   :depends muscle: >=3.8.31
   
   :depends openmpi: >=3.1.0
   
   :depends paml: >=4.9
   
   :depends perl: 
   
   :depends perl-app-cpanminus: >=1.7039
   
   :depends perl-bioperl: >=1.7.2
   
   :depends perl-file-path: >=2.12
   
   :depends perl-getopt-long: >=2.50
   
   :depends perl-io-handle: >=1.28
   
   :depends perl-io-handle: >=1.35
   
   :depends perl-parallel-forkmanager: >=1.17
   
   :depends perl-statistics-distributions: >=1.02
   
   :depends raxml: >=8.2.10
   
   :depends samtools: >=1.7
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phame

   and update with::

      conda update phame

   or use the docker container::

      docker pull quay.io/biocontainers/phame:<tag>

   (see `phame/tags`_ for valid values for ``<tag>``)


.. |downloads_phame| image:: https://img.shields.io/conda/dn/bioconda/phame.svg?style=flat
   :alt:   (downloads)
.. |docker_phame| image:: https://quay.io/repository/biocontainers/phame/status
   :target: https://quay.io/repository/biocontainers/phame
.. _`phame/tags`: https://quay.io/repository/biocontainers/phame?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phame/README.html