.. title:: Package Recipe 'perl-test-simple'
.. highlight: bash


perl-test-simple
================

.. conda:recipe:: perl-test-simple
   :replaces_section_title:

   Basic utilities for writing tests.

   :homepage: http://metacpan.org/pod/Test-Simple
   :license: perl_5
   :recipe: /`perl-test-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-simple/meta.yaml>`_

   


.. conda:package:: perl-test-simple

   |downloads_perl-test-simple| |docker_perl-test-simple|

   :versions: 1.302156, 1.302141, 1.302140, 1.302075, 1.302052

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-file-temp`  :conda:package:`perl-storable`  

   :required~by: |required_by_perl-test-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-simple

   and update with::

      conda update perl-test-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-simple


.. |required_by_perl-test-simple| conda:required_by:: perl-test-simple
.. |downloads_perl-test-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-test-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-simple| image:: https://quay.io/repository/biocontainers/perl-test-simple/status
   :target: https://quay.io/repository/biocontainers/perl-test-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-simple/README.html

