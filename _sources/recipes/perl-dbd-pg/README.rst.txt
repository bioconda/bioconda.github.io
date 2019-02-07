.. title:: Package Recipe 'perl-dbd-pg'
.. highlight: bash


perl-dbd-pg
===========

.. conda:recipe:: perl-dbd-pg
   :replaces_section_title:

   PostgreSQL database driver for the DBI module

   :homepage: http://search.cpan.org/dist/DBD-Pg/
   :license: perl_5
   :recipe: /`perl-dbd-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg/meta.yaml>`_

   


.. conda:package:: perl-dbd-pg

   |downloads_perl-dbd-pg| |docker_perl-dbd-pg|

   :versions: 3.7.4, 3.5.3

   :depends: :conda:package:`libpq` >=10.5,<11.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-dbi`  :conda:package:`postgresql`  

   :required~by: |required_by_perl-dbd-pg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbd-pg

   and update with::

      conda update perl-dbd-pg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-dbd-pg


.. |required_by_perl-dbd-pg| conda:required_by:: perl-dbd-pg
.. |downloads_perl-dbd-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-pg.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dbd-pg| image:: https://quay.io/repository/biocontainers/perl-dbd-pg/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-pg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-pg/README.html

