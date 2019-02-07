.. title:: Package Recipe 'perl-http-message'
.. highlight: bash


perl-http-message
=================

.. conda:recipe:: perl-http-message
   :replaces_section_title:

   HTTP style message \(base class\)

   :homepage: https://github.com/libwww-perl/HTTP-Message
   :license: perl_5
   :recipe: /`perl-http-message <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message/meta.yaml>`_

   


.. conda:package:: perl-http-message

   |downloads_perl-http-message| |docker_perl-http-message|

   :versions: 6.18, 6.11

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-compress-raw-zlib`  :conda:package:`perl-encode`  :conda:package:`perl-encode-locale`  :conda:package:`perl-exporter`  :conda:package:`perl-http-date`  :conda:package:`perl-io-html`  :conda:package:`perl-lwp-mediatypes`  :conda:package:`perl-mime-base64`  :conda:package:`perl-storable`  :conda:package:`perl-uri`  

   :required~by: |required_by_perl-http-message|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-message

   and update with::

      conda update perl-http-message

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-message


.. |required_by_perl-http-message| conda:required_by:: perl-http-message
.. |downloads_perl-http-message| image:: https://img.shields.io/conda/dn/bioconda/perl-http-message.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-message| image:: https://quay.io/repository/biocontainers/perl-http-message/status
   :target: https://quay.io/repository/biocontainers/perl-http-message







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-message/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-message/README.html

