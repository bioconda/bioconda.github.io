:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-metadata'
.. highlight: bash

perl-module-metadata
====================

.. conda:recipe:: perl-module-metadata
   :replaces_section_title:

   Gather package and POD information from perl module files

   :homepage: https://github.com/Perl-Toolchain-Gang/Module-Metadata
   :license: perl_5
   :recipe: /`perl-module-metadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-metadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-metadata/meta.yaml>`_

   


.. conda:package:: perl-module-metadata

   |downloads_perl-module-metadata| |docker_perl-module-metadata|

   :versions: 1.000033-0, 1.000019-1, 1.000019-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-version: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-metadata

   and update with::

      conda update perl-module-metadata

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-metadata:<tag>

   (see `perl-module-metadata/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-metadata| image:: https://img.shields.io/conda/dn/bioconda/perl-module-metadata.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-metadata| image:: https://quay.io/repository/biocontainers/perl-module-metadata/status
   :target: https://quay.io/repository/biocontainers/perl-module-metadata
.. _`perl-module-metadata/tags`: https://quay.io/repository/biocontainers/perl-module-metadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-metadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-metadata/README.html