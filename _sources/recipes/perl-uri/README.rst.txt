.. title:: Package Recipe 'perl-uri'
.. highlight: bash


perl-uri
========

.. conda:recipe:: perl-uri
   :replaces_section_title:

   Uniform Resource Identifiers \(absolute and relative\)

   :homepage: https://github.com/libwww-perl/URI
   :license: perl_5
   :recipe: /`perl-uri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri/meta.yaml>`_

   


.. conda:package:: perl-uri

   |downloads_perl-uri| |docker_perl-uri|

   :versions: 1.76, 1.74, 1.71, 1.69

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-business-isbn`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-data-dumper`  :conda:package:`perl-encode`  :conda:package:`perl-exporter`  :conda:package:`perl-mime-base64`  :conda:package:`perl-parent`  

   :required~by: |required_by_perl-uri|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-uri

   and update with::

      conda update perl-uri

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-uri


.. |required_by_perl-uri| conda:required_by:: perl-uri
.. |downloads_perl-uri| image:: https://img.shields.io/conda/dn/bioconda/perl-uri.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-uri| image:: https://quay.io/repository/biocontainers/perl-uri/status
   :target: https://quay.io/repository/biocontainers/perl-uri







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-uri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-uri/README.html

