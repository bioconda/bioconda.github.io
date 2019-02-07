.. title:: Package Recipe 'perl-extutils-cbuilder'
.. highlight: bash


perl-extutils-cbuilder
======================

.. conda:recipe:: perl-extutils-cbuilder/0.280230
   :replaces_section_title:

   Compile and link C code for Perl modules

   :homepage: http://search.cpan.org/dist/ExtUtils-CBuilder
   :license: perl_5
   :recipe: /`perl-extutils-cbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder>`_/`0.280230 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230/meta.yaml>`_

   


.. conda:package:: perl-extutils-cbuilder

   |downloads_perl-extutils-cbuilder| |docker_perl-extutils-cbuilder|

   :versions: 0.280230

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-file-temp`  :conda:package:`perl-ipc-cmd`  :conda:package:`perl-perl-ostype`  :conda:package:`perl-text-parsewords`  

   :required~by: |required_by_perl-extutils-cbuilder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-cbuilder

   and update with::

      conda update perl-extutils-cbuilder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-cbuilder


.. |required_by_perl-extutils-cbuilder| conda:required_by:: perl-extutils-cbuilder
.. |downloads_perl-extutils-cbuilder| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-cbuilder| image:: https://quay.io/repository/biocontainers/perl-extutils-cbuilder/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cbuilder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html

