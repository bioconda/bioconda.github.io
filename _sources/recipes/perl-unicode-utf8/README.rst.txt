.. title:: Package Recipe 'perl-unicode-utf8'
.. highlight: bash


perl-unicode-utf8
=================

.. conda:recipe:: perl-unicode-utf8
   :replaces_section_title:

   Encoding and decoding of UTF\-8 encoding form

   :homepage: http://metacpan.org/pod/Unicode::UTF8
   :license: perl_5
   :recipe: /`perl-unicode-utf8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8/meta.yaml>`_

   


.. conda:package:: perl-unicode-utf8

   |downloads_perl-unicode-utf8| |docker_perl-unicode-utf8|

   :versions: 0.62

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-unicode-utf8|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-unicode-utf8

   and update with::

      conda update perl-unicode-utf8

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-unicode-utf8


.. |required_by_perl-unicode-utf8| conda:required_by:: perl-unicode-utf8
.. |downloads_perl-unicode-utf8| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-utf8.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-unicode-utf8| image:: https://quay.io/repository/biocontainers/perl-unicode-utf8/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-utf8







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-utf8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-utf8/README.html

