.. title:: Package Recipe 'perl-vcftools-vcf'
.. highlight: bash


perl-vcftools-vcf
=================

.. conda:recipe:: perl-vcftools-vcf
   :replaces_section_title:

   cpanm ready distribution of VCFtools Perl libraries

   :homepage: https://github.com/vcftools/vcftools
   :license: LGPLv3
   :recipe: /`perl-vcftools-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vcftools-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vcftools-vcf/meta.yaml>`_
   :links: biotools: :biotools:`vcftools`

   


.. conda:package:: perl-vcftools-vcf

   |downloads_perl-vcftools-vcf| |docker_perl-vcftools-vcf|

   :versions: 0.953, 0.840, 0.797, 0.1.16, 0.1.15, 0.1.14

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-vcftools-vcf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-vcftools-vcf

   and update with::

      conda update perl-vcftools-vcf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-vcftools-vcf


.. |required_by_perl-vcftools-vcf| conda:required_by:: perl-vcftools-vcf
.. |downloads_perl-vcftools-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-vcftools-vcf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-vcftools-vcf| image:: https://quay.io/repository/biocontainers/perl-vcftools-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-vcftools-vcf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html

