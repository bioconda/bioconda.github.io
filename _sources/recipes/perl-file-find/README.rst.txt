.. title:: Package Recipe 'perl-file-find'
.. highlight: bash


perl-file-find
==============

.. conda:recipe:: perl-file-find/1.27
   :replaces_section_title:

   Traverse a directory tree.

   :homepage: http://metacpan.org/pod/File::Find
   :license: perl_5
   :recipe: /`perl-file-find <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find>`_/`1.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27/meta.yaml>`_

   


.. conda:package:: perl-file-find

   |downloads_perl-file-find| |docker_perl-file-find|

   :versions: 1.27

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-file-find|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-find

   and update with::

      conda update perl-file-find

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-find


.. |required_by_perl-file-find| conda:required_by:: perl-file-find
.. |downloads_perl-file-find| image:: https://img.shields.io/conda/dn/bioconda/perl-file-find.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-find| image:: https://quay.io/repository/biocontainers/perl-file-find/status
   :target: https://quay.io/repository/biocontainers/perl-file-find







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-find/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-find/README.html

