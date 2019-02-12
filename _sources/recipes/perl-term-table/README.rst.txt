:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-table'
.. highlight: bash

perl-term-table
===============

.. conda:recipe:: perl-term-table
   :replaces_section_title:

   Format a header and rows into a table

   :homepage: http://metacpan.org/pod/Term::Table
   :license: perl_5
   :recipe: /`perl-term-table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table/meta.yaml>`_

   


.. conda:package:: perl-term-table

   |downloads_perl-term-table| |docker_perl-term-table|

   :versions: 0.013-0, 0.012-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-importer: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-table

   and update with::

      conda update perl-term-table

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-term-table:<tag>

   (see `perl-term-table/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-table| image:: https://img.shields.io/conda/dn/bioconda/perl-term-table.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-term-table| image:: https://quay.io/repository/biocontainers/perl-term-table/status
   :target: https://quay.io/repository/biocontainers/perl-term-table
.. _`perl-term-table/tags`: https://quay.io/repository/biocontainers/perl-term-table?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-table/README.html