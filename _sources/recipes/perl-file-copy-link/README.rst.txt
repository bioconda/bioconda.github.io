.. title:: Package Recipe 'perl-file-copy-link'
.. highlight: bash


perl-file-copy-link
===================

.. conda:recipe:: perl-file-copy-link
   :replaces_section_title:

   Perl extension for replacing a link by a copy of the linked file.

   :homepage: https://metacpan.org/pod/File::Copy::Link
   :license: Perl
   :recipe: /`perl-file-copy-link <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link/meta.yaml>`_

   


.. conda:package:: perl-file-copy-link

   |downloads_perl-file-copy-link| |docker_perl-file-copy-link|

   :versions: 0.140

   :depends: :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-file-copy-link|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-copy-link

   and update with::

      conda update perl-file-copy-link

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-copy-link


.. |required_by_perl-file-copy-link| conda:required_by:: perl-file-copy-link
.. |downloads_perl-file-copy-link| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-link.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-copy-link| image:: https://quay.io/repository/biocontainers/perl-file-copy-link/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-link







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-link/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-link/README.html

