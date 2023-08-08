:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mojo-pg'
.. highlight: bash

perl-mojo-pg
============

.. conda:recipe:: perl-mojo-pg
   :replaces_section_title:
   :noindex:

   Mojolicious PostgreSQL

   :homepage: https://mojolicious.org
   :license: Artistic-2.0
   :recipe: /`perl-mojo-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-pg/meta.yaml>`_

   


.. conda:package:: perl-mojo-pg

   |downloads_perl-mojo-pg| |docker_perl-mojo-pg|

   :versions:
      
      

      ``4.27-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbd-pg: 
   :depends perl-mojolicious: 
   :depends perl-sql-abstract-pg: 
   :depends perl-sql-statement: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mojo-pg

   and update with::

      conda update perl-mojo-pg

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mojo-pg:<tag>

   (see `perl-mojo-pg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mojo-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-mojo-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mojo-pg
   :alt:   (downloads)
.. |docker_perl-mojo-pg| image:: https://quay.io/repository/biocontainers/perl-mojo-pg/status
   :target: https://quay.io/repository/biocontainers/perl-mojo-pg
.. _`perl-mojo-pg/tags`: https://quay.io/repository/biocontainers/perl-mojo-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-mojo-pg";
        var versions = ["4.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mojo-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mojo-pg/README.html