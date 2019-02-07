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

   :versions: 0.02

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-file-grep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-grep

   and update with::

      conda update perl-file-grep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-grep


.. |required_by_perl-file-grep| conda:required_by:: perl-file-grep
.. |downloads_perl-file-grep| image:: https://img.shields.io/conda/dn/bioconda/perl-file-grep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-grep| image:: https://quay.io/repository/biocontainers/perl-file-grep/status
   :target: https://quay.io/repository/biocontainers/perl-file-grep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-grep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-grep/README.html

