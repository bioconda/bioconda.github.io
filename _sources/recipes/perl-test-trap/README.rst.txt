.. title:: Package Recipe 'perl-test-trap'
.. highlight: bash


perl-test-trap
==============

.. conda:recipe:: perl-test-trap
   :replaces_section_title:

   Trap exit codes\, exceptions\, output\, etc.

   :homepage: http://metacpan.org/pod/Test::Trap
   :license: perl_5
   :recipe: /`perl-test-trap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap/meta.yaml>`_

   


.. conda:package:: perl-test-trap

   |downloads_perl-test-trap| |docker_perl-test-trap|

   :versions: 0.3.3, 0.3.2

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-data-dump`  :conda:package:`perl-exporter`  :conda:package:`perl-file-temp`  :conda:package:`perl-lib`  :conda:package:`perl-version`  

   :required~by: |required_by_perl-test-trap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-trap

   and update with::

      conda update perl-test-trap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-trap


.. |required_by_perl-test-trap| conda:required_by:: perl-test-trap
.. |downloads_perl-test-trap| image:: https://img.shields.io/conda/dn/bioconda/perl-test-trap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-trap| image:: https://quay.io/repository/biocontainers/perl-test-trap/status
   :target: https://quay.io/repository/biocontainers/perl-test-trap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-trap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-trap/README.html

