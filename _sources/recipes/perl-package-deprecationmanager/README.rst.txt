:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-package-deprecationmanager'
.. highlight: bash

perl-package-deprecationmanager
===============================

.. conda:recipe:: perl-package-deprecationmanager
   :replaces_section_title:

   Manage deprecation warnings for your distribution

   :homepage: http://metacpan.org/release/Package-DeprecationManager
   :license: artistic_2
   :recipe: /`perl-package-deprecationmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-deprecationmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-package-deprecationmanager/meta.yaml>`_

   


.. conda:package:: perl-package-deprecationmanager

   |downloads_perl-package-deprecationmanager| |docker_perl-package-deprecationmanager|

   :versions: 0.17-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-package-stash: 
   
   :depends perl-params-util: 
   
   :depends perl-sub-install: 
   
   :depends perl-sub-name: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-package-deprecationmanager

   and update with::

      conda update perl-package-deprecationmanager

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-package-deprecationmanager:<tag>

   (see `perl-package-deprecationmanager/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-package-deprecationmanager| image:: https://img.shields.io/conda/dn/bioconda/perl-package-deprecationmanager.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-package-deprecationmanager| image:: https://quay.io/repository/biocontainers/perl-package-deprecationmanager/status
   :target: https://quay.io/repository/biocontainers/perl-package-deprecationmanager
.. _`perl-package-deprecationmanager/tags`: https://quay.io/repository/biocontainers/perl-package-deprecationmanager?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-package-deprecationmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-package-deprecationmanager/README.html