.. title:: Package Recipe 'perl-forks'
.. highlight: bash


perl-forks
==========

.. conda:recipe:: perl-forks
   :replaces_section_title:

   drop\-in replacement for Perl threads using fork\(\)

   :homepage: http://search.cpan.org/~rybskej/forks/lib/forks.pm
   :license: perl_5
   :recipe: /`perl-forks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks/meta.yaml>`_

   


.. conda:package:: perl-forks

   |downloads_perl-forks| |docker_perl-forks|

   :versions: 0.36

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-forks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-forks

   and update with::

      conda update perl-forks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-forks


.. |required_by_perl-forks| conda:required_by:: perl-forks
.. |downloads_perl-forks| image:: https://img.shields.io/conda/dn/bioconda/perl-forks.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-forks| image:: https://quay.io/repository/biocontainers/perl-forks/status
   :target: https://quay.io/repository/biocontainers/perl-forks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-forks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-forks/README.html

