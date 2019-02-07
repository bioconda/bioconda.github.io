.. title:: Package Recipe 'perl-file-sharedir'
.. highlight: bash


perl-file-sharedir
==================

.. conda:recipe:: perl-file-sharedir
   :replaces_section_title:

   Locate per\-dist and per\-module shared files

   :homepage: https://metacpan.org/release/File-ShareDir
   :license: perl_5
   :recipe: /`perl-file-sharedir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir/meta.yaml>`_

   


.. conda:package:: perl-file-sharedir

   |downloads_perl-file-sharedir| |docker_perl-file-sharedir|

   :versions: 1.116, 1.102

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-class-inspector`  

   :required~by: |required_by_perl-file-sharedir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-sharedir

   and update with::

      conda update perl-file-sharedir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-sharedir


.. |required_by_perl-file-sharedir| conda:required_by:: perl-file-sharedir
.. |downloads_perl-file-sharedir| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sharedir.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-sharedir| image:: https://quay.io/repository/biocontainers/perl-file-sharedir/status
   :target: https://quay.io/repository/biocontainers/perl-file-sharedir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sharedir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sharedir/README.html

