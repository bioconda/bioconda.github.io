:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-grep'
.. highlight: bash

perl-file-grep
==============

.. conda:recipe:: perl-file-grep
   :replaces_section_title:

   Find matches to a pattern in a series of files and related functions

   :homepage: http://metacpan.org/pod/File::Grep
   :license: unknown
   :recipe: /`perl-file-grep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-grep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-grep/meta.yaml>`_

   


.. conda:package:: perl-file-grep

   |downloads_perl-file-grep| |docker_perl-file-grep|

   :versions: 0.02-3, 0.02-2, 0.02-1, 0.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-grep

   and update with::

      conda update perl-file-grep

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-grep:<tag>

   (see `perl-file-grep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-grep| image:: https://img.shields.io/conda/dn/bioconda/perl-file-grep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-grep| image:: https://quay.io/repository/biocontainers/perl-file-grep/status
   :target: https://quay.io/repository/biocontainers/perl-file-grep
.. _`perl-file-grep/tags`: https://quay.io/repository/biocontainers/perl-file-grep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-grep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-grep/README.html