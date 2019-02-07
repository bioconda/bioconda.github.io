.. title:: Package Recipe 'perl-test'
.. highlight: bash


perl-test
=========

.. conda:recipe:: perl-test/1.26
   :replaces_section_title:

   provides a simple framework for writing test scripts

   :homepage: http://metacpan.org/pod/Test
   :license: unknown
   :recipe: /`perl-test <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test>`_/`1.26 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test/1.26>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test/1.26/meta.yaml>`_

   


.. conda:package:: perl-test

   |downloads_perl-test| |docker_perl-test|

   :versions: 1.26

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-test-harness`  

   :required~by: |required_by_perl-test|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test

   and update with::

      conda update perl-test

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test


.. |required_by_perl-test| conda:required_by:: perl-test
.. |downloads_perl-test| image:: https://img.shields.io/conda/dn/bioconda/perl-test.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test| image:: https://quay.io/repository/biocontainers/perl-test/status
   :target: https://quay.io/repository/biocontainers/perl-test







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test/README.html

