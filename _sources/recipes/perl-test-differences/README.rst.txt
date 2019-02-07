.. title:: Package Recipe 'perl-test-differences'
.. highlight: bash


perl-test-differences
=====================

.. conda:recipe:: perl-test-differences
   :replaces_section_title:

   Test strings and data structures and show differences if not ok

   :homepage: http://metacpan.org/pod/Test-Differences
   :license: Perl
   :recipe: /`perl-test-differences <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-differences>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-differences/meta.yaml>`_

   


.. conda:package:: perl-test-differences

   |downloads_perl-test-differences| |docker_perl-test-differences|

   :versions: 0.64

   :depends: :conda:package:`perl-capture-tiny`  :conda:package:`perl-text-diff`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-test-differences|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-differences

   and update with::

      conda update perl-test-differences

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-differences


.. |required_by_perl-test-differences| conda:required_by:: perl-test-differences
.. |downloads_perl-test-differences| image:: https://img.shields.io/conda/dn/bioconda/perl-test-differences.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-differences| image:: https://quay.io/repository/biocontainers/perl-test-differences/status
   :target: https://quay.io/repository/biocontainers/perl-test-differences







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-differences/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-differences/README.html

