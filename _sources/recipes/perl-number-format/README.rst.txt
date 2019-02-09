.. title:: Package Recipe 'perl-number-format'
.. highlight: bash


perl-number-format
==================

.. conda:recipe:: perl-number-format
   :replaces_section_title:

   Perl extension for formatting numbers

   :homepage: http://metacpan.org/pod/Number::Format
   :license: perl_5
   :recipe: /`perl-number-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-format/meta.yaml>`_

   


.. conda:package:: perl-number-format

   |downloads_perl-number-format| |docker_perl-number-format|

   :versions: 1.75

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-number-format|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-number-format

   and update with::

      conda update perl-number-format

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-number-format


.. |required_by_perl-number-format| conda:required_by:: perl-number-format
.. |downloads_perl-number-format| image:: https://img.shields.io/conda/dn/bioconda/perl-number-format.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-number-format| image:: https://quay.io/repository/biocontainers/perl-number-format/status
   :target: https://quay.io/repository/biocontainers/perl-number-format







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-format/README.html

