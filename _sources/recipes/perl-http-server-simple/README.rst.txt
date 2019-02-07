.. title:: Package Recipe 'perl-http-server-simple'
.. highlight: bash


perl-http-server-simple
=======================

.. conda:recipe:: perl-http-server-simple
   :replaces_section_title:

   Lightweight HTTP server

   :homepage: https://metacpan.org/pod/HTTP::Server::Simple
   :license: Perl_5
   :recipe: /`perl-http-server-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple/meta.yaml>`_

   


.. conda:package:: perl-http-server-simple

   |downloads_perl-http-server-simple| |docker_perl-http-server-simple|

   :versions: 0.52

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-cgi`  

   :required~by: |required_by_perl-http-server-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-server-simple

   and update with::

      conda update perl-http-server-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-server-simple


.. |required_by_perl-http-server-simple| conda:required_by:: perl-http-server-simple
.. |downloads_perl-http-server-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-http-server-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-server-simple| image:: https://quay.io/repository/biocontainers/perl-http-server-simple/status
   :target: https://quay.io/repository/biocontainers/perl-http-server-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-server-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-server-simple/README.html

