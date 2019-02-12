:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-implementation'
.. highlight: bash

perl-module-implementation
==========================

.. conda:recipe:: perl-module-implementation
   :replaces_section_title:

   Loads one of several alternate underlying implementations for a module

   :homepage: http://metacpan.org/release/Module-Implementation
   :license: artistic_2
   :recipe: /`perl-module-implementation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-implementation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-implementation/meta.yaml>`_

   


.. conda:package:: perl-module-implementation

   |downloads_perl-module-implementation| |docker_perl-module-implementation|

   :versions: 0.09-2, 0.09-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-carp: 
   
   :depends perl-module-runtime: 
   
   :depends perl-try-tiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-implementation

   and update with::

      conda update perl-module-implementation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-implementation:<tag>

   (see `perl-module-implementation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-implementation| image:: https://img.shields.io/conda/dn/bioconda/perl-module-implementation.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-implementation| image:: https://quay.io/repository/biocontainers/perl-module-implementation/status
   :target: https://quay.io/repository/biocontainers/perl-module-implementation
.. _`perl-module-implementation/tags`: https://quay.io/repository/biocontainers/perl-module-implementation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-implementation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-implementation/README.html