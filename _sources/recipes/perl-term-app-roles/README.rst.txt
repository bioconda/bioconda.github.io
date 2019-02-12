:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-app-roles'
.. highlight: bash

perl-term-app-roles
===================

.. conda:recipe:: perl-term-app-roles
   :replaces_section_title:

   Collection of roles for terminal\-based application

   :homepage: https://metacpan.org/release/Term-App-Roles
   :license: perl_5
   :recipe: /`perl-term-app-roles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles/meta.yaml>`_

   


.. conda:package:: perl-term-app-roles

   |downloads_perl-term-app-roles| |docker_perl-term-app-roles|

   :versions: 0.02-0, 0.01-2, 0.01-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-moo: 
   
   :depends perl-term-detect-software: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-app-roles

   and update with::

      conda update perl-term-app-roles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-term-app-roles:<tag>

   (see `perl-term-app-roles/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-app-roles| image:: https://img.shields.io/conda/dn/bioconda/perl-term-app-roles.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-term-app-roles| image:: https://quay.io/repository/biocontainers/perl-term-app-roles/status
   :target: https://quay.io/repository/biocontainers/perl-term-app-roles
.. _`perl-term-app-roles/tags`: https://quay.io/repository/biocontainers/perl-term-app-roles?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-app-roles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-app-roles/README.html