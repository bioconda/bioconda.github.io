.. title:: Package Recipe 'perl-libwww-perl'
.. highlight: bash


perl-libwww-perl
================

.. conda:recipe:: perl-libwww-perl
   :replaces_section_title:

   The World\-Wide Web library for Perl

   :homepage: http://metacpan.org/pod/libwww-perl
   :license: perl_5
   :recipe: /`perl-libwww-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-libwww-perl/meta.yaml>`_

   


.. conda:package:: perl-libwww-perl

   |downloads_perl-libwww-perl| |docker_perl-libwww-perl|

   :versions: 6.36, 6.15

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-digest-md5`  :conda:package:`perl-encode`  :conda:package:`perl-encode-locale`  :conda:package:`perl-file-listing`  :conda:package:`perl-html-parser`  :conda:package:`perl-http-cookies`  :conda:package:`perl-http-daemon`  :conda:package:`perl-http-date`  :conda:package:`perl-http-negotiate`  :conda:package:`perl-lwp-mediatypes`  :conda:package:`perl-mime-base64`  :conda:package:`perl-net-http` >=6.07 :conda:package:`perl-ntlm`  :conda:package:`perl-try-tiny`  :conda:package:`perl-uri`  :conda:package:`perl-www-robotrules`  

   :required~by: |required_by_perl-libwww-perl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-libwww-perl

   and update with::

      conda update perl-libwww-perl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-libwww-perl


.. |required_by_perl-libwww-perl| conda:required_by:: perl-libwww-perl
.. |downloads_perl-libwww-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libwww-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-libwww-perl| image:: https://quay.io/repository/biocontainers/perl-libwww-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libwww-perl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-libwww-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-libwww-perl/README.html

