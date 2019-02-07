.. title:: Package Recipe 'perl-sanger-cgp-vcf'
.. highlight: bash


perl-sanger-cgp-vcf
===================

.. conda:recipe:: perl-sanger-cgp-vcf
   :replaces_section_title:

   a set of common perl utilities for generating consistent Vcf headers

   :homepage: https://github.com/cancerit/cgpVcf
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vcf

   |downloads_perl-sanger-cgp-vcf| |docker_perl-sanger-cgp-vcf|

   :versions: 2.2.1, 1.3.1

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-data-uuid`  :conda:package:`perl-vcftools-vcf`  

   :required~by: |required_by_perl-sanger-cgp-vcf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sanger-cgp-vcf

   and update with::

      conda update perl-sanger-cgp-vcf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sanger-cgp-vcf


.. |required_by_perl-sanger-cgp-vcf| conda:required_by:: perl-sanger-cgp-vcf
.. |downloads_perl-sanger-cgp-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vcf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vcf| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html

