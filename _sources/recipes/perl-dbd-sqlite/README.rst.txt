.. title:: Package Recipe 'perl-dbd-sqlite'
.. highlight: bash


perl-dbd-sqlite
===============

.. conda:recipe:: perl-dbd-sqlite
   :replaces_section_title:

   Self Contained RDBMS in a DBI Driver

   :homepage: https://metacpan.org/pod/DBD::SQLite
   :license: Perl
   :recipe: /`perl-dbd-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite/meta.yaml>`_

   


.. conda:package:: perl-dbd-sqlite

   |downloads_perl-dbd-sqlite| |docker_perl-dbd-sqlite|

   :versions: 1.60, 1.58, 1.50

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-dbi`  

   :required~by: |required_by_perl-dbd-sqlite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbd-sqlite

   and update with::

      conda update perl-dbd-sqlite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-dbd-sqlite


.. |required_by_perl-dbd-sqlite| conda:required_by:: perl-dbd-sqlite
.. |downloads_perl-dbd-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-sqlite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dbd-sqlite| image:: https://quay.io/repository/biocontainers/perl-dbd-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-sqlite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html

