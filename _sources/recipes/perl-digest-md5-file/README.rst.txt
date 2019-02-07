.. title:: Package Recipe 'perl-digest-md5-file'
.. highlight: bash


perl-digest-md5-file
====================

.. conda:recipe:: perl-digest-md5-file
   :replaces_section_title:

   Perl extension for getting MD5 sums for files and urls.

   :homepage: http://metacpan.org/pod/Digest::MD5::File
   :license: unknown
   :recipe: /`perl-digest-md5-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5-file/meta.yaml>`_

   


.. conda:package:: perl-digest-md5-file

   |downloads_perl-digest-md5-file| |docker_perl-digest-md5-file|

   :versions: 0.08

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-lwp-simple`  

   :required~by: |required_by_perl-digest-md5-file|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-md5-file

   and update with::

      conda update perl-digest-md5-file

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-digest-md5-file


.. |required_by_perl-digest-md5-file| conda:required_by:: perl-digest-md5-file
.. |downloads_perl-digest-md5-file| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-md5-file.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-md5-file| image:: https://quay.io/repository/biocontainers/perl-digest-md5-file/status
   :target: https://quay.io/repository/biocontainers/perl-digest-md5-file







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-md5-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-md5-file/README.html

