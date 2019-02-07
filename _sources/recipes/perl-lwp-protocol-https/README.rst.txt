.. title:: Package Recipe 'perl-lwp-protocol-https'
.. highlight: bash


perl-lwp-protocol-https
=======================

.. conda:recipe:: perl-lwp-protocol-https
   :replaces_section_title:

   Provide https support for LWP\:\:UserAgent

   :homepage: https://metacpan.org/pod/LWP::Protocol::https
   :license: Perl
   :recipe: /`perl-lwp-protocol-https <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https/meta.yaml>`_

   


.. conda:package:: perl-lwp-protocol-https

   |downloads_perl-lwp-protocol-https| |docker_perl-lwp-protocol-https|

   :versions: 6.07, 6.06

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-io-socket-ssl`  :conda:package:`perl-libwww-perl`  :conda:package:`perl-mozilla-ca`  :conda:package:`perl-net-http`  :conda:package:`perl-test-requiresinternet`  

   :required~by: |required_by_perl-lwp-protocol-https|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lwp-protocol-https

   and update with::

      conda update perl-lwp-protocol-https

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-lwp-protocol-https


.. |required_by_perl-lwp-protocol-https| conda:required_by:: perl-lwp-protocol-https
.. |downloads_perl-lwp-protocol-https| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-protocol-https.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-lwp-protocol-https| image:: https://quay.io/repository/biocontainers/perl-lwp-protocol-https/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-protocol-https







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html

