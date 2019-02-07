.. title:: Package Recipe 'perl-sql-statement'
.. highlight: bash


perl-sql-statement
==================

.. conda:recipe:: perl-sql-statement
   :replaces_section_title:

   SQL parsing and processing engine

   :homepage: https://metacpan.org/release/SQL-Statement
   :license: perl_5
   :recipe: /`perl-sql-statement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement/meta.yaml>`_

   


.. conda:package:: perl-sql-statement

   |downloads_perl-sql-statement| |docker_perl-sql-statement|

   :versions: 1.407

   :depends: :conda:package:`perl-clone`  :conda:package:`perl-math-base-convert`  :conda:package:`perl-module-runtime`  :conda:package:`perl-params-util`  :conda:package:`perl-text-soundex`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-sql-statement|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sql-statement

   and update with::

      conda update perl-sql-statement

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sql-statement


.. |required_by_perl-sql-statement| conda:required_by:: perl-sql-statement
.. |downloads_perl-sql-statement| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-statement.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sql-statement| image:: https://quay.io/repository/biocontainers/perl-sql-statement/status
   :target: https://quay.io/repository/biocontainers/perl-sql-statement







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-statement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-statement/README.html

