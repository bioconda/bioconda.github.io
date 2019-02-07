.. title:: Package Recipe 'perl-json-create'
.. highlight: bash


perl-json-create
================

.. conda:recipe:: perl-json-create
   :replaces_section_title:

   fast\, minimal\, UTF\-8\-only serialization of data to JSON

   :homepage: http://metacpan.org/pod/JSON::Create
   :license: perl_5
   :recipe: /`perl-json-create <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create/meta.yaml>`_

   


.. conda:package:: perl-json-create

   |downloads_perl-json-create| |docker_perl-json-create|

   :versions: 0.24

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-json-create|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-create

   and update with::

      conda update perl-json-create

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-json-create


.. |required_by_perl-json-create| conda:required_by:: perl-json-create
.. |downloads_perl-json-create| image:: https://img.shields.io/conda/dn/bioconda/perl-json-create.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-json-create| image:: https://quay.io/repository/biocontainers/perl-json-create/status
   :target: https://quay.io/repository/biocontainers/perl-json-create







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-create/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-create/README.html

