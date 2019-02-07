.. title:: Package Recipe 'perl-cpan-meta-validator'
.. highlight: bash


perl-cpan-meta-validator
========================

.. conda:recipe:: perl-cpan-meta-validator/2.140640
   :replaces_section_title:

   validate CPAN distribution metadata structures

   :homepage: http://metacpan.org/pod/CPAN::Meta::Validator
   :license: perl_5
   :recipe: /`perl-cpan-meta-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-validator>`_/`2.140640 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-validator/2.140640>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-validator/2.140640/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-validator

   |downloads_perl-cpan-meta-validator| |docker_perl-cpan-meta-validator|

   :versions: 2.140640

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-cpan-meta-validator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-meta-validator

   and update with::

      conda update perl-cpan-meta-validator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cpan-meta-validator


.. |required_by_perl-cpan-meta-validator| conda:required_by:: perl-cpan-meta-validator
.. |downloads_perl-cpan-meta-validator| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-validator.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cpan-meta-validator| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-validator/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-validator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-validator/README.html

