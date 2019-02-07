.. title:: Package Recipe 'rad_haplotyper'
.. highlight: bash


rad_haplotyper
==============

.. conda:recipe:: rad_haplotyper
   :replaces_section_title:

   A program for building SNP haplotypes from RAD sequencing data

   :homepage: https://github.com/chollenbeck/rad_haplotyper
   :license: Perl
   :recipe: /`rad_haplotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper/meta.yaml>`_

   


.. conda:package:: rad_haplotyper

   |downloads_rad_haplotyper| |docker_rad_haplotyper|

   :versions: 1.1.9, 1.1.7, 1.1.6

   :depends: :conda:package:`ddocent`  :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-bio-cigar`  :conda:package:`perl-bio-db-sam`  :conda:package:`perl-bioperl`  :conda:package:`perl-data-dumper`  :conda:package:`perl-getopt-long`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-module-build`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-pod-usage`  :conda:package:`perl-term-progressbar`  :conda:package:`perl-vcftools-vcf`  

   :required~by: |required_by_rad_haplotyper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rad_haplotyper

   and update with::

      conda update rad_haplotyper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rad_haplotyper


.. |required_by_rad_haplotyper| conda:required_by:: rad_haplotyper
.. |downloads_rad_haplotyper| image:: https://img.shields.io/conda/dn/bioconda/rad_haplotyper.svg?style=flat
   :alt:   (downloads)
.. |docker_rad_haplotyper| image:: https://quay.io/repository/biocontainers/rad_haplotyper/status
   :target: https://quay.io/repository/biocontainers/rad_haplotyper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad_haplotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad_haplotyper/README.html

