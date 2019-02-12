:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hook-lexwrap'
.. highlight: bash

perl-hook-lexwrap
=================

.. conda:recipe:: perl-hook-lexwrap/0.26
   :replaces_section_title:

   Lexically scoped subroutine wrappers

   :homepage: https://github.com/karenetheridge/Hook-LexWrap
   :license: perl_5
   :recipe: /`perl-hook-lexwrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap>`_/`0.26 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap/0.26>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap/0.26/meta.yaml>`_

   


.. conda:package:: perl-hook-lexwrap

   |downloads_perl-hook-lexwrap| |docker_perl-hook-lexwrap|

   :versions: 0.26-1, 0.26-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-carp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-hook-lexwrap

   and update with::

      conda update perl-hook-lexwrap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-hook-lexwrap:<tag>

   (see `perl-hook-lexwrap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hook-lexwrap| image:: https://img.shields.io/conda/dn/bioconda/perl-hook-lexwrap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-hook-lexwrap| image:: https://quay.io/repository/biocontainers/perl-hook-lexwrap/status
   :target: https://quay.io/repository/biocontainers/perl-hook-lexwrap
.. _`perl-hook-lexwrap/tags`: https://quay.io/repository/biocontainers/perl-hook-lexwrap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hook-lexwrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hook-lexwrap/README.html