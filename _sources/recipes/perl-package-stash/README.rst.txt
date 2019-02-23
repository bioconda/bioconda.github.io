:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-package-stash'
.. highlight: bash

perl-package-stash
==================

.. conda:recipe:: perl-package-stash
   :replaces_section_title:

   routines for manipulating stashes

   :homepage: http://metacpan.org/release/Package-Stash
   :license: perl_5
   :recipe: /`perl-package-stash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-stash/meta.yaml>`_

   


.. conda:package:: perl-package-stash

   |downloads_perl-package-stash| |docker_perl-package-stash|

   :versions: 0.38-0, 0.37-2, 0.37-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-apache-test: 
   
   :depends perl-app-cpanminus: 
   
   :depends perl-dist-checkconflicts: 
   
   :depends perl-getopt-long: 
   
   :depends perl-module-implementation: 
   
   :depends perl-package-stash-xs: 
   
   :depends perl-scalar-list-utils: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-package-stash

   and update with::

      conda update perl-package-stash

   or use the docker container::

      docker pull quay.io/biocontainers/perl-package-stash:<tag>

   (see `perl-package-stash/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-package-stash| image:: https://img.shields.io/conda/dn/bioconda/perl-package-stash.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-package-stash| image:: https://quay.io/repository/biocontainers/perl-package-stash/status
   :target: https://quay.io/repository/biocontainers/perl-package-stash
.. _`perl-package-stash/tags`: https://quay.io/repository/biocontainers/perl-package-stash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-package-stash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-package-stash/README.html