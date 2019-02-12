:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-sharedir-install'
.. highlight: bash

perl-file-sharedir-install
==========================

.. conda:recipe:: perl-file-sharedir-install
   :replaces_section_title:

   Install shared files

   :homepage: https://github.com/Perl-Toolchain-Gang/File-ShareDir-Install
   :license: perl_5
   :recipe: /`perl-file-sharedir-install <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install/meta.yaml>`_

   


.. conda:package:: perl-file-sharedir-install

   |downloads_perl-file-sharedir-install| |docker_perl-file-sharedir-install|

   :versions: 0.13-0, 0.10-4, 0.10-3, 0.10-2, 0.10-1, 0.10-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-sharedir-install

   and update with::

      conda update perl-file-sharedir-install

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-sharedir-install:<tag>

   (see `perl-file-sharedir-install/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-sharedir-install| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sharedir-install.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-sharedir-install| image:: https://quay.io/repository/biocontainers/perl-file-sharedir-install/status
   :target: https://quay.io/repository/biocontainers/perl-file-sharedir-install
.. _`perl-file-sharedir-install/tags`: https://quay.io/repository/biocontainers/perl-file-sharedir-install?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html