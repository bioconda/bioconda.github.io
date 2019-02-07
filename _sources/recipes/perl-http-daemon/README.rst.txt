.. title:: Package Recipe 'perl-http-daemon'
.. highlight: bash


perl-http-daemon
================

.. conda:recipe:: perl-http-daemon
   :replaces_section_title:

   a simple http server class

   :homepage: http://metacpan.org/pod/HTTP-Daemon
   :license: perl_5
   :recipe: /`perl-http-daemon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon/meta.yaml>`_

   


.. conda:package:: perl-http-daemon

   |downloads_perl-http-daemon| |docker_perl-http-daemon|

   :versions: 6.01

   :depends: :conda:package:`perl-http-date`  :conda:package:`perl-http-message`  :conda:package:`perl-lwp-mediatypes`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-http-daemon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-daemon

   and update with::

      conda update perl-http-daemon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-daemon


.. |required_by_perl-http-daemon| conda:required_by:: perl-http-daemon
.. |downloads_perl-http-daemon| image:: https://img.shields.io/conda/dn/bioconda/perl-http-daemon.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-daemon| image:: https://quay.io/repository/biocontainers/perl-http-daemon/status
   :target: https://quay.io/repository/biocontainers/perl-http-daemon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-daemon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-daemon/README.html

