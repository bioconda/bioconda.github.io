.. title:: Package Recipe 'perl-statistics-r'
.. highlight: bash


perl-statistics-r
=================

.. conda:recipe:: perl-statistics-r
   :replaces_section_title:

   Statistics\:\:R \- Perl interface with the R statistical program

   :homepage: http://search.cpan.org/dist/Statistics-R/
   :license: Perl5
   :recipe: /`perl-statistics-r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-r/meta.yaml>`_

   


.. conda:package:: perl-statistics-r

   |downloads_perl-statistics-r| |docker_perl-statistics-r|

   :versions: 0.34

   :depends: :conda:package:`gcc`  :conda:package:`libgcc`  :conda:package:`perl-ipc-run`  :conda:package:`perl-regexp-common`  :conda:package:`perl-text-balanced` >=1.97 :conda:package:`perl-text-wrap` >=0.77 :conda:package:`perl-threaded`  :conda:package:`r-essentials`  

   :required~by: |required_by_perl-statistics-r|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-r

   and update with::

      conda update perl-statistics-r

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-statistics-r


.. |required_by_perl-statistics-r| conda:required_by:: perl-statistics-r
.. |downloads_perl-statistics-r| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-r.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-r| image:: https://quay.io/repository/biocontainers/perl-statistics-r/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-r







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-r/README.html

