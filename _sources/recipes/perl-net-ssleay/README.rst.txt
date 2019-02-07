.. title:: Package Recipe 'perl-net-ssleay'
.. highlight: bash


perl-net-ssleay
===============

.. conda:recipe:: perl-net-ssleay
   :replaces_section_title:

   Perl extension for using OpenSSL

   :homepage: http://metacpan.org/pod/Net::SSLeay
   :license: perl_5
   :recipe: /`perl-net-ssleay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ssleay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ssleay/meta.yaml>`_

   


.. conda:package:: perl-net-ssleay

   |downloads_perl-net-ssleay| |docker_perl-net-ssleay|

   :versions: 1.85, 1.84, 1.74, 1.72

   :depends: :conda:package:`openssl` >=1.0.2p,<1.0.3a :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-mime-base64`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_perl-net-ssleay|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-net-ssleay

   and update with::

      conda update perl-net-ssleay

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-net-ssleay


.. |required_by_perl-net-ssleay| conda:required_by:: perl-net-ssleay
.. |downloads_perl-net-ssleay| image:: https://img.shields.io/conda/dn/bioconda/perl-net-ssleay.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-net-ssleay| image:: https://quay.io/repository/biocontainers/perl-net-ssleay/status
   :target: https://quay.io/repository/biocontainers/perl-net-ssleay







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-ssleay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-ssleay/README.html

