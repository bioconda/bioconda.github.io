.. title:: Package Recipe 'perl-net-http'
.. highlight: bash


perl-net-http
=============

.. conda:recipe:: perl-net-http
   :replaces_section_title:

   Low\-level HTTP connection \(client\)

   :homepage: https://github.com/libwww-perl/Net-HTTP
   :license: perl_5
   :recipe: /`perl-net-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http/meta.yaml>`_

   


.. conda:package:: perl-net-http

   |downloads_perl-net-http| |docker_perl-net-http|

   :versions: 6.18, 6.09

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-compress-raw-zlib`  :conda:package:`perl-io-socket-ssl`  :conda:package:`perl-uri`  

   :required~by: |required_by_perl-net-http|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-net-http

   and update with::

      conda update perl-net-http

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-net-http


.. |required_by_perl-net-http| conda:required_by:: perl-net-http
.. |downloads_perl-net-http| image:: https://img.shields.io/conda/dn/bioconda/perl-net-http.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-net-http| image:: https://quay.io/repository/biocontainers/perl-net-http/status
   :target: https://quay.io/repository/biocontainers/perl-net-http







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-http/README.html

