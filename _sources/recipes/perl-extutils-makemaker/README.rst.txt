:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-makemaker'
.. highlight: bash

perl-extutils-makemaker
=======================

.. conda:recipe:: perl-extutils-makemaker
   :replaces_section_title:

   Create a module Makefile

   :homepage: https://metacpan.org/release/ExtUtils-MakeMaker
   :license: perl_5
   :recipe: /`perl-extutils-makemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-makemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-makemaker/meta.yaml>`_

   


.. conda:package:: perl-extutils-makemaker

   |downloads_perl-extutils-makemaker| |docker_perl-extutils-makemaker|

   :versions: 7.36-0, 7.34-3, 7.34-2, 7.34-1, 7.34-0, 7.24-3, 7.24-1, 7.24-0, 6.66-2, 6.66-1, 6.66-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-makemaker

   and update with::

      conda update perl-extutils-makemaker

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-makemaker:<tag>

   (see `perl-extutils-makemaker/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-makemaker| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-makemaker.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-makemaker| image:: https://quay.io/repository/biocontainers/perl-extutils-makemaker/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-makemaker
.. _`perl-extutils-makemaker/tags`: https://quay.io/repository/biocontainers/perl-extutils-makemaker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-makemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-makemaker/README.html