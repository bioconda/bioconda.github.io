.. title:: Package Recipe 'perl-class-methodmaker'
.. highlight: bash


perl-class-methodmaker
======================

.. conda:recipe:: perl-class-methodmaker
   :replaces_section_title:

   Create generic methods for OO Perl

   :homepage: http://search.cpan.org/~schwigon/Class-MethodMaker-2.24/
   :license: perl_5
   :recipe: /`perl-class-methodmaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-methodmaker/meta.yaml>`_

   


.. conda:package:: perl-class-methodmaker

   |downloads_perl-class-methodmaker| |docker_perl-class-methodmaker|

   :versions: 2.24

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-getopt-long`  :conda:package:`perl-pod-escapes`  :conda:package:`perl-test`  

   :required~by: |required_by_perl-class-methodmaker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-methodmaker

   and update with::

      conda update perl-class-methodmaker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-class-methodmaker


.. |required_by_perl-class-methodmaker| conda:required_by:: perl-class-methodmaker
.. |downloads_perl-class-methodmaker| image:: https://img.shields.io/conda/dn/bioconda/perl-class-methodmaker.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-methodmaker| image:: https://quay.io/repository/biocontainers/perl-class-methodmaker/status
   :target: https://quay.io/repository/biocontainers/perl-class-methodmaker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-methodmaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-methodmaker/README.html

