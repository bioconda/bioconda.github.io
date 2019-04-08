:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-recursive'
.. highlight: bash

perl-file-copy-recursive
========================

.. conda:recipe:: perl-file-copy-recursive
   :replaces_section_title:

   Perl extension for recursively copying files and directories

   :homepage: https://metacpan.org/pod/File::Copy::Recursive
   :license: Perl
   :recipe: /`perl-file-copy-recursive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive/meta.yaml>`_

   


.. conda:package:: perl-file-copy-recursive

   |downloads_perl-file-copy-recursive| |docker_perl-file-copy-recursive|

   :versions: 0.44-0, 0.38-3, 0.38-2, 0.38-1
   
   :depends libgcc-ng: >=4.9
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-copy-recursive

   and update with::

      conda update perl-file-copy-recursive

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-copy-recursive:<tag>

   (see `perl-file-copy-recursive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-copy-recursive| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-recursive.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-copy-recursive| image:: https://quay.io/repository/biocontainers/perl-file-copy-recursive/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-recursive
.. _`perl-file-copy-recursive/tags`: https://quay.io/repository/biocontainers/perl-file-copy-recursive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html