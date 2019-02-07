.. title:: Package Recipe 'perl-datetime-format-strptime'
.. highlight: bash


perl-datetime-format-strptime
=============================

.. conda:recipe:: perl-datetime-format-strptime
   :replaces_section_title:

   Parse and format strp and strf time patterns

   :homepage: http://metacpan.org/release/DateTime-Format-Strptime
   :license: artistic_2
   :recipe: /`perl-datetime-format-strptime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime/meta.yaml>`_

   


.. conda:package:: perl-datetime-format-strptime

   |downloads_perl-datetime-format-strptime| |docker_perl-datetime-format-strptime|

   :versions: 1.75, 1.73

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-datetime`  :conda:package:`perl-datetime-locale` >=1.05 :conda:package:`perl-datetime-timezone`  :conda:package:`perl-exporter`  :conda:package:`perl-package-deprecationmanager`  :conda:package:`perl-params-validationcompiler`  :conda:package:`perl-parent`  :conda:package:`perl-specio`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-datetime-format-strptime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime-format-strptime

   and update with::

      conda update perl-datetime-format-strptime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-datetime-format-strptime


.. |required_by_perl-datetime-format-strptime| conda:required_by:: perl-datetime-format-strptime
.. |downloads_perl-datetime-format-strptime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-format-strptime.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-datetime-format-strptime| image:: https://quay.io/repository/biocontainers/perl-datetime-format-strptime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-format-strptime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html

