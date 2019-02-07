.. title:: Package Recipe 'perl-extutils-makemaker'
.. highlight: bash


perl-extutils-makemaker
=======================

.. conda:recipe:: perl-extutils-makemaker
   :replaces_section_title:

   Create a module Makefile

   :homepage: https://metacpan.org/release/ExtUtils-MakeMaker
   :license: perl_5
   :recipe: /`perl-extutils-makemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-makemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-makemaker/meta.yaml>`_

   


.. conda:package:: perl-extutils-makemaker

   |downloads_perl-extutils-makemaker| |docker_perl-extutils-makemaker|

   :versions: 7.34, 7.24, 6.66

   :depends: :conda:package:`perl` >=5.26.2,<5.27.0a0 

   :required~by: |required_by_perl-extutils-makemaker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-makemaker

   and update with::

      conda update perl-extutils-makemaker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-makemaker


.. |required_by_perl-extutils-makemaker| conda:required_by:: perl-extutils-makemaker
.. |downloads_perl-extutils-makemaker| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-makemaker.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-makemaker| image:: https://quay.io/repository/biocontainers/perl-extutils-makemaker/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-makemaker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-makemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-makemaker/README.html

