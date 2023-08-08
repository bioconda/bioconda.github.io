:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-uri-db'
.. highlight: bash

perl-uri-db
===========

.. conda:recipe:: perl-uri-db
   :replaces_section_title:
   :noindex:

   Database URIs

   :homepage: https://search.cpan.org/dist/URI-db/
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-uri-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-db/meta.yaml>`_

   


.. conda:package:: perl-uri-db

   |downloads_perl-uri-db| |docker_perl-uri-db|

   :versions:
      
      

      ``0.21-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-uri: 
   :depends perl-uri-nested: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-uri-db

   and update with::

      conda update perl-uri-db

   or use the docker container::

      docker pull quay.io/biocontainers/perl-uri-db:<tag>

   (see `perl-uri-db/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-uri-db| image:: https://img.shields.io/conda/dn/bioconda/perl-uri-db.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-uri-db
   :alt:   (downloads)
.. |docker_perl-uri-db| image:: https://quay.io/repository/biocontainers/perl-uri-db/status
   :target: https://quay.io/repository/biocontainers/perl-uri-db
.. _`perl-uri-db/tags`: https://quay.io/repository/biocontainers/perl-uri-db?tab=tags


.. raw:: html

    <script>
        var package = "perl-uri-db";
        var versions = ["0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-uri-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-uri-db/README.html