:orphan:  .. only available via index, not via toctree

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

   :versions: 0.34-3, 0.34-2, 0.34-1, 0.34-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-ipc-run: 
   :depends perl-regexp-common: 
   :depends perl-text-balanced: >=1.97
   :depends perl-text-wrap: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-r

   and update with::

      conda update perl-statistics-r

   or use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-r:<tag>

   (see `perl-statistics-r/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-r| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-r.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-r
   :alt:   (downloads)
.. |docker_perl-statistics-r| image:: https://quay.io/repository/biocontainers/perl-statistics-r/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-r
.. _`perl-statistics-r/tags`: https://quay.io/repository/biocontainers/perl-statistics-r?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-r/README.html