.. title:: Package Recipe 'perl-test-cpan-meta'
.. highlight: bash


perl-test-cpan-meta
===================

.. conda:recipe:: perl-test-cpan-meta
   :replaces_section_title:

   Validate your CPAN META.json files

   :homepage: http://metacpan.org/pod/Test-CPAN-Meta
   :license: artistic_2
   :recipe: /`perl-test-cpan-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta/meta.yaml>`_

   


.. conda:package:: perl-test-cpan-meta

   |downloads_perl-test-cpan-meta| |docker_perl-test-cpan-meta|

   :versions: 0.25

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-test-cpan-meta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-cpan-meta

   and update with::

      conda update perl-test-cpan-meta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-cpan-meta


.. |required_by_perl-test-cpan-meta| conda:required_by:: perl-test-cpan-meta
.. |downloads_perl-test-cpan-meta| image:: https://img.shields.io/conda/dn/bioconda/perl-test-cpan-meta.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-cpan-meta| image:: https://quay.io/repository/biocontainers/perl-test-cpan-meta/status
   :target: https://quay.io/repository/biocontainers/perl-test-cpan-meta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html

