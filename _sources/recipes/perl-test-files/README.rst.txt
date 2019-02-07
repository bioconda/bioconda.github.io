.. title:: Package Recipe 'perl-test-files'
.. highlight: bash


perl-test-files
===============

.. conda:recipe:: perl-test-files
   :replaces_section_title:

   A Test\:\:Builder based module to ease testing with files and dirs

   :homepage: http://metacpan.org/pod/Test::Files
   :license: unknown
   :recipe: /`perl-test-files <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-files>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-files/meta.yaml>`_

   


.. conda:package:: perl-test-files

   |downloads_perl-test-files| |docker_perl-test-files|

   :versions: 0.14

   :depends: :conda:package:`perl-algorithm-diff`  :conda:package:`perl-test-builder-tester`  :conda:package:`perl-test-simple`  :conda:package:`perl-text-diff`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-test-files|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-files

   and update with::

      conda update perl-test-files

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-files


.. |required_by_perl-test-files| conda:required_by:: perl-test-files
.. |downloads_perl-test-files| image:: https://img.shields.io/conda/dn/bioconda/perl-test-files.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-files| image:: https://quay.io/repository/biocontainers/perl-test-files/status
   :target: https://quay.io/repository/biocontainers/perl-test-files







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-files/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-files/README.html

