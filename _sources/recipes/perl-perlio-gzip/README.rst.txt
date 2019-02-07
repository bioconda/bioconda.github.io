.. title:: Package Recipe 'perl-perlio-gzip'
.. highlight: bash


perl-perlio-gzip
================

.. conda:recipe:: perl-perlio-gzip
   :replaces_section_title:

   PerlIO interface to gzip\/gunzip

   :homepage: http://metacpan.org/pod/PerlIO-gzip
   :license: perl_5
   :recipe: /`perl-perlio-gzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio-gzip/meta.yaml>`_

   


.. conda:package:: perl-perlio-gzip

   |downloads_perl-perlio-gzip| |docker_perl-perlio-gzip|

   :versions: 0.20, 0.19

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_perl-perlio-gzip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perlio-gzip

   and update with::

      conda update perl-perlio-gzip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-perlio-gzip


.. |required_by_perl-perlio-gzip| conda:required_by:: perl-perlio-gzip
.. |downloads_perl-perlio-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio-gzip.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-perlio-gzip| image:: https://quay.io/repository/biocontainers/perl-perlio-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-perlio-gzip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio-gzip/README.html

