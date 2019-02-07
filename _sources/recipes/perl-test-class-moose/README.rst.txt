.. title:: Package Recipe 'perl-test-class-moose'
.. highlight: bash


perl-test-class-moose
=====================

.. conda:recipe:: perl-test-class-moose
   :replaces_section_title:

   Serious testing for serious Perl

   :homepage: http://metacpan.org/release/Test-Class-Moose/
   :license: perl_5
   :recipe: /`perl-test-class-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose/meta.yaml>`_

   


.. conda:package:: perl-test-class-moose

   |downloads_perl-test-class-moose| |docker_perl-test-class-moose|

   :versions: 0.96, 0.95, 0.94, 0.80

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-import-into`  :conda:package:`perl-json-maybexs`  :conda:package:`perl-list-someutils`  :conda:package:`perl-module-runtime`  :conda:package:`perl-module-util`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-getopt`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-package-deprecationmanager`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-sub-attribute`  :conda:package:`perl-test-most`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-test-class-moose|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-class-moose

   and update with::

      conda update perl-test-class-moose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-class-moose


.. |required_by_perl-test-class-moose| conda:required_by:: perl-test-class-moose
.. |downloads_perl-test-class-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-test-class-moose.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-class-moose| image:: https://quay.io/repository/biocontainers/perl-test-class-moose/status
   :target: https://quay.io/repository/biocontainers/perl-test-class-moose







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-class-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-class-moose/README.html

