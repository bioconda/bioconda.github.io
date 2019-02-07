.. title:: Package Recipe 'perl-extutils-helpers'
.. highlight: bash


perl-extutils-helpers
=====================

.. conda:recipe:: perl-extutils-helpers
   :replaces_section_title:

   Various portability utilities for module builders

   :homepage: http://metacpan.org/pod/ExtUtils::Helpers
   :license: perl_5
   :recipe: /`perl-extutils-helpers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-helpers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-helpers/meta.yaml>`_

   


.. conda:package:: perl-extutils-helpers

   |downloads_perl-extutils-helpers| |docker_perl-extutils-helpers|

   :versions: 0.026, 0.022

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-text-parsewords`  

   :required~by: |required_by_perl-extutils-helpers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-helpers

   and update with::

      conda update perl-extutils-helpers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-helpers


.. |required_by_perl-extutils-helpers| conda:required_by:: perl-extutils-helpers
.. |downloads_perl-extutils-helpers| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-helpers.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-helpers| image:: https://quay.io/repository/biocontainers/perl-extutils-helpers/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-helpers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-helpers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-helpers/README.html

