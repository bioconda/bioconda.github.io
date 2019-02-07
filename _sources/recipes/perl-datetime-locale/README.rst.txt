.. title:: Package Recipe 'perl-datetime-locale'
.. highlight: bash


perl-datetime-locale
====================

.. conda:recipe:: perl-datetime-locale/1.12
   :replaces_section_title:

   Localization support for DateTime.pm

   :homepage: http://metacpan.org/release/DateTime-Locale
   :license: perl_5
   :recipe: /`perl-datetime-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale>`_/`1.12 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale/1.12>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale/1.12/meta.yaml>`_

   


.. conda:package:: perl-datetime-locale

   |downloads_perl-datetime-locale| |docker_perl-datetime-locale|

   :versions: 1.12

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-dist-checkconflicts`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-params-validationcompiler`  :conda:package:`perl-specio-exporter`  

   :required~by: |required_by_perl-datetime-locale|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime-locale

   and update with::

      conda update perl-datetime-locale

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-datetime-locale


.. |required_by_perl-datetime-locale| conda:required_by:: perl-datetime-locale
.. |downloads_perl-datetime-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-locale.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-datetime-locale| image:: https://quay.io/repository/biocontainers/perl-datetime-locale/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-locale







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-locale/README.html

