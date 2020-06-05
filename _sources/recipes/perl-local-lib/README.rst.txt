:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-local-lib'
.. highlight: bash

perl-local-lib
==============

.. conda:recipe:: perl-local-lib
   :replaces_section_title:
   :noindex:

   create and use a local lib\/ for perl modules with PERL5LIB

   :homepage: http://metacpan.org/pod/local::lib
   :license: perl_5
   :recipe: /`perl-local-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib/meta.yaml>`_

   


.. conda:package:: perl-local-lib

   |downloads_perl-local-lib| |docker_perl-local-lib|

   :versions:
      
      

      ``2.000024-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-extutils-makemaker: 
   :depends perl-module-build: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-local-lib

   and update with::

      conda update perl-local-lib

   or use the docker container::

      docker pull quay.io/biocontainers/perl-local-lib:<tag>

   (see `perl-local-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-local-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-local-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-local-lib
   :alt:   (downloads)
.. |docker_perl-local-lib| image:: https://quay.io/repository/biocontainers/perl-local-lib/status
   :target: https://quay.io/repository/biocontainers/perl-local-lib
.. _`perl-local-lib/tags`: https://quay.io/repository/biocontainers/perl-local-lib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-local-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-local-lib/README.html