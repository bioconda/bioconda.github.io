.. title:: Package Recipe 'perl-test-pod-coverage'
.. highlight: bash


perl-test-pod-coverage
======================

.. conda:recipe:: perl-test-pod-coverage/1.10
   :replaces_section_title:

   Check for pod coverage in your distribution

   :homepage: http://metacpan.org/pod/Test::Pod::Coverage
   :license: artistic_2
   :recipe: /`perl-test-pod-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage>`_/`1.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage/1.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage/1.10/meta.yaml>`_

   


.. conda:package:: perl-test-pod-coverage

   |downloads_perl-test-pod-coverage| |docker_perl-test-pod-coverage|

   :versions: 1.10

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  

   :required~by: |required_by_perl-test-pod-coverage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-pod-coverage

   and update with::

      conda update perl-test-pod-coverage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-pod-coverage


.. |required_by_perl-test-pod-coverage| conda:required_by:: perl-test-pod-coverage
.. |downloads_perl-test-pod-coverage| image:: https://img.shields.io/conda/dn/bioconda/perl-test-pod-coverage.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-pod-coverage| image:: https://quay.io/repository/biocontainers/perl-test-pod-coverage/status
   :target: https://quay.io/repository/biocontainers/perl-test-pod-coverage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-pod-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-pod-coverage/README.html

