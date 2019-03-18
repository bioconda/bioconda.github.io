:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-builder-tester'
.. highlight: bash

perl-test-builder-tester
========================

.. conda:recipe:: perl-test-builder-tester
   :replaces_section_title:

   test testsuites that have been built with Test\:\:Builder

   :homepage: http://metacpan.org/pod/Test::Builder::Tester
   :license: unknown
   :recipe: /`perl-test-builder-tester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-builder-tester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-builder-tester/meta.yaml>`_

   


.. conda:package:: perl-test-builder-tester

   |downloads_perl-test-builder-tester| |docker_perl-test-builder-tester|

   :versions: 1.23_002-1, 1.23_002-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-builder-tester

   and update with::

      conda update perl-test-builder-tester

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-builder-tester:<tag>

   (see `perl-test-builder-tester/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-builder-tester| image:: https://img.shields.io/conda/dn/bioconda/perl-test-builder-tester.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-builder-tester| image:: https://quay.io/repository/biocontainers/perl-test-builder-tester/status
   :target: https://quay.io/repository/biocontainers/perl-test-builder-tester
.. _`perl-test-builder-tester/tags`: https://quay.io/repository/biocontainers/perl-test-builder-tester?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-builder-tester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-builder-tester/README.html