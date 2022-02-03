:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-pg'
.. highlight: bash

perl-dbd-pg
===========

.. conda:recipe:: perl-dbd-pg
   :replaces_section_title:
   :noindex:

   PostgreSQL database driver for the DBI module

   :homepage: http://search.cpan.org/dist/DBD-Pg/
   :license: perl_5
   :recipe: /`perl-dbd-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg/meta.yaml>`_

   


.. conda:package:: perl-dbd-pg

   |downloads_perl-dbd-pg| |docker_perl-dbd-pg|

   :versions:
      
      

      ``3.15.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.4-0``,  ``3.5.3-1``,  ``3.5.3-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libpq: ``>=14.1,<15.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-dbi: 
   :depends postgresql: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbd-pg

   and update with::

      conda update perl-dbd-pg

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-pg:<tag>

   (see `perl-dbd-pg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-pg
   :alt:   (downloads)
.. |docker_perl-dbd-pg| image:: https://quay.io/repository/biocontainers/perl-dbd-pg/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-pg
.. _`perl-dbd-pg/tags`: https://quay.io/repository/biocontainers/perl-dbd-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-pg";
        var versions = ["3.15.0","3.8.1","3.8.0","3.7.4","3.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-pg/README.html