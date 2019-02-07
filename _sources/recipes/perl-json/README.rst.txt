.. title:: Package Recipe 'perl-json'
.. highlight: bash


perl-json
=========

.. conda:recipe:: perl-json
   :replaces_section_title:

   JSON \(JavaScript Object Notation\) encoder\/decoder

   :homepage: http://metacpan.org/pod/JSON
   :license: perl_5
   :recipe: /`perl-json <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json/meta.yaml>`_

   


.. conda:package:: perl-json

   |downloads_perl-json| |docker_perl-json|

   :versions: 4.00, 2.97001, 2.90

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-json-xs` <3 

   :required~by: |required_by_perl-json|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json

   and update with::

      conda update perl-json

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-json


.. |required_by_perl-json| conda:required_by:: perl-json
.. |downloads_perl-json| image:: https://img.shields.io/conda/dn/bioconda/perl-json.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-json| image:: https://quay.io/repository/biocontainers/perl-json/status
   :target: https://quay.io/repository/biocontainers/perl-json







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json/README.html

