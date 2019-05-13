:orphan:  .. only available via index, not via toctree

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

   :versions: 0.953-3, 0.953-2, 0.953-1, 0.953-0, 0.840-0, 0.797-0, 0.1.16-2, 0.1.16-1, 0.1.16-0, 0.1.15-2, 0.1.15-1, 0.1.14-0
   
   :depends libgcc: 
   :depends perl-threaded: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-vcftools-vcf

   and update with::

      conda update perl-vcftools-vcf

   or use the docker container::

      docker pull quay.io/biocontainers/perl-vcftools-vcf:<tag>

   (see `perl-vcftools-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-vcftools-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-vcftools-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-vcftools-vcf
   :alt:   (downloads)
.. |docker_perl-vcftools-vcf| image:: https://quay.io/repository/biocontainers/perl-vcftools-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-vcftools-vcf
.. _`perl-vcftools-vcf/tags`: https://quay.io/repository/biocontainers/perl-vcftools-vcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-vcftools-vcf/README.html