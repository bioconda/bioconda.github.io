:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-cbuilder'
.. highlight: bash

perl-extutils-cbuilder
======================

.. conda:recipe:: perl-extutils-cbuilder/0.280230
   :replaces_section_title:

   Compile and link C code for Perl modules

   :homepage: http://search.cpan.org/dist/ExtUtils-CBuilder
   :license: perl_5
   :recipe: /`perl-extutils-cbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder>`_/`0.280230 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-cbuilder/0.280230/meta.yaml>`_

   


.. conda:package:: perl-extutils-cbuilder

   |downloads_perl-extutils-cbuilder| |docker_perl-extutils-cbuilder|

   :versions: 0.280230-1, 0.280230-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-extutils-makemaker: 
   
   :depends perl-file-temp: 
   
   :depends perl-ipc-cmd: 
   
   :depends perl-perl-ostype: 
   
   :depends perl-text-parsewords: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-cbuilder

   and update with::

      conda update perl-extutils-cbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-cbuilder:<tag>

   (see `perl-extutils-cbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-cbuilder| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-cbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-cbuilder| image:: https://quay.io/repository/biocontainers/perl-extutils-cbuilder/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-cbuilder
.. _`perl-extutils-cbuilder/tags`: https://quay.io/repository/biocontainers/perl-extutils-cbuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-cbuilder/README.html