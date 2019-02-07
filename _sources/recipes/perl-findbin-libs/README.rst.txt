.. title:: Package Recipe 'perl-findbin-libs'
.. highlight: bash


perl-findbin-libs
=================

.. conda:recipe:: perl-findbin-libs/2.017008
   :replaces_section_title:

   locate and a \'use lib\' or export directories based on \$FindBin\:\:Bin.

   :homepage: http://metacpan.org/pod/FindBin::libs
   :license: perl_5
   :recipe: /`perl-findbin-libs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs>`_/`2.017008 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008/meta.yaml>`_

   


.. conda:package:: perl-findbin-libs

   |downloads_perl-findbin-libs| |docker_perl-findbin-libs|

   :versions: 2.017008

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-carp`  :conda:package:`perl-file-temp`  :conda:package:`perl-module-fromperlver`  :conda:package:`perl-pathtools`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-test-simple`  

   :required~by: |required_by_perl-findbin-libs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-findbin-libs

   and update with::

      conda update perl-findbin-libs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-findbin-libs


.. |required_by_perl-findbin-libs| conda:required_by:: perl-findbin-libs
.. |downloads_perl-findbin-libs| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-libs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-findbin-libs| image:: https://quay.io/repository/biocontainers/perl-findbin-libs/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-libs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-libs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-libs/README.html

