:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-homedir'
.. highlight: bash

perl-file-homedir
=================

.. conda:recipe:: perl-file-homedir
   :replaces_section_title:

   Find your home and other directories on any platform

   :homepage: https://metacpan.org/release/File-HomeDir
   :license: perl_5
   :recipe: /`perl-file-homedir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-homedir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-homedir/meta.yaml>`_

   


.. conda:package:: perl-file-homedir

   |downloads_perl-file-homedir| |docker_perl-file-homedir|

   :versions: 1.00-2, 1.00-1, 1.00-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-file-path: 
   :depends perl-file-which: 
   :depends perl-pathtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-homedir

   and update with::

      conda update perl-file-homedir

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-homedir:<tag>

   (see `perl-file-homedir/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-homedir| image:: https://img.shields.io/conda/dn/bioconda/perl-file-homedir.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-homedir| image:: https://quay.io/repository/biocontainers/perl-file-homedir/status
   :target: https://quay.io/repository/biocontainers/perl-file-homedir
.. _`perl-file-homedir/tags`: https://quay.io/repository/biocontainers/perl-file-homedir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-homedir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-homedir/README.html