.. title:: Package Recipe 'perl-archive-tar'
.. highlight: bash


perl-archive-tar
================

.. conda:recipe:: perl-archive-tar
   :replaces_section_title:

   Manipulates TAR archives

   :homepage: http://metacpan.org/pod/Archive::Tar
   :license: perl_5
   :recipe: /`perl-archive-tar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar/meta.yaml>`_

   


.. conda:package:: perl-archive-tar

   |downloads_perl-archive-tar| |docker_perl-archive-tar|

   :versions: 2.32, 2.18

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-io-compress`  :conda:package:`perl-io-zlib`  :conda:package:`perl-pathtools`  

   :required~by: |required_by_perl-archive-tar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-tar

   and update with::

      conda update perl-archive-tar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-archive-tar


.. |required_by_perl-archive-tar| conda:required_by:: perl-archive-tar
.. |downloads_perl-archive-tar| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-tar.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-archive-tar| image:: https://quay.io/repository/biocontainers/perl-archive-tar/status
   :target: https://quay.io/repository/biocontainers/perl-archive-tar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-tar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-tar/README.html

