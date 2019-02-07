.. title:: Package Recipe 'perl-apache-test'
.. highlight: bash


perl-apache-test
================

.. conda:recipe:: perl-apache-test
   :replaces_section_title:

   Special Tests Sequence Failure Finder

   :homepage: http://metacpan.org/pod/Apache::Test
   :license: unknown
   :recipe: /`perl-apache-test <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-apache-test>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-apache-test/meta.yaml>`_

   


.. conda:package:: perl-apache-test

   |downloads_perl-apache-test| |docker_perl-apache-test|

   :versions: 1.40

   :depends: :conda:package:`perl-pathtools`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-apache-test|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-apache-test

   and update with::

      conda update perl-apache-test

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-apache-test


.. |required_by_perl-apache-test| conda:required_by:: perl-apache-test
.. |downloads_perl-apache-test| image:: https://img.shields.io/conda/dn/bioconda/perl-apache-test.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-apache-test| image:: https://quay.io/repository/biocontainers/perl-apache-test/status
   :target: https://quay.io/repository/biocontainers/perl-apache-test







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-apache-test/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-apache-test/README.html

