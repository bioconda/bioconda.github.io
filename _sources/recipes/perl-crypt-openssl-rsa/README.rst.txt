.. title:: Package Recipe 'perl-crypt-openssl-rsa'
.. highlight: bash


perl-crypt-openssl-rsa
======================

.. conda:recipe:: perl-crypt-openssl-rsa/0.28
   :replaces_section_title:

   RSA encoding and decoding\, using the openSSL libraries

   :homepage: https://metacpan.org/release/Crypt-OpenSSL-RSA
   :license: perl_5
   :recipe: /`perl-crypt-openssl-rsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa>`_/`0.28 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa/0.28>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa/0.28/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-rsa

   |downloads_perl-crypt-openssl-rsa| |docker_perl-crypt-openssl-rsa|

   :versions: 0.28

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-crypt-openssl-random`  

   :required~by: |required_by_perl-crypt-openssl-rsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-openssl-rsa

   and update with::

      conda update perl-crypt-openssl-rsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-crypt-openssl-rsa


.. |required_by_perl-crypt-openssl-rsa| conda:required_by:: perl-crypt-openssl-rsa
.. |downloads_perl-crypt-openssl-rsa| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-rsa.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-rsa| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html

