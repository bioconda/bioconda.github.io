.. title:: Package Recipe 'perl-json-parse'
.. highlight: bash


perl-json-parse
===============

.. conda:recipe:: perl-json-parse
   :replaces_section_title:

   Read JSON into a Perl variable

   :homepage: http://metacpan.org/pod/JSON::Parse
   :license: perl_5
   :recipe: /`perl-json-parse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse/meta.yaml>`_

   


.. conda:package:: perl-json-parse

   |downloads_perl-json-parse| |docker_perl-json-parse|

   :versions: 0.55, 0.49

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-json-parse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-parse

   and update with::

      conda update perl-json-parse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-json-parse


.. |required_by_perl-json-parse| conda:required_by:: perl-json-parse
.. |downloads_perl-json-parse| image:: https://img.shields.io/conda/dn/bioconda/perl-json-parse.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-json-parse| image:: https://quay.io/repository/biocontainers/perl-json-parse/status
   :target: https://quay.io/repository/biocontainers/perl-json-parse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-parse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-parse/README.html

