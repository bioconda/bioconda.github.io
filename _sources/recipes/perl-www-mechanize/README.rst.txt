:orphan:  .. only available via index, not via toctree

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

   :versions: 1.91-1, 1.91-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-cgi: 
   :depends perl-encode-locale: 
   :depends perl-html-form: 
   :depends perl-html-tree: 
   :depends perl-http-server-simple: 
   :depends perl-libwww-perl: 
   :depends perl-module-build: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-www-mechanize

   and update with::

      conda update perl-www-mechanize

   or use the docker container::

      docker pull quay.io/biocontainers/perl-www-mechanize:<tag>

   (see `perl-www-mechanize/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-www-mechanize| image:: https://img.shields.io/conda/dn/bioconda/perl-www-mechanize.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-www-mechanize| image:: https://quay.io/repository/biocontainers/perl-www-mechanize/status
   :target: https://quay.io/repository/biocontainers/perl-www-mechanize
.. _`perl-www-mechanize/tags`: https://quay.io/repository/biocontainers/perl-www-mechanize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-www-mechanize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-www-mechanize/README.html