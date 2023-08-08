:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-abstract'
.. highlight: bash

perl-sql-abstract
=================

.. conda:recipe:: perl-sql-abstract
   :replaces_section_title:
   :noindex:

   Generate SQL from Perl data structures

   :homepage: http://metacpan.org/pod/SQL-Abstract
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-sql-abstract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract/meta.yaml>`_

   


.. conda:package:: perl-sql-abstract

   |downloads_perl-sql-abstract| |docker_perl-sql-abstract|

   :versions:
      
      

      ``2.000001-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :depends perl-data-dumper-concise: 
   :depends perl-hash-merge: 
   :depends perl-module-runtime: 
   :depends perl-moo: 
   :depends perl-mro-compat: 
   :depends perl-sub-quote: 
   :depends perl-test-deep: 
   :depends perl-test-exception: 
   :depends perl-test-warn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sql-abstract

   and update with::

      conda update perl-sql-abstract

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sql-abstract:<tag>

   (see `perl-sql-abstract/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sql-abstract| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-abstract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-abstract
   :alt:   (downloads)
.. |docker_perl-sql-abstract| image:: https://quay.io/repository/biocontainers/perl-sql-abstract/status
   :target: https://quay.io/repository/biocontainers/perl-sql-abstract
.. _`perl-sql-abstract/tags`: https://quay.io/repository/biocontainers/perl-sql-abstract?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-abstract";
        var versions = ["2.000001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-abstract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-abstract/README.html