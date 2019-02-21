:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-tar'
.. highlight: bash

perl-archive-tar
================

.. conda:recipe:: perl-archive-tar
   :replaces_section_title:

   Manipulates TAR archives

   :homepage: http://metacpan.org/pod/Archive::Tar
   :license: perl_5
   :recipe: /`perl-archive-tar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar/meta.yaml>`_

   


.. conda:package:: perl-archive-tar

   |downloads_perl-archive-tar| |docker_perl-archive-tar|

   :versions: 2.32-0, 2.18-3, 2.18-2, 2.18-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-io-compress: 
   
   :depends perl-io-zlib: 
   
   :depends perl-pathtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-tar

   and update with::

      conda update perl-archive-tar

   or use the docker container::

      docker pull quay.io/biocontainers/perl-archive-tar:<tag>

   (see `perl-archive-tar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-tar| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-tar.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-archive-tar| image:: https://quay.io/repository/biocontainers/perl-archive-tar/status
   :target: https://quay.io/repository/biocontainers/perl-archive-tar
.. _`perl-archive-tar/tags`: https://quay.io/repository/biocontainers/perl-archive-tar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-tar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-tar/README.html