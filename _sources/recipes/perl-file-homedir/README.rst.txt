.. title:: Package Recipe 'perl-file-homedir'
.. highlight: bash


perl-file-homedir
=================

.. conda:recipe:: perl-file-homedir
   :replaces_section_title:

   Find your home and other directories on any platform

   :homepage: https://metacpan.org/release/File-HomeDir
   :license: perl_5
   :recipe: /`perl-file-homedir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-homedir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-homedir/meta.yaml>`_

   


.. conda:package:: perl-file-homedir

   |downloads_perl-file-homedir| |docker_perl-file-homedir|

   :versions: 1.00

   :depends: :conda:package:`perl-carp`  :conda:package:`perl-file-path`  :conda:package:`perl-file-which`  :conda:package:`perl-pathtools`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-file-homedir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-homedir

   and update with::

      conda update perl-file-homedir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-homedir


.. |required_by_perl-file-homedir| conda:required_by:: perl-file-homedir
.. |downloads_perl-file-homedir| image:: https://img.shields.io/conda/dn/bioconda/perl-file-homedir.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-homedir| image:: https://quay.io/repository/biocontainers/perl-file-homedir/status
   :target: https://quay.io/repository/biocontainers/perl-file-homedir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-homedir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-homedir/README.html

