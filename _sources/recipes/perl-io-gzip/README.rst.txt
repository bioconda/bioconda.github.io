.. title:: Package Recipe 'perl-io-gzip'
.. highlight: bash


perl-io-gzip
============

.. conda:recipe:: perl-io-gzip
   :replaces_section_title:

   Perl extension to provide a PerlIO layer to gzip\/gunzip

   :homepage: https://metacpan.org/pod/PerlIO::gzip
   :license: perl_5
   :recipe: /`perl-io-gzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-gzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-gzip/meta.yaml>`_

   


.. conda:package:: perl-io-gzip

   |downloads_perl-io-gzip| |docker_perl-io-gzip|

   :versions: 0.20

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_perl-io-gzip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-gzip

   and update with::

      conda update perl-io-gzip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-gzip


.. |required_by_perl-io-gzip| conda:required_by:: perl-io-gzip
.. |downloads_perl-io-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-io-gzip.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-gzip| image:: https://quay.io/repository/biocontainers/perl-io-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-io-gzip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-gzip/README.html

