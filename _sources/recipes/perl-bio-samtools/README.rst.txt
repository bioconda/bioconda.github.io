.. title:: Package Recipe 'perl-bio-samtools'
.. highlight: bash


perl-bio-samtools
=================

.. conda:recipe:: perl-bio-samtools
   :replaces_section_title:

   Read SAM\/BAM files

   :homepage: http://search.cpan.org/~lds/Bio-SamTools-1.43/
   :license: perl_5
   :recipe: /`perl-bio-samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools/meta.yaml>`_

   


.. conda:package:: perl-bio-samtools

   |downloads_perl-bio-samtools| |docker_perl-bio-samtools|

   :versions: 1.43

   :depends: :conda:package:`perl-bioperl-core`  :conda:package:`perl-threaded`  :conda:package:`zlib`  

   :required~by: |required_by_perl-bio-samtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-samtools

   and update with::

      conda update perl-bio-samtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-samtools


.. |required_by_perl-bio-samtools| conda:required_by:: perl-bio-samtools
.. |downloads_perl-bio-samtools| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-samtools.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-samtools| image:: https://quay.io/repository/biocontainers/perl-bio-samtools/status
   :target: https://quay.io/repository/biocontainers/perl-bio-samtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-samtools/README.html

