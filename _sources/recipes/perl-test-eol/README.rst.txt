.. title:: Package Recipe 'perl-test-eol'
.. highlight: bash


perl-test-eol
=============

.. conda:recipe:: perl-test-eol
   :replaces_section_title:

   Check the correct line endings in your project

   :homepage: http://metacpan.org/release/Test-EOL
   :license: perl_5
   :recipe: /`perl-test-eol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-eol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-eol/meta.yaml>`_

   


.. conda:package:: perl-test-eol

   |downloads_perl-test-eol| |docker_perl-test-eol|

   :versions: 2.00, 1.6

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-test-eol|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-eol

   and update with::

      conda update perl-test-eol

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-eol


.. |required_by_perl-test-eol| conda:required_by:: perl-test-eol
.. |downloads_perl-test-eol| image:: https://img.shields.io/conda/dn/bioconda/perl-test-eol.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-eol| image:: https://quay.io/repository/biocontainers/perl-test-eol/status
   :target: https://quay.io/repository/biocontainers/perl-test-eol







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-eol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-eol/README.html

