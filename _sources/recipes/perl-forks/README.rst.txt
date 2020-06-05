:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-forks'
.. highlight: bash

perl-forks
==========

.. conda:recipe:: perl-forks
   :replaces_section_title:
   :noindex:

   drop\-in replacement for Perl threads using fork\(\)

   :homepage: http://search.cpan.org/~rybskej/forks/lib/forks.pm
   :license: perl_5
   :recipe: /`perl-forks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-forks/meta.yaml>`_

   


.. conda:package:: perl-forks

   |downloads_perl-forks| |docker_perl-forks|

   :versions:
      
      

      ``0.36-4``,  ``0.36-3``,  ``0.36-2``,  ``0.36-1``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-acme-damn: 
   :depends perl-attribute-handlers: 
   :depends perl-devel-symdump: 
   :depends perl-list-moreutils: 
   :depends perl-storable: 
   :depends perl-sys-sigaction: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-forks

   and update with::

      conda update perl-forks

   or use the docker container::

      docker pull quay.io/biocontainers/perl-forks:<tag>

   (see `perl-forks/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-forks| image:: https://img.shields.io/conda/dn/bioconda/perl-forks.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-forks
   :alt:   (downloads)
.. |docker_perl-forks| image:: https://quay.io/repository/biocontainers/perl-forks/status
   :target: https://quay.io/repository/biocontainers/perl-forks
.. _`perl-forks/tags`: https://quay.io/repository/biocontainers/perl-forks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-forks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-forks/README.html