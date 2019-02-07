.. title:: Package Recipe 'perl-io-zlib'
.. highlight: bash


perl-io-zlib
============

.. conda:recipe:: perl-io-zlib
   :replaces_section_title:

   IO\:\: style interface to Compress\:\:Zlib

   :homepage: http://metacpan.org/pod/IO::Zlib
   :license: unknown
   :recipe: /`perl-io-zlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-zlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-zlib/meta.yaml>`_

   


.. conda:package:: perl-io-zlib

   |downloads_perl-io-zlib| |docker_perl-io-zlib|

   :versions: 1.10

   :depends: :conda:package:`perl-io-compress`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-io-zlib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-zlib

   and update with::

      conda update perl-io-zlib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-zlib


.. |required_by_perl-io-zlib| conda:required_by:: perl-io-zlib
.. |downloads_perl-io-zlib| image:: https://img.shields.io/conda/dn/bioconda/perl-io-zlib.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-zlib| image:: https://quay.io/repository/biocontainers/perl-io-zlib/status
   :target: https://quay.io/repository/biocontainers/perl-io-zlib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-zlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-zlib/README.html

