.. title:: Package Recipe 'perl-http-cookies'
.. highlight: bash


perl-http-cookies
=================

.. conda:recipe:: perl-http-cookies
   :replaces_section_title:

   HTTP cookie jars

   :homepage: https://github.com/libwww-perl/http-cookies
   :license: perl_5
   :recipe: /`perl-http-cookies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies/meta.yaml>`_

   


.. conda:package:: perl-http-cookies

   |downloads_perl-http-cookies| |docker_perl-http-cookies|

   :versions: 6.04, 6.01

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-http-date`  :conda:package:`perl-http-message`  :conda:package:`perl-time-local`  

   :required~by: |required_by_perl-http-cookies|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-cookies

   and update with::

      conda update perl-http-cookies

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-cookies


.. |required_by_perl-http-cookies| conda:required_by:: perl-http-cookies
.. |downloads_perl-http-cookies| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookies.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-cookies| image:: https://quay.io/repository/biocontainers/perl-http-cookies/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookies







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-cookies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-cookies/README.html

