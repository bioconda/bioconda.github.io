.. title:: Package Recipe 'perl-pod-coverage'
.. highlight: bash


perl-pod-coverage
=================

.. conda:recipe:: perl-pod-coverage/0.23
   :replaces_section_title:

   Checks if the documentation of a module is comprehensive

   :homepage: http://metacpan.org/pod/Pod::Coverage
   :license: unknown
   :recipe: /`perl-pod-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage/0.23/meta.yaml>`_

   


.. conda:package:: perl-pod-coverage

   |downloads_perl-pod-coverage| |docker_perl-pod-coverage|

   :versions: 0.23

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-devel-symdump`  :conda:package:`perl-pod-parser`  

   :required~by: |required_by_perl-pod-coverage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-coverage

   and update with::

      conda update perl-pod-coverage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-coverage


.. |required_by_perl-pod-coverage| conda:required_by:: perl-pod-coverage
.. |downloads_perl-pod-coverage| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-coverage.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-coverage| image:: https://quay.io/repository/biocontainers/perl-pod-coverage/status
   :target: https://quay.io/repository/biocontainers/perl-pod-coverage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-coverage/README.html

