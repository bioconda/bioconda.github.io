:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-argvfile'
.. highlight: bash

perl-getopt-argvfile
====================

.. conda:recipe:: perl-getopt-argvfile/1.11
   :replaces_section_title:

   interpolates script options from files into \@ARGV or another array

   :homepage: http://metacpan.org/pod/Getopt::ArgvFile
   :license: artistic_1
   :recipe: /`perl-getopt-argvfile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile>`_/`1.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile/1.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-argvfile/1.11/meta.yaml>`_

   


.. conda:package:: perl-getopt-argvfile

   |downloads_perl-getopt-argvfile| |docker_perl-getopt-argvfile|

   :versions: 1.11-1, 1.11-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-test-harness: 
   
   :depends perl-test-simple: 
   
   :depends perl-text-parsewords: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-getopt-argvfile

   and update with::

      conda update perl-getopt-argvfile

   or use the docker container::

      docker pull quay.io/biocontainers/perl-getopt-argvfile:<tag>

   (see `perl-getopt-argvfile/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-getopt-argvfile| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-argvfile.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-getopt-argvfile| image:: https://quay.io/repository/biocontainers/perl-getopt-argvfile/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-argvfile
.. _`perl-getopt-argvfile/tags`: https://quay.io/repository/biocontainers/perl-getopt-argvfile?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-argvfile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-argvfile/README.html