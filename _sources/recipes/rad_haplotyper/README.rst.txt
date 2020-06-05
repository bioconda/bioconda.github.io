:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rad_haplotyper'
.. highlight: bash

rad_haplotyper
==============

.. conda:recipe:: rad_haplotyper
   :replaces_section_title:
   :noindex:

   A program for building SNP haplotypes from RAD sequencing data

   :homepage: https://github.com/chollenbeck/rad_haplotyper
   :license: Perl
   :recipe: /`rad_haplotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper/meta.yaml>`_

   


.. conda:package:: rad_haplotyper

   |downloads_rad_haplotyper| |docker_rad_haplotyper|

   :versions:
      
      

      ``1.1.9-3``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.7-0``,  ``1.1.6-0``

      

   
   :depends ddocent: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-app-cpanminus: 
   :depends perl-bio-cigar: 
   :depends perl-bio-samtools: 
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-getopt-long: 
   :depends perl-list-moreutils: 
   :depends perl-module-build: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pod-usage: 
   :depends perl-term-progressbar: 
   :depends perl-vcftools-vcf: ``<0.700``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rad_haplotyper

   and update with::

      conda update rad_haplotyper

   or use the docker container::

      docker pull quay.io/biocontainers/rad_haplotyper:<tag>

   (see `rad_haplotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_rad_haplotyper| image:: https://img.shields.io/conda/dn/bioconda/rad_haplotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/rad_haplotyper
   :alt:   (downloads)
.. |docker_rad_haplotyper| image:: https://quay.io/repository/biocontainers/rad_haplotyper/status
   :target: https://quay.io/repository/biocontainers/rad_haplotyper
.. _`rad_haplotyper/tags`: https://quay.io/repository/biocontainers/rad_haplotyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad_haplotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad_haplotyper/README.html