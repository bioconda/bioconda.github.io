.. title:: Package Recipe 'perl-file-chdir'
.. highlight: bash


perl-file-chdir
===============

.. conda:recipe:: perl-file-chdir
   :replaces_section_title:

   a more sensible way to change directories

   :homepage: https://github.com/dagolden/File-chdir
   :license: perl_5
   :recipe: /`perl-file-chdir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-chdir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-chdir/meta.yaml>`_

   


.. conda:package:: perl-file-chdir

   |downloads_perl-file-chdir| |docker_perl-file-chdir|

   :versions: 0.1010

   :depends: :conda:package:`perl-pathtools`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-file-chdir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-chdir

   and update with::

      conda update perl-file-chdir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-chdir


.. |required_by_perl-file-chdir| conda:required_by:: perl-file-chdir
.. |downloads_perl-file-chdir| image:: https://img.shields.io/conda/dn/bioconda/perl-file-chdir.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-chdir| image:: https://quay.io/repository/biocontainers/perl-file-chdir/status
   :target: https://quay.io/repository/biocontainers/perl-file-chdir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-chdir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-chdir/README.html

