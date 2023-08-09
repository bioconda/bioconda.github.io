:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-minion-backend-sqlite'
.. highlight: bash

perl-minion-backend-sqlite
==========================

.. conda:recipe:: perl-minion-backend-sqlite
   :replaces_section_title:
   :noindex:

   SQLite backend for Minion job queue

   :homepage: https://github.com/Grinnz/Minion-Backend-SQLite
   :license: Artistic-2.0
   :recipe: /`perl-minion-backend-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite/meta.yaml>`_

   


.. conda:package:: perl-minion-backend-sqlite

   |downloads_perl-minion-backend-sqlite| |docker_perl-minion-backend-sqlite|

   :versions:
      
      

      ``5.0.7-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-minion: 
   :depends perl-mojo-sqlite: 
   :depends perl-mojolicious: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-minion-backend-sqlite

   and update with::

      conda update perl-minion-backend-sqlite

   or use the docker container::

      docker pull quay.io/biocontainers/perl-minion-backend-sqlite:<tag>

   (see `perl-minion-backend-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-minion-backend-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-minion-backend-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-minion-backend-sqlite
   :alt:   (downloads)
.. |docker_perl-minion-backend-sqlite| image:: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite
.. _`perl-minion-backend-sqlite/tags`: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-minion-backend-sqlite";
        var versions = ["5.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html