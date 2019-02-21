:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-loaded'
.. highlight: bash

perl-module-loaded
==================

.. conda:recipe:: perl-module-loaded
   :replaces_section_title:

   Mark modules as loaded\/unloaded

   :homepage: http://metacpan.org/pod/Module::Loaded
   :license: perl_5
   :recipe: /`perl-module-loaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-loaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-loaded/meta.yaml>`_

   


.. conda:package:: perl-module-loaded

   |downloads_perl-module-loaded| |docker_perl-module-loaded|

   :versions: 0.08-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-loaded

   and update with::

      conda update perl-module-loaded

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-loaded:<tag>

   (see `perl-module-loaded/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-loaded| image:: https://img.shields.io/conda/dn/bioconda/perl-module-loaded.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-loaded| image:: https://quay.io/repository/biocontainers/perl-module-loaded/status
   :target: https://quay.io/repository/biocontainers/perl-module-loaded
.. _`perl-module-loaded/tags`: https://quay.io/repository/biocontainers/perl-module-loaded?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-loaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-loaded/README.html