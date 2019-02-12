.. title:: Package Recipe 'perl-extutils-config'
.. highlight: bash


perl-extutils-config
====================

.. conda:recipe:: perl-extutils-config
   :replaces_section_title:

   A wrapper for perl\'s configuration

   :homepage: http://metacpan.org/pod/ExtUtils::Config
   :license: perl_5
   :recipe: /`perl-extutils-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-config/meta.yaml>`_

   


.. conda:package:: perl-extutils-config

   |downloads_perl-extutils-config| |docker_perl-extutils-config|

   :versions: 0.008

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-extutils-config|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-config

   and update with::

      conda update perl-extutils-config

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-config


.. |required_by_perl-extutils-config| conda:required_by:: perl-extutils-config
.. |downloads_perl-extutils-config| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-config.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-config| image:: https://quay.io/repository/biocontainers/perl-extutils-config/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-config







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-config/README.html

