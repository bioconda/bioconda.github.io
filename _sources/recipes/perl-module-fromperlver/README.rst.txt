.. title:: Package Recipe 'perl-module-fromperlver'
.. highlight: bash


perl-module-fromperlver
=======================

.. conda:recipe:: perl-module-fromperlver/0.008002
   :replaces_section_title:

   install modules compatible with the running perl.

   :homepage: http://metacpan.org/pod/Module::FromPerlVer
   :license: perl_5
   :recipe: /`perl-module-fromperlver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver>`_/`0.008002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002/meta.yaml>`_

   


.. conda:package:: perl-module-fromperlver

   |downloads_perl-module-fromperlver| |docker_perl-module-fromperlver|

   :versions: 0.008002

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-archive-tar`  :conda:package:`perl-carp`  :conda:package:`perl-file-copy-recursive`  :conda:package:`perl-lib`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-parent`  :conda:package:`perl-pathtools`  :conda:package:`perl-perl-version`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-test-deep`  :conda:package:`perl-test-simple`  :conda:package:`perl-version-next`  

   :required~by: |required_by_perl-module-fromperlver|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-fromperlver

   and update with::

      conda update perl-module-fromperlver

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-fromperlver


.. |required_by_perl-module-fromperlver| conda:required_by:: perl-module-fromperlver
.. |downloads_perl-module-fromperlver| image:: https://img.shields.io/conda/dn/bioconda/perl-module-fromperlver.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-fromperlver| image:: https://quay.io/repository/biocontainers/perl-module-fromperlver/status
   :target: https://quay.io/repository/biocontainers/perl-module-fromperlver







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-fromperlver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-fromperlver/README.html

