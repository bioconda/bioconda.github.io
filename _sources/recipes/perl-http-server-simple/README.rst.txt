:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-server-simple'
.. highlight: bash

perl-http-server-simple
=======================

.. conda:recipe:: perl-http-server-simple
   :replaces_section_title:
   :noindex:

   Lightweight HTTP server

   :homepage: https://metacpan.org/pod/HTTP::Server::Simple
   :license: Perl_5
   :recipe: /`perl-http-server-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple/meta.yaml>`_

   


.. conda:package:: perl-http-server-simple

   |downloads_perl-http-server-simple| |docker_perl-http-server-simple|

   :versions:
      
      

      ``0.52-2``,  ``0.52-1``,  ``0.52-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-cgi: 
   :depends perl-socket: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-server-simple

   and update with::

      conda update perl-http-server-simple

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-server-simple:<tag>

   (see `perl-http-server-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-server-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-http-server-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-server-simple
   :alt:   (downloads)
.. |docker_perl-http-server-simple| image:: https://quay.io/repository/biocontainers/perl-http-server-simple/status
   :target: https://quay.io/repository/biocontainers/perl-http-server-simple
.. _`perl-http-server-simple/tags`: https://quay.io/repository/biocontainers/perl-http-server-simple?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-server-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-server-simple/README.html