.. title:: Package Recipe 'perl-mce'
.. highlight: bash


perl-mce
========

.. conda:recipe:: perl-mce
   :replaces_section_title:

   Many\-Core Engine for Perl providing parallel processing capabilities

   :homepage: https://github.com/marioroy/mce-perl
   :license: perl_5
   :recipe: /`perl-mce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce/meta.yaml>`_

   


.. conda:package:: perl-mce

   |downloads_perl-mce| |docker_perl-mce|

   :versions: 1.837, 1.836, 1.835, 1.814

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-file-path`  :conda:package:`perl-getopt-long`  :conda:package:`perl-socket`  :conda:package:`perl-storable`  :conda:package:`perl-time-hires`  

   :required~by: |required_by_perl-mce|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mce

   and update with::

      conda update perl-mce

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mce


.. |required_by_perl-mce| conda:required_by:: perl-mce
.. |downloads_perl-mce| image:: https://img.shields.io/conda/dn/bioconda/perl-mce.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mce| image:: https://quay.io/repository/biocontainers/perl-mce/status
   :target: https://quay.io/repository/biocontainers/perl-mce







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce/README.html

