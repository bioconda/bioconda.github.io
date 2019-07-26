:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-mysql'
.. highlight: bash

perl-dbd-mysql
==============

.. conda:recipe:: perl-dbd-mysql
   :replaces_section_title:

   A MySQL driver for the Perl5 Database Interface \(DBI\)

   :homepage: http://dbi.perl.org/
   :license: perl_5
   :recipe: /`perl-dbd-mysql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql/meta.yaml>`_
   :links: biotools: :biotools:`dbd`, doi: :doi:`10.1093/nar/gkm964`

   


.. conda:package:: perl-dbd-mysql

   |downloads_perl-dbd-mysql| |docker_perl-dbd-mysql|

   :versions: 4.046-1, 4.046-0, 4.033-3, 4.033-2, 4.033-1, 4.033-0
   
   :depends libcxx: >=4.0.1
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbd-mysql

   and update with::

      conda update perl-dbd-mysql

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-mysql:<tag>

   (see `perl-dbd-mysql/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-mysql| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-mysql.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-mysql
   :alt:   (downloads)
.. |docker_perl-dbd-mysql| image:: https://quay.io/repository/biocontainers/perl-dbd-mysql/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-mysql
.. _`perl-dbd-mysql/tags`: https://quay.io/repository/biocontainers/perl-dbd-mysql?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-mysql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-mysql/README.html