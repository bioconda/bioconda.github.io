.. title:: Package Recipe 'perl-crypt-openssl-random'
.. highlight: bash


perl-crypt-openssl-random
=========================

.. conda:recipe:: perl-crypt-openssl-random/0.11
   :replaces_section_title:

   OpenSSL\/LibreSSL pseudo\-random number generator access

   :homepage: http://sourceforge.net/projects/perl-openssl/
   :license: perl_5
   :recipe: /`perl-crypt-openssl-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-random

   |downloads_perl-crypt-openssl-random| |docker_perl-crypt-openssl-random|

   :versions: 0.11

   :depends: :conda:package:`openssl`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-crypt-openssl-random|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-openssl-random

   and update with::

      conda update perl-crypt-openssl-random

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-crypt-openssl-random


.. |required_by_perl-crypt-openssl-random| conda:required_by:: perl-crypt-openssl-random
.. |downloads_perl-crypt-openssl-random| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-random.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-random| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-random/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-random







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html

