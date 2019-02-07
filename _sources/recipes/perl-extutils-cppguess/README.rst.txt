.. title:: Package Recipe 'perl-extutils-cppguess'
.. highlight: bash


perl-extutils-cppguess
======================

.. conda:recipe:: perl-extutils-cppguess
   :replaces_section_title:

   guess C\+\+ compiler and flags

   :homepage: http://metacpan.org/pod/ExtUtils::CppGuess
   :license: perl_5
   :recipe: /`perl-extutils-cppguess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cppguess/meta.yaml>`_

   


.. conda:package:: perl-extutils-cppguess

   |downloads_perl-extutils-cppguess| |docker_perl-extutils-cppguess|

   :versions: 0.12

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-capture-tiny`  

   :required~by: |required_by_perl-extutils-cppguess|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-cppguess

   and update with::

      conda update perl-extutils-cppguess

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-cppguess


.. |required_by_perl-extutils-cppguess| conda:required_by:: perl-extutils-cppguess
.. |downloads_perl-extutils-cppguess| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cppguess.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-cppguess| image:: https://quay.io/repository/biocontainers/perl-extutils-cppguess/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cppguess







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cppguess/README.html

