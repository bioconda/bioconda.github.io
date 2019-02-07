.. title:: Package Recipe 'perl-test-without-module'
.. highlight: bash


perl-test-without-module
========================

.. conda:recipe:: perl-test-without-module
   :replaces_section_title:

   Test fallback behaviour in absence of modules

   :homepage: http://metacpan.org/pod/Test-Without-Module
   :license: perl_5
   :recipe: /`perl-test-without-module <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-without-module>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-without-module/meta.yaml>`_

   


.. conda:package:: perl-test-without-module

   |downloads_perl-test-without-module| |docker_perl-test-without-module|

   :versions: 0.20

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-test-without-module|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-without-module

   and update with::

      conda update perl-test-without-module

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-without-module


.. |required_by_perl-test-without-module| conda:required_by:: perl-test-without-module
.. |downloads_perl-test-without-module| image:: https://img.shields.io/conda/dn/bioconda/perl-test-without-module.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-without-module| image:: https://quay.io/repository/biocontainers/perl-test-without-module/status
   :target: https://quay.io/repository/biocontainers/perl-test-without-module







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-without-module/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-without-module/README.html

