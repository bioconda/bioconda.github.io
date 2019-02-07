.. title:: Package Recipe 'perl-datetime'
.. highlight: bash


perl-datetime
=============

.. conda:recipe:: perl-datetime/1.42
   :replaces_section_title:

   A date and time object for Perl

   :homepage: http://metacpan.org/release/DateTime
   :license: artistic_2
   :recipe: /`perl-datetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime>`_/`1.42 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/1.42>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/1.42/meta.yaml>`_

   


.. conda:package:: perl-datetime

   |downloads_perl-datetime| |docker_perl-datetime|

   :versions: 1.42

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-cpan-meta-check`  :conda:package:`perl-datetime-locale`  :conda:package:`perl-datetime-timezone`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-params-validationcompiler`  :conda:package:`perl-specio-exporter`  :conda:package:`perl-test-fatal`  :conda:package:`perl-try-tiny`  :conda:package:`perl-warnings-register`  :conda:package:`perl-xsloader`  

   :required~by: |required_by_perl-datetime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime

   and update with::

      conda update perl-datetime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-datetime


.. |required_by_perl-datetime| conda:required_by:: perl-datetime
.. |downloads_perl-datetime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-datetime| image:: https://quay.io/repository/biocontainers/perl-datetime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime/README.html

