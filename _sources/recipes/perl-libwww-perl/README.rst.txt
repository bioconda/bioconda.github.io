:orphan:  .. only available via index, not via toctree

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

   :versions: 6.36-1, 6.36-0, 6.15-1, 6.15-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-base: 
   
   :depends perl-digest-md5: 
   
   :depends perl-encode: 
   
   :depends perl-encode-locale: 
   
   :depends perl-file-listing: 
   
   :depends perl-html-parser: 
   
   :depends perl-http-cookies: 
   
   :depends perl-http-daemon: 
   
   :depends perl-http-date: 
   
   :depends perl-http-negotiate: 
   
   :depends perl-lwp-mediatypes: 
   
   :depends perl-mime-base64: 
   
   :depends perl-net-http: >=6.07
   
   :depends perl-ntlm: 
   
   :depends perl-try-tiny: 
   
   :depends perl-uri: 
   
   :depends perl-www-robotrules: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-libwww-perl

   and update with::

      conda update perl-libwww-perl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-libwww-perl:<tag>

   (see `perl-libwww-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-libwww-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-libwww-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-libwww-perl| image:: https://quay.io/repository/biocontainers/perl-libwww-perl/status
   :target: https://quay.io/repository/biocontainers/perl-libwww-perl
.. _`perl-libwww-perl/tags`: https://quay.io/repository/biocontainers/perl-libwww-perl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-libwww-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-libwww-perl/README.html