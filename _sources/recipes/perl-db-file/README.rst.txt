.. title:: Package Recipe 'perl-db-file'
.. highlight: bash


perl-db-file
============

.. conda:recipe:: perl-db-file
   :replaces_section_title:

   Perl5 access to Berkeley DB version 1.x.

   :homepage: https://metacpan.org/pod/Set::IntervalTree
   :license: perl_5
   :recipe: /`perl-db-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-db-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-db-file/meta.yaml>`_

   


.. conda:package:: perl-db-file

   |downloads_perl-db-file| |docker_perl-db-file|

   :versions: 1.843, 1.835

   :depends: :conda:package:`libdb`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-db-file|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-db-file

   and update with::

      conda update perl-db-file

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-db-file


.. |required_by_perl-db-file| conda:required_by:: perl-db-file
.. |downloads_perl-db-file| image:: https://img.shields.io/conda/dn/bioconda/perl-db-file.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-db-file| image:: https://quay.io/repository/biocontainers/perl-db-file/status
   :target: https://quay.io/repository/biocontainers/perl-db-file







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-db-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-db-file/README.html

