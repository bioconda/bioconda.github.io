:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-abstract-pg'
.. highlight: bash

perl-sql-abstract-pg
====================

.. conda:recipe:: perl-sql-abstract-pg
   :replaces_section_title:
   :noindex:

   PostgreSQL features for SQL\:\:Abstract

   :homepage: https://mojolicious.org
   :license: Artistic-2.0
   :recipe: /`perl-sql-abstract-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract-pg/meta.yaml>`_

   


.. conda:package:: perl-sql-abstract-pg

   |downloads_perl-sql-abstract-pg| |docker_perl-sql-abstract-pg|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-sql-abstract: 
   :depends perl-test-deep: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sql-abstract-pg

   and update with::

      conda update perl-sql-abstract-pg

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sql-abstract-pg:<tag>

   (see `perl-sql-abstract-pg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sql-abstract-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-abstract-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-abstract-pg
   :alt:   (downloads)
.. |docker_perl-sql-abstract-pg| image:: https://quay.io/repository/biocontainers/perl-sql-abstract-pg/status
   :target: https://quay.io/repository/biocontainers/perl-sql-abstract-pg
.. _`perl-sql-abstract-pg/tags`: https://quay.io/repository/biocontainers/perl-sql-abstract-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-abstract-pg";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-abstract-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-abstract-pg/README.html