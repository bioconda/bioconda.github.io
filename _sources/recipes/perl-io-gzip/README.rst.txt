:orphan:  .. only available via index, not via toctree

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

   :versions: 0.20-2, 0.20-1, 0.20-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-gzip

   and update with::

      conda update perl-io-gzip

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-gzip:<tag>

   (see `perl-io-gzip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-gzip| image:: https://img.shields.io/conda/dn/bioconda/perl-io-gzip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-gzip
   :alt:   (downloads)
.. |docker_perl-io-gzip| image:: https://quay.io/repository/biocontainers/perl-io-gzip/status
   :target: https://quay.io/repository/biocontainers/perl-io-gzip
.. _`perl-io-gzip/tags`: https://quay.io/repository/biocontainers/perl-io-gzip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-gzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-gzip/README.html