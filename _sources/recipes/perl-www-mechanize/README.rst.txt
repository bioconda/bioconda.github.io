.. title:: Package Recipe 'perl-www-mechanize'
.. highlight: bash


perl-www-mechanize
==================

.. conda:recipe:: perl-www-mechanize
   :replaces_section_title:

   Handy web browsing in a Perl object

   :homepage: https://metacpan.org/pod/WWW::Mechanize
   :license: perl_5
   :recipe: /`perl-www-mechanize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-mechanize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-www-mechanize/meta.yaml>`_

   


.. conda:package:: perl-www-mechanize

   |downloads_perl-www-mechanize| |docker_perl-www-mechanize|

   :versions: 1.91

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-cgi`  :conda:package:`perl-encode-locale`  :conda:package:`perl-html-form`  :conda:package:`perl-html-tree`  :conda:package:`perl-http-server-simple`  :conda:package:`perl-libwww-perl`  :conda:package:`perl-module-build`  

   :required~by: |required_by_perl-www-mechanize|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-www-mechanize

   and update with::

      conda update perl-www-mechanize

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-www-mechanize


.. |required_by_perl-www-mechanize| conda:required_by:: perl-www-mechanize
.. |downloads_perl-www-mechanize| image:: https://img.shields.io/conda/dn/bioconda/perl-www-mechanize.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-www-mechanize| image:: https://quay.io/repository/biocontainers/perl-www-mechanize/status
   :target: https://quay.io/repository/biocontainers/perl-www-mechanize







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-www-mechanize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-www-mechanize/README.html

